import Image from "next/image";
import { Nav } from "./components/nav";
import { ContactForm } from "./components/contact-form";
import { Pearl, RevealObserver, Shot, Sparkle } from "./components/motion";
import { approach, experiments, featured, stack } from "./content";

const services = [
  {
    title: "Web experiences",
    text: "Fast, responsive, accessible websites for organizations and small businesses, that your team can keep up to date.",
    example: "Like Mangfoldshuset Vestland",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="5" y="9" width="38" height="28" rx="5" />
        <path d="M5 16h38M10 12.5h.01M14 12.5h.01" />
        <path d="M26 27l4 10 2-4.5 4.5-2z" />
      </svg>
    ),
  },
  {
    title: "Software engineering",
    text: "Useful applications, integrations and APIs, with clean structure and tests, so they keep working after launch.",
    example: "Like the Bureaucracy Action Agent",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M17 14l-9 10 9 10M31 14l9 10-9 10M27 10l-6 28" />
      </svg>
    ),
  },
  {
    title: "AI & automation",
    text: "Practical, carefully scoped AI tools and workflows: chatbots, document helpers, forms that route themselves.",
    example: "Like ClearRights or the ElisaTech chatbot",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6c.9 8 5.9 13 14 14-8.1 1-13.1 6-14 14-.9-8-5.9-13-14-14 8.1-1 13.1-6 14-14z" />
        <circle cx="38" cy="38" r="3.5" />
        <path d="M30.5 30.5l5 5" />
      </svg>
    ),
  },
];

const process = ["Discover", "Plan", "Design", "Build", "Review", "Launch"];

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-arrow">
      {children}
      <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title" className="hero-title">
              <span className="word" style={{ "--i": 0 } as React.CSSProperties}>A&nbsp;little</span>{" "}
              <em className="word" style={{ "--i": 1 } as React.CSSProperties}>creativity,</em>{" "}
              <span className="word" style={{ "--i": 2 } as React.CSSProperties}>a&nbsp;lot</span>{" "}
              <span className="word" style={{ "--i": 3 } as React.CSSProperties}>of</span>{" "}
              <span className="word underline-word" style={{ "--i": 4 } as React.CSSProperties}>
                code.
                <svg className="scribble" viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 15c38-7 84-10 129-8 28 1 56 4 85 2-30 4-67 6-104 7" />
                </svg>
              </span>
            </h1>
            <p className="hero-sub">
              Hi, I&apos;m Elisa, a Computer Engineering student at HVL in Bergen, building thoughtful
              websites, useful software and intelligent systems.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">Explore my work</a>
              <a href="#contact" className="btn btn-ghost">Work with me</a>
            </div>
          </div>
          <Pearl />
        </section>

        <section id="work" className="work" aria-labelledby="work-title">
          <div className="section-intro" data-reveal>
            <h2 id="work-title" className="section-title">
              Selected <em>work</em>
            </h2>
            <p className="section-lede">
              A real website for a real organization, and the AI systems I&apos;m proudest of.
              Each one says plainly what it is, and how far along it is.
            </p>
          </div>

          <div className="featured">
            {featured.map((p, i) => (
              <article key={p.slug} className={`project tint-${p.tint}${i % 2 ? " flip" : ""}`} data-reveal>
                <div className="project-copy">
                  <p className="project-tags">
                    <span className={`status status-${p.status === "Submitted" ? "pending" : "live"}`}>{p.status}</span>
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </p>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-line">{p.line}</p>
                  <p className="project-how">{p.how}</p>
                  {p.proof && (
                    <p className="project-proof">
                      <Sparkle className="proof-mark" />
                      {p.proof}
                    </p>
                  )}
                  <ul className="stack-tags" aria-label="Built with">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {p.links.map((l) => (
                      <External key={l.href} href={l.href}>{l.label}</External>
                    ))}
                  </div>
                </div>
                <div className="project-visual">
                  <Shot label={new URL(p.links[0].href).hostname.replace("www.", "")}>
                    <Image
                      src={p.shot.src}
                      width={p.shot.width}
                      height={p.shot.height}
                      alt={p.shot.alt}
                      sizes="(max-width: 900px) 92vw, 46vw"
                      priority={i === 0}
                    />
                  </Shot>
                </div>
              </article>
            ))}
          </div>

          <div className="experiments" data-reveal>
            <h3 className="sub-title">Experiments &amp; learning</h3>
            <p className="section-lede">Smaller builds, prototypes and things in progress. Honest labels included.</p>
            <ul className="exp-list">
              {experiments.map((x) => (
                <li key={x.name} className="exp">
                  <div className="exp-head">
                    <h4>{x.name}</h4>
                    <span className="exp-status">{x.status}</span>
                  </div>
                  <p>{x.line}</p>
                  <div className="exp-foot">
                    <span className="mono">{x.meta}</span>
                    {x.link && <External href={x.link.href}>{x.link.label}</External>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="studio" className="studio" aria-labelledby="studio-title">
          <div className="section-intro" data-reveal>
            <h2 id="studio-title" className="section-title">
              What I can build <em>for you</em>
            </h2>
            <p className="section-lede">
              For nonprofits, organizations and small businesses. Clear scope, honest estimates, and
              a site or tool you understand when it&apos;s handed over.
            </p>
          </div>
          <ul className="services">
            {services.map((s, i) => (
              <li key={s.title} className="service" data-reveal style={{ "--d": i } as React.CSSProperties}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <p className="service-example">{s.example}</p>
              </li>
            ))}
          </ul>
          <div className="process" data-reveal>
            <ol aria-label="How a project runs">
              {process.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
            <a href="#contact" className="btn btn-primary">Tell me about your project</a>
          </div>
        </section>

        <section className="approach" aria-labelledby="approach-title">
          <div className="section-intro" data-reveal>
            <h2 id="approach-title" className="section-title">
              How I <em>think</em> through a project
            </h2>
            <p className="section-lede">
              One real example, from Assumption Hunter: what went in, and what I learned when the numbers
              came back.
            </p>
          </div>
          <ol className="path" data-reveal>
            {approach.map((a, i) => (
              <li key={a.step} style={{ "--d": i } as React.CSSProperties}>
                <span className="path-dot" aria-hidden="true" />
                <h3>{a.step}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className="about" aria-labelledby="about-title">
          <div className="about-copy" data-reveal>
            <h2 id="about-title" className="section-title">
              Hi, I&apos;m <em>Elisa</em>
            </h2>
            <p>
              I study Computer Engineering at HVL in Bergen. I&apos;m drawn to problems where software has
              to be careful: official letters, personal safety, systems that act on their own. And I like
              making things that feel good to use.
            </p>
            <p>
              I speak Norwegian, English and Turkish, and I build for people in all three. Most of what
              I know I learned by shipping something, testing it like someone wants it to break, and
              writing down what surprised me.
            </p>
          </div>
          <div className="stack-groups" data-reveal>
            <h3 className="sub-title">Tools I&apos;ve used in these projects</h3>
            <dl>
              {stack.map((g) => (
                <div key={g.group}>
                  <dt>{g.group}</dt>
                  <dd>
                    {g.items.map((it) => (
                      <span key={it}>{it}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="contact-copy" data-reveal>
            <h2 id="contact-title" className="section-title">
              Have something lovely in mind? <em>Let&apos;s build it thoughtfully.</em>
            </h2>
            <p className="section-lede">
              A website, a tool, an internship or just a question: write a few lines and I&apos;ll get back to you.
            </p>
            <ul className="contact-direct">
              <li>
                <span>Email</span>
                <a href="mailto:hello@elisatech.io">hello@elisatech.io</a>
              </li>
              <li>
                <span>GitHub</span>
                <External href="https://github.com/ElisaRumSolberg">ElisaRumSolberg</External>
              </li>
              <li>
                <span>Based in</span>
                <p>Bergen, Norway</p>
              </li>
            </ul>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="wordmark small">
          elisa<span className="dot">.</span>
          <small>studio</small>
        </span>
        <p>Thoughtful technology, beautifully built.</p>
        <p>© 2026 Elisa Rumeysa Solberg · Bergen</p>
      </footer>
    </>
  );
}
