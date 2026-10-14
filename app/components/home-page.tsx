import Image from "next/image";
import Link from "next/link";
import { Nav } from "./nav";
import { ContactForm } from "./contact-form";
import { Footer } from "./footer";
import { Pearl, RevealObserver, Shot, Sparkle } from "./motion";
import { A, External } from "./text";
import { getDict, type Dict } from "../i18n";
import { href, type Lang } from "../i18n/config";

const icons = [
  <svg key="web" viewBox="0 0 48 48" aria-hidden="true">
    <rect x="5" y="9" width="38" height="28" rx="5" />
    <path d="M5 16h38M10 12.5h.01M14 12.5h.01" />
    <path d="M26 27l4 10 2-4.5 4.5-2z" />
  </svg>,
  <svg key="improve" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M8 34l10-10 7 7 15-15" />
    <path d="M30 16h10v10" />
    <path d="M8 41h32" />
  </svg>,
  <svg key="code" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M17 14l-9 10 9 10M31 14l9 10-9 10M27 10l-6 28" />
  </svg>,
  <svg key="ai" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M24 6c.9 8 5.9 13 14 14-8.1 1-13.1 6-14 14-.9-8-5.9-13-14-14 8.1-1 13.1-6 14-14z" />
    <circle cx="38" cy="38" r="3.5" />
    <path d="M30.5 30.5l5 5" />
  </svg>,
];

const LINKEDIN_URL = "https://www.linkedin.com/in/elisa-rumeysa-solberg-a36bb3323/";

const delay = (i: number, key = "--i") => ({ [key]: i }) as React.CSSProperties;

type Project = Dict["work"]["featured"][number];

function ProjectCard({ p, i, d, lang }: { p: Project; i: number; d: Dict; lang: Lang }) {
  const nt = d.common.newTab;
  return (
    <article className={`project tint-${p.tint}${i % 2 ? " flip" : ""}`} data-reveal>
      <div className="project-copy">
        <p className="project-tags">
          <span className={`status status-${p.status === "submitted" ? "pending" : "live"}`}>{d.work.status[p.status]}</span>
          {p.tags.map((tag) => (
            <span key={tag}>{tag}</span>
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
        <ul className="stack-tags" aria-label={d.common.builtWith}>
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="project-links">
          {p.caseStudy && (
            <Link href={href(lang, p.caseStudy)} className="link-arrow">
              {d.work.caseStudy} <span aria-hidden="true">→</span>
            </Link>
          )}
          {p.links.map((l) => (
            <External key={l.href} href={l.href} newTab={nt}>{l.label}</External>
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
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const nt = d.common.newTab;
  const [client, ...tech] = d.work.featured;

  return (
    <>
      <RevealObserver />
      <Nav lang={lang} t={{ ...d.nav, home: d.common.home, openMenu: d.common.openMenu, closeMenu: d.common.closeMenu, language: d.common.language }} />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title" className="hero-title">
              {d.hero.words.flatMap((w, i) => {
                const parts = w.t.split(" ");
                return parts.map((part, j) => {
                  const last = j === parts.length - 1;
                  const underline = w.underline && last;
                  const inner = underline ? (
                    <>
                      {part}
                      <svg className="scribble" viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M3 15c38-7 84-10 129-8 28 1 56 4 85 2-30 4-67 6-104 7" />
                      </svg>
                    </>
                  ) : (
                    part
                  );
                  const cls = `word${underline ? " underline-word" : ""}`;
                  const isEnd = i === d.hero.words.length - 1 && last;
                  return (
                    <span key={`${i}-${j}`}>
                      {w.em ? <em className={cls} style={delay(i)}>{inner}</em> : <span className={cls} style={delay(i)}>{inner}</span>}
                      {isEnd ? null : " "}
                    </span>
                  );
                });
              })}
            </h1>
            <p className="hero-sub">{d.hero.sub}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">{d.hero.explore}</a>
              <a href="#work" className="btn btn-ghost">{d.hero.workWithMe}</a>
            </div>
          </div>
          <Pearl />
        </section>

        <section id="studio" className="studio" aria-labelledby="studio-title">
          <div className="section-intro" data-reveal>
            <h2 id="studio-title" className="section-title"><A t={d.studio.title} /></h2>
            <p className="section-lede">{d.studio.lede}</p>
          </div>
          <ul className="services">
            {d.studio.services.map((s, i) => (
              <li key={s.title} className="service" data-reveal style={delay(i, "--d")}>
                <span className="service-icon">{icons[i]}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <p className="service-example">{s.example}</p>
              </li>
            ))}
          </ul>
          <div className="process" data-reveal>
            <ol aria-label={d.studio.processLabel}>
              {d.studio.process.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
            <a href="#contact" className="btn btn-primary">{d.studio.cta}</a>
          </div>
        </section>

        <section id="work" className="work" aria-labelledby="work-title">
          <div className="section-intro" data-reveal>
            <h2 id="work-title" className="section-title"><A t={d.work.clientTitle} /></h2>
            <p className="section-lede">{d.work.clientLede}</p>
          </div>
          <div className="featured">
            <ProjectCard p={client} i={0} d={d} lang={lang} />
          </div>
        </section>

        <section id="faq" className="faq" aria-labelledby="faq-title">
          <div className="section-intro" data-reveal>
            <h2 id="faq-title" className="section-title"><A t={d.faq.title} /></h2>
          </div>
          <div className="faq-list" data-reveal>
            {d.faq.items.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="projects" className="work work-tech" aria-labelledby="projects-title">
          <div className="section-intro" data-reveal>
            <h2 id="projects-title" className="section-title"><A t={d.work.techTitle} /></h2>
            <p className="section-lede">{d.work.techLede}</p>
          </div>
          <div className="featured">
            {tech.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i + 1} d={d} lang={lang} />
            ))}
          </div>

          <div className="experiments" data-reveal>
            <h3 className="sub-title">{d.work.experimentsTitle}</h3>
            <p className="section-lede">{d.work.experimentsLede}</p>
            <ul className="exp-list">
              {d.work.experiments.map((x) => (
                <li key={x.name} className="exp">
                  <div className="exp-head">
                    <h4>{x.name}</h4>
                    <span className="exp-status">{x.status}</span>
                  </div>
                  <p>{x.line}</p>
                  <div className="exp-foot">
                    <span className="mono">{x.meta}</span>
                    {x.link && <External href={x.link.href} newTab={nt}>{x.link.label}</External>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="approach" aria-labelledby="approach-title">
          <div className="section-intro" data-reveal>
            <h2 id="approach-title" className="section-title"><A t={d.approach.title} /></h2>
            <p className="section-lede">{d.approach.lede}</p>
          </div>
          <ol className="path" data-reveal>
            {d.approach.steps.map((a, i) => (
              <li key={a.step} style={delay(i, "--d")}>
                <span className="path-dot" aria-hidden="true" />
                <h3>{a.step}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className="about" aria-labelledby="about-title">
          <div className="about-copy" data-reveal>
            <h2 id="about-title" className="section-title"><A t={d.about.title} /></h2>
            {d.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="about-links">
              <External href={LINKEDIN_URL} newTab={nt}>{d.about.linkedin}</External>
            </div>
          </div>
          <div className="stack-groups" data-reveal>
            <h3 className="sub-title">{d.about.stackTitle}</h3>
            <dl>
              {d.about.stack.map((g) => (
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
            <h2 id="contact-title" className="section-title"><A t={d.contact.title} /></h2>
            <p className="section-lede">{d.contact.lede}</p>
            <ul className="contact-direct">
              <li>
                <span>{d.contact.email}</span>
                <a href="mailto:hello@elisatech.io">hello@elisatech.io</a>
              </li>
              <li>
                <span>GitHub</span>
                <External href="https://github.com/ElisaRumSolberg" newTab={nt}>ElisaRumSolberg</External>
              </li>
              <li>
                <span>{d.contact.linkedin}</span>
                <External href={LINKEDIN_URL} newTab={nt}>elisa-rumeysa-solberg</External>
              </li>
              <li>
                <span>{d.contact.basedIn}</span>
                <p>{d.contact.place}</p>
              </li>
            </ul>
          </div>
          <div data-reveal>
            <ContactForm t={d.form} lang={lang} privacyHref={href(lang, "/personvern")} privacyLabel={d.privacy.formNote} />
          </div>
        </section>
      </main>

      <Footer lang={lang} tagline={d.common.tagline} copyright={d.common.copyright} privacy={d.privacy.link} />
    </>
  );
}
