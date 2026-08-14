const navItems = [
  "About",
  "Skills",
  "Experience",
  "Education",
  "Certificates",
  "Events",
];

const skills = [
  { label: "Engineer", items: ["Python & SQL", "Data pipelines", "Database management"] },
  { label: "Model", items: ["Machine learning", "Deep learning", "AI data annotation"] },
  { label: "Translate", items: ["Tableau & reporting", "Business analysis", "Data storytelling"] },
];

const experience = [
  {
    period: "2024 — Present",
    title: "Business System Analyst",
    organisation: "Greenergy Development · Cagayan de Oro",
    text: "Building data capture systems, business databases, and reliable pipelines that turn operational metrics into strategic recommendations.",
  },
  {
    period: "2025 — 2026",
    title: "Part-time Instructor",
    organisation: "USTSP · Cagayan de Oro",
    text: "Taught Python, data structures, and data science fundamentals while designing practical, code-focused assessments.",
  },
  {
    period: "2025",
    title: "AI Annotator",
    organisation: "Klatch Technologies · Remote",
    text: "Produced high-quality labelled datasets and refined annotation guidelines with AI development teams.",
  },
];

const certificates = [
  { type: "Credential", title: "Machine Learning & Data Science", issuer: "Kaggle" },
  { type: "Course", title: "Introduction to Generative AI", issuer: "AWS" },
  { type: "Credential", title: "Analytics Cloud & Build Apps", issuer: "SAP" },
];

const events = [
  { date: "IN PROGRESS", title: "Associate Data Scientist Path", place: "DataCamp · Online", note: "Continuous learning" },
  { date: "2025", title: "Applied Data Science & ML Learning", place: "Kaggle · Online", note: "Certificate holder" },
  { date: "2025", title: "Generative AI Foundations", place: "AWS · Online", note: "Learner" },
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Back to top">KC<span>·</span></a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>
          ))}
        </div>
        <a className="nav-contact" href="#connect">Let&apos;s connect <span>↗</span></a>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="eyebrow"><span className="pulse" /> Available for meaningful conversations</div>
        <p className="hero-kicker">Hello, I&apos;m</p>
        <h1>Karsci<br /><em>Cespedes.</em></h1>
        <div className="hero-bottom">
          <p className="hero-intro">Data Science graduate and Business System Analyst turning complex data into clear, decision-ready insight.</p>
          <a className="circle-link" href="#about" aria-label="Read my story">Scroll <span>↓</span></a>
        </div>
        <div className="portrait" aria-label="Portrait of Karsci Vincze Cespedes" role="img">
          <img src="/karsci-cespedes.jpg" alt="Karsci Vincze Cespedes standing outdoors in a mountain landscape" />
          <div className="portrait-orbit" />
          <span>KARSCI<br />CESPEDES</span>
        </div>
        <div className="hero-mark">01 <span>— PORTFOLIO</span></div>
      </section>

      <section className="about section-shell" id="about">
        <p className="section-label">(01) ABOUT</p>
        <div className="about-copy">
          <p className="display-copy">I make data <em>useful:</em> from reliable pipelines and careful analysis to models and stories people can act on.</p>
          <p className="body-copy">Cum Laude Data Science graduate with hands-on experience across the data lifecycle. I enjoy working at the intersection of technical detail and human decision-making, translating complex datasets for both technical and non-technical audiences.</p>
        </div>
        <div className="about-facts">
          <span>BASED IN <strong>Cagayan de Oro, PH</strong></span>
          <span>FOCUS <strong>Data & business systems</strong></span>
          <span>STATUS <strong>Open to connect</strong></span>
        </div>
      </section>

      <section className="skills section-shell" id="skills">
        <div className="section-heading"><p className="section-label">(02) SKILLS</p><h2>What I bring<br />to the <em>table.</em></h2></div>
        <div className="skill-grid">
          {skills.map((group, index) => <article className="skill-card" key={group.label}>
            <span className="card-number">0{index + 1}</span><h3>{group.label}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>)}
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-heading"><p className="section-label">(03) EXPERIENCE</p><h2>Where I&apos;ve<br /><em>contributed.</em></h2></div>
        <div className="timeline">
          {experience.map((item) => <article className="timeline-item" key={item.period}>
            <p className="timeline-period">{item.period}</p>
            <div><h3>{item.title}</h3><p className="organisation">{item.organisation}</p></div>
            <p className="timeline-text">{item.text}</p>
          </article>)}
        </div>
      </section>

      <section className="education section-shell" id="education">
        <p className="section-label">(04) EDUCATION</p>
        <div className="education-card"><span className="stamp">EDU<br />25</span><div><p className="eyebrow">BS Data Science · Cum Laude · 2021 — 2025</p><h2>USTSP <em>graduate.</em></h2><p>University of Science and Technology of Southern Philippines · Cagayan de Oro</p></div><span className="arrow">↗</span></div>
      </section>

      <section className="certificates section-shell" id="certificates">
        <div className="section-heading"><p className="section-label">(05) CERTIFICATES</p><h2>Always<br /><em>learning.</em></h2></div>
        <div className="certificate-list">
          {certificates.map((certificate, index) => <article className="certificate" key={certificate.title + index}>
            <div className="certificate-art"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div><p className="certificate-type">{certificate.type}</p><h3>{certificate.title}</h3><p>{certificate.issuer}</p></div>
            <a href="#connect" aria-label={`Add link for ${certificate.title}`}>View <span>↗</span></a>
          </article>)}
        </div>
        <p className="image-note">Selected continuous-learning credentials across machine learning, cloud, and analytics.</p>
      </section>

      <section className="events section-shell" id="events">
        <div className="section-heading"><p className="section-label">(06) LEARNING</p><h2>Always moving<br /><em>forward.</em></h2></div>
        <div className="events-list">
          {events.map((event) => <article className="event" key={event.date}>
            <p className="event-date">{event.date}</p><div><h3>{event.title}</h3><p>{event.place}</p></div><p className="event-note">{event.note}</p><span aria-hidden="true">↗</span>
          </article>)}
        </div>
      </section>

      <footer className="footer section-shell" id="connect">
        <p className="section-label">(07) CONNECT</p>
        <p className="footer-question">Have a thought,<br />an opportunity, or<br />just want to <em>say hello?</em></p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/karsci-vinczecespedes-454851251/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href="mailto:Cespedes.vincze@gmail.com">Email me <span>↗</span></a>
          <a href="/karsci-cespedes-resume.pdf" download>Download résumé <span>↓</span></a>
        </div>
        <div className="footer-bottom"><span>© 2026 KARSCI CESPEDES</span><a href="#top">BACK TO TOP ↑</a><span>MADE WITH INTENT</span></div>
      </footer>
    </main>
  );
}
