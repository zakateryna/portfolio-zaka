import React, { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Index by Zaka",
    category: "Visual archive · Gallery · Shop concept",
    role: "Concept · Frontend · UI · Visual storytelling",
    stack: ["React", "Vite", "CSS", "JavaScript"],
    description:
      "A personal digital space between photographic archive, editorial gallery and shop concept, focused on visual storytelling, product presentation and user experience.",
    image: "/images/index-by-zaka.png",
  },
  {
    number: "02",
    title: "Dr Computer",
    category: "Local business website",
    role: "Web design · Frontend · Content structure",
    stack: ["React", "Vite", "CSS", "Responsive design"],
    description:
      "A promotional website for a local IT business, designed to communicate services, location and contact information in a clear and accessible way.",
    image: "/images/dr-computer.png",
  },
  {
    number: "03",
    title: "FS Brothers & Brokers",
    category: "Corporate website concept",
    role: "Concept design · Corporate communication · UI layout",
    stack: ["React", "CSS", "UI layout"],
    description:
      "A corporate website concept for an insurance consulting company, focused on credibility, service clarity and a professional brand tone.",
    image: "/images/fs-brothers.png",
  },
];

const skills = [
  "Content creation",
  "Copywriting",
  "Storytelling",
  "Visual communication",
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Vite",
  "Responsive design",
  "Figma",
  "Canva",
  "Adobe Suite",
  "GitHub",
  "Vercel",
];

const approach = [
  {
    title: "Communication",
    text: "Clear messages, visual storytelling and content adapted to the audience.",
  },
  {
    title: "Structure",
    text: "Organized information, readable layouts and user-friendly digital flows.",
  },
  {
    title: "Visual sensitivity",
    text: "A refined eye for atmosphere, identity, spacing and presentation.",
  },
];

function scrollToSection(id) {
  const section = document.getElementById(id);
  const topbar = document.querySelector(".topbar");

  if (!section) return;

  const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 72;

  // Scrolliamo al vero contenuto della sezione, non all'inizio del box con padding.
  const target = section.querySelector(".eyebrow") || section;
  const targetTop = target.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: targetTop - topbarHeight - 34,
    behavior: "smooth",
  });
}

function ImageFrame({ src, alt, label }) {
  return (
    <div className="image-frame">
      <img
        src={src}
        alt={alt}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <div className="image-fallback">
        <span>{label}</span>
      </div>
    </div>
  );
}

function CvDropdown({ compact = false, text = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownClassName = text
    ? "cv-dropdown text-dropdown"
    : compact
    ? "cv-dropdown compact"
    : "cv-dropdown";

  return (
    <div className={dropdownClassName}>
      <button
        type="button"
        className={text ? "text-dropdown-button" : "nav-cta cv-dropdown-button"}
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        Download CV <span>∨</span>
      </button>

      {isOpen && (
        <div className="cv-dropdown-menu" role="menu">
          <a
            href="/cv/CV_Kateryna_Zavalykhata_IT.pdf"
            download
            role="menuitem"
          >
            CV Italiano
          </a>

          <a
            href="/cv/CV_Kateryna_Zavalykhata_EN.pdf"
            download
            role="menuitem"
          >
            CV English
          </a>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <main className="site-shell">
      <style>{styles}</style>

      <header className="topbar">
        <a
          href="#home"
          className="brand"
          aria-label="Katia Zavalykhata home"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="brand-mark">Z.</span>
          <span className="brand-name">ZAKA</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a
            href="#profile"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("profile");
            }}
          >
            Profile
          </a>

          <a
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>

          <a
            href="#skills"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("skills");
            }}
          >
            Skills
          </a>

          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </nav>

        <CvDropdown />
      </header>

      <section id="home" className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            Digital communication · Content creation · Web skills
          </p>

          <h1>Katia Zavalykhata</h1>

          <p className="hero-subtitle">
            Junior Frontend Developer · Digital Communication · Content Creation
          </p>

          <p className="hero-text">
            I combine digital communication, content creation and frontend
            skills to build clear, visual and user-focused digital experiences.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button button-primary"
              onClick={() => scrollToSection("projects")}
            >
              View projects <span>→</span>
            </button>

            <CvDropdown compact />

            <a className="button button-light" href="mailto:zakateryna@icloud.com">
              Contact me
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait area">
          <div className="portrait-arch">
            <img
              src="/images/portrait.png"
              alt="Portrait of Katia Zavalykhata"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="portrait-fallback">Add portrait.png</div>
          </div>

          <div className="stamp">Strategic · Creative · Reliable</div>

        </div>
      </section>

      <section id="profile" className="profile-panel">
        <div>
          <p className="eyebrow">Profile</p>
          <h2>A digital profile between communication, content and web.</h2>
        </div>

        <p>
          I have a background in Media, Digital Communication and Journalism,
          later expanded through a Web Developer specialization at EPICODE. My
          experience connects client-facing roles, content creation and frontend
          projects, with a focus on clarity, visual identity and online presence.
        </p>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Selected Projects</h2>
          </div>

          <a href="mailto:zakateryna@icloud.com">Request full portfolio →</a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">{project.number}</div>

              <ImageFrame
                src={project.image}
                alt={`${project.title} preview`}
                label={project.title}
              />

              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p>{project.description}</p>

                <div className="tag-list">
                  {project.stack.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section">
        <div className="quote-card">
          <p className="eyebrow">My approach</p>

          <blockquote>
            “I shape digital experiences where content, structure and atmosphere
            work together.”
          </blockquote>

          <span>Katia Z.</span>
        </div>

        <div className="approach-grid">
          {approach.map((item) => (
            <div className="approach-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Skills & expertise</p>
            <h2>What I bring</h2>
          </div>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s connect.</h2>
          <p>
            Open to junior opportunities in digital communication, frontend,
            content, marketing and customer-facing roles with a digital
            component.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:zakateryna@icloud.com">zakateryna@icloud.com</a>

          <a
            href="https://www.linkedin.com/in/zakateryna/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <CvDropdown text />

          <span>Italy · Remote / Hybrid / On-site</span>
        </div>
      </section>

      <footer className="footer">
        <span className="brand-mark">Z.</span>
        <p>© 2026 Katia Zavalykhata. Digital CV & Portfolio.</p>
      </footer>
    </main>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --ivory: #f7f2ea;
  --paper: #fffaf4;
  --charcoal: #282321;
  --muted: #746b64;
  --burgundy: #751727;
  --burgundy-soft: #9a3347;
  --sage: #7f927f;
  --sage-dark: #586c58;
  --line: #d8cec4;
  --shadow: 0 24px 70px rgba(69, 39, 30, 0.12);
  --radius: 28px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--charcoal);
  background:
    radial-gradient(circle at top left, rgba(127, 146, 127, 0.22), transparent 34rem),
    radial-gradient(circle at bottom right, rgba(117, 23, 39, 0.10), transparent 32rem),
    var(--ivory);
}

a,
button {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: 0;
}

img {
  display: block;
  width: 100%;
}

.site-shell {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  padding: 24px 0 40px;
}

.topbar {
  position: sticky;
  top: 16px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 20px;
  border: 1px solid rgba(216, 206, 196, 0.82);
  border-radius: 999px;
  background: rgba(255, 250, 244, 0.86);
  backdrop-filter: blur(18px);
  box-shadow: 0 16px 40px rgba(69, 39, 30, 0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: max-content;
}

.brand-mark {
  font-family: 'Cormorant Garamond', serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 0.8;
  color: var(--burgundy);
}

.brand-name {
  letter-spacing: 0.45em;
  color: var(--sage-dark);
  font-size: 0.8rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--muted);
  font-size: 0.92rem;
}

.nav-links a:hover {
  color: var(--burgundy);
}

.nav-cta,
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.nav-cta {
  padding: 12px 18px;
  color: #fff;
  background: var(--burgundy);
  box-shadow: 0 12px 25px rgba(117, 23, 39, 0.17);
}

.nav-cta:hover,
.button:hover {
  transform: translateY(-2px);
}

.cv-dropdown {
  position: relative;
  display: inline-flex;
}

.cv-dropdown-button {
  cursor: pointer;
}

.cv-dropdown-button span,
.text-dropdown-button span {
  font-size: 0.9rem;
  transform: translateY(-1px);
}

.cv-dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 200;
  min-width: 180px;
  padding: 8px;
  border: 1px solid rgba(216, 206, 196, 0.94);
  border-radius: 18px;
  background: rgba(255, 250, 244, 0.96);
  box-shadow: 0 18px 45px rgba(69, 39, 30, 0.14);
  backdrop-filter: blur(16px);
}

.cv-dropdown-menu a {
  display: flex;
  padding: 12px 14px;
  border-radius: 12px;
  color: var(--charcoal);
  font-size: 0.92rem;
  font-weight: 700;
}

.cv-dropdown-menu a:hover {
  color: var(--burgundy);
  background: rgba(117, 23, 39, 0.07);
}

.cv-dropdown.compact .cv-dropdown-button {
  min-height: 52px;
  padding: 0 22px;
  color: var(--burgundy);
  background: rgba(255, 250, 244, 0.75);
  border: 1px solid rgba(117, 23, 39, 0.28);
  border-radius: 12px;
  box-shadow: none;
}

.cv-dropdown.compact .cv-dropdown-menu {
  left: 0;
  right: auto;
}

.text-dropdown {
  width: fit-content;
}

.text-dropdown-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 0;
  color: var(--burgundy);
  background: transparent;
  cursor: pointer;
  font-weight: 800;
}

.text-dropdown .cv-dropdown-menu {
  left: 0;
  right: auto;
}

.section-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  align-items: center;
  gap: clamp(36px, 6vw, 82px);
}

.hero {
  min-height: 78vh;
  padding: clamp(60px, 9vw, 120px) 8px clamp(54px, 8vw, 88px);
  border-bottom: 1px solid rgba(216, 206, 196, 0.86);
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--sage-dark);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  color: var(--charcoal);
  line-height: 0.96;
}

h1 {
  max-width: 740px;
  font-size: clamp(4.3rem, 12vw, 9.2rem);
  letter-spacing: -0.055em;
}

h2 {
  font-size: clamp(2.5rem, 5vw, 5rem);
  letter-spacing: -0.035em;
}

h3 {
  font-size: 2rem;
  letter-spacing: -0.025em;
}

.hero-subtitle {
  margin: 24px 0 18px;
  color: var(--burgundy);
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.35rem, 2.4vw, 2rem);
  font-style: italic;
  font-weight: 600;
}

.hero-subtitle::before {
  content: '';
  display: block;
  width: 74px;
  height: 2px;
  margin-bottom: 16px;
  background: var(--burgundy);
}

.hero-text,
.profile-panel p,
.contact-section p,
.project-body p,
.approach-card p {
  color: var(--muted);
  line-height: 1.75;
}

.hero-text {
  max-width: 560px;
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.button {
  min-height: 52px;
  padding: 0 22px;
  border: 1px solid var(--line);
  cursor: pointer;
  background: transparent;
}

.button-primary {
  color: white;
  background: var(--burgundy);
  border-color: var(--burgundy);
  box-shadow: 0 18px 35px rgba(117, 23, 39, 0.18);
}

.button-secondary {
  color: var(--burgundy);
  background: rgba(255, 250, 244, 0.75);
  border-color: rgba(117, 23, 39, 0.28);
}

.button-light {
  color: var(--charcoal);
  background: rgba(255, 250, 244, 0.7);
}

.hero-visual {
  position: relative;
  min-height: 560px;
  display: grid;
  place-items: center;
}

.portrait-arch {
  position: relative;
  z-index: 1;
  width: min(410px, 78vw);
  aspect-ratio: 0.78;
  overflow: hidden;
  border-radius: 46% 46% 24px 24px;
  background:
    linear-gradient(145deg, rgba(255, 250, 244, 0.85), rgba(216, 206, 196, 0.34)),
    var(--paper);
  border: 1px solid rgba(216, 206, 196, 0.85);
  box-shadow: var(--shadow);
}

.portrait-arch img {
  position: relative;
  z-index: 2;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.portrait-fallback,
.image-fallback {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: var(--sage-dark);
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.stamp {
  position: absolute;
  top: 86px;
  right: 42px;
  z-index: 3;
  width: 132px;
  height: 132px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(117, 23, 39, 0.28);
  border-radius: 50%;
  color: var(--burgundy);
  background: rgba(255, 250, 244, 0.74);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-align: center;
  text-transform: uppercase;
  transform: rotate(-12deg);
}



.profile-panel,
.contact-section,
.approach-section,
.skills-section,
.projects-section {
  padding: clamp(58px, 8vw, 92px) 8px;
  border-bottom: 1px solid rgba(216, 206, 196, 0.86);
}

.profile-panel {
  display: grid;
  grid-template-columns: 0.95fr 1fr;
  gap: clamp(28px, 5vw, 64px);
  align-items: start;
}

.profile-panel p {
  margin: 0;
  font-size: 1.06rem;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 30px;
}

.section-heading a {
  color: var(--burgundy);
  font-weight: 700;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.project-card {
  position: relative;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(216, 206, 196, 0.94);
  border-radius: var(--radius);
  background: rgba(255, 250, 244, 0.72);
  box-shadow: 0 18px 52px rgba(69, 39, 30, 0.08);
}

.project-number {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 4;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  color: var(--charcoal);
  background: rgba(255, 250, 244, 0.88);
  border: 1px solid rgba(216, 206, 196, 0.86);
  font-weight: 800;
}

.image-frame {
  position: relative;
  aspect-ratio: 1.18;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(127, 146, 127, 0.18), rgba(117, 23, 39, 0.08)),
    var(--paper);
}

.image-frame img {
  position: relative;
  z-index: 2;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.image-fallback span {
  display: inline-flex;
  max-width: 70%;
  text-align: center;
}

.project-body {
  min-width: 0;
  padding: 24px;
}

.project-category,
.project-role {
  margin: 0 0 10px;
  color: var(--sage-dark) !important;
  font-size: clamp(0.68rem, 0.75vw, 0.78rem);
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1.25 !important;
  text-transform: uppercase;
}

.project-body h3 {
  margin-bottom: 14px;
  font-size: clamp(1.45rem, 1.8vw, 1.9rem);
  line-height: 1.18;
  white-space: nowrap;
  overflow: visible;
  text-overflow: unset;
  padding-bottom: 0.08em;
}

.project-body p {
  margin: 0 0 16px;
  font-size: 0.96rem;
}

.tag-list,
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag,
.skill-pill {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 8px 12px;
  border: 1px solid rgba(127, 146, 127, 0.34);
  border-radius: 999px;
  color: var(--sage-dark);
  background: rgba(255, 250, 244, 0.6);
  font-size: 0.8rem;
  font-weight: 700;
}

.approach-section {
  display: grid;
  grid-template-columns: 0.72fr 1.28fr;
  gap: 24px;
}

.quote-card,
.approach-card,
.contact-section {
  border: 1px solid rgba(216, 206, 196, 0.94);
  border-radius: var(--radius);
  background: rgba(255, 250, 244, 0.74);
  box-shadow: 0 18px 52px rgba(69, 39, 30, 0.07);
}

.quote-card {
  padding: 30px;
}

.quote-card blockquote {
  margin: 0 0 24px;
  color: var(--charcoal);
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  line-height: 1.1;
}

.quote-card span {
  color: var(--burgundy);
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-style: italic;
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  min-width: 0;
}

.approach-card {
  min-width: 0;
  overflow: hidden;
  padding: 26px;
}

.approach-card h3 {
  margin-bottom: 12px;
  font-size: clamp(1.25rem, 1.8vw, 1.55rem);
  line-height: 1.05;
  max-width: 100%;
}

.skills-section .compact {
  margin-bottom: 22px;
}

.skills-list {
  gap: 12px;
}

.skill-pill {
  min-height: 42px;
  padding: 10px 16px;
  color: var(--charcoal);
  border-color: rgba(216, 206, 196, 0.96);
}

.contact-section {
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  align-items: center;
  gap: 28px;
  margin-top: clamp(54px, 7vw, 84px);
  padding: clamp(32px, 5vw, 52px);
}

.contact-section h2 {
  margin-bottom: 14px;
}

.contact-section p {
  max-width: 700px;
  margin: 0;
}

.contact-links {
  display: grid;
  gap: 12px;
  color: var(--muted);
  font-weight: 700;
}

.contact-links a {
  color: var(--burgundy);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 8px 0;
  color: var(--muted);
  font-size: 0.9rem;
}

@media (max-width: 980px) {
  .nav-links {
    display: none;
  }

  .section-grid,
  .profile-panel,
  .approach-section,
  .contact-section {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
  }

  .hero-visual {
    min-height: 460px;
  }

  .project-grid,
  .approach-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 680px;
    margin: 0 auto;
  }

  .image-frame {
    width: 100%;
    aspect-ratio: 16 / 9;
    min-height: 0;
  }

  .image-frame img {
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
}

@media (max-width: 680px) {
  .site-shell {
    width: min(100% - 24px, 1180px);
    padding-top: 12px;
  }

  .topbar {
    top: 8px;
    padding: 12px 14px;
  }

  .brand-mark {
    font-size: 38px;
  }

  .brand-name {
    letter-spacing: 0.32em;
  }

  .topbar > .cv-dropdown {
    display: none;
  }

  h1 {
    font-size: clamp(3.9rem, 19vw, 5.8rem);
  }

  .hero-actions,
  .button,
  .cv-dropdown.compact,
  .cv-dropdown.compact .cv-dropdown-button {
    width: 100%;
  }

  .hero-visual {
    min-height: 390px;
  }

  .portrait-arch {
    width: min(340px, 88vw);
  }

  .stamp {
    top: 26px;
    right: 2px;
    width: 104px;
    height: 104px;
    font-size: 0.58rem;
  }

  .section-heading {
    align-items: start;
    flex-direction: column;
  }

  .project-card {
    max-width: 100%;
    border-radius: 24px;
  }

  .project-body {
    padding: 22px;
  }

  .project-body h3 {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }

  .project-category,
  .project-role {
    letter-spacing: 0.06em;
  }

  .project-number {
    top: 12px;
    left: 12px;
    width: 42px;
    height: 42px;
  }

  .image-frame {
    aspect-ratio: 1.28;
  }

  .footer {
    flex-direction: column;
    align-items: start;
  }
}`;

export default App;