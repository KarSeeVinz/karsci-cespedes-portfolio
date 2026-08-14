import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const projectRoot = process.cwd();
const clientDirectory = path.join(projectRoot, "dist", "client");
const workerPath = path.join(projectRoot, "dist", "server", "index.js");
const outputDirectory = path.join(projectRoot, ".vercel-static");

if (!workerPath.startsWith(projectRoot) || !outputDirectory.startsWith(projectRoot)) {
  throw new Error("Static export paths must stay inside the project directory.");
}

const { default: worker } = await import(
  `${pathToFileURL(workerPath).href}?export=${Date.now()}`
);

const response = await worker.fetch(
  new Request("https://karsci-cespedes-portfolio.vercel.app/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Portfolio render failed with status ${response.status}.`);
}

const renderedHtml = await response.text();
const stylesheetMatch = renderedHtml.match(
  /<link\b[^>]*\brel=["']stylesheet["'][^>]*\bhref=["']([^"']+)["'][^>]*>/i,
);
const stylesheetHref = stylesheetMatch?.[1];
const stylesheet = stylesheetHref
  ? await readFile(path.join(clientDirectory, stylesheetHref.replace(/^\//, "")), "utf8")
  : "";
const staticHtml = renderedHtml
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
  .replace(/<link\b(?=[^>]*\brel=["']preload["'])(?=[^>]*\bas=["']image["'])[^>]*>/gi, "")
  .replace(
    /<link\b[^>]*\brel=["']stylesheet["'][^>]*>/i,
    `<style data-portfolio-styles>${stylesheet}</style>`,
  );

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });
await writeFile(path.join(outputDirectory, "index.html"), staticHtml, "utf8");

console.log("Static portfolio exported for Vercel.");
