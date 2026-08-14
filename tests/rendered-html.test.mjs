import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the portfolio and its essential navigation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Karsci Cespedes — Data Science Portfolio<\/title>/i);
  assert.match(html, /id="about"/);
  assert.match(html, /id="skills"/);
  assert.match(html, /id="experience"/);
  assert.match(html, /id="education"/);
  assert.match(html, /id="certificates"/);
  assert.match(html, /id="events"/);
  assert.match(html, /id="connect"/);
  assert.match(html, /href="\/karsci-cespedes-resume\.pdf"/);
  assert.match(html, /Karsci/);
  assert.match(html, /Business System Analyst/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("includes the generated social card and a replaceable resume download", async () => {
  const [og, resume, portrait, source] = await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/karsci-cespedes-resume.pdf", import.meta.url)),
    access(new URL("../public/karsci-cespedes.jpg", import.meta.url)),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  ]);
  assert.equal(og, undefined);
  assert.equal(resume, undefined);
  assert.equal(portrait, undefined);
  assert.match(source, /Karsci Vincze Cespedes standing outdoors/);
  assert.match(source, /Machine Learning & Data Science/);
});
