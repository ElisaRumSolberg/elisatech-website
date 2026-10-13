import Image from "next/image";
import Link from "next/link";
import { Nav } from "./nav";
import { ContactForm } from "./contact-form";
import { Footer } from "./footer";
import { Pearl, RevealObserver, Shot, Sparkle } from "./motion";
import { A, External } from "./text";
import { getDict } from "../i18n";
import { href, type Lang } from "../i18n/config";

const icons = [
  <svg key="web" viewBox="0 0 48 48" aria-hidden="true">
    <rect x="5" y="9" width="38" height="28" rx="5" />
    <path d="M5 16h38M10 12.5h.01M14 12.5h.01" />
    <path d="M26 27l4 10 2-4.5 4.5-2z" />
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

const delay = (i: number, key = "--i") => ({ [key]: i }) as React.CSSProperties;

export function HomePage({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const nt = d.common.newTab;

  return (
    <>
      <RevealObserver />
      <Nav lang={lang} t={{ ...d.nav, home: d.common.home, openMenu: d.common.openMenu, closeMenu: d.common.closeMenu, language: d.common.language }} />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title" className="hero-title">
              {d.hero.words.map((w, i) => {
                const text = w.t.replace(/ /g, " ");
                const inner = w.underline ? (
                  <>
                    {text}
                    <svg className="scribble" viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M3 15c38-7 84-10 129-8 28 1 56 4 85 2-30 4-67 6-104 7" />
                    </svg>
                  </>
                ) : (
                  text
                );
                const cls = `word${w.underline ? " underline-word" : ""}`;
                return (
                  <span key={i}>
                    {w.em ? <em className={cls} style={delay(i)}>{inner}</em> : <span className={cls} style={delay(i)}>{inner}</span>}
                    {i < d.hero.words.length - 1 ? " " : null}
                  </span>
                );
              })}
            </h1>
            <p className="hero-sub">{d.hero.sub}</p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">{d.hero.explore}</a>
              <a href="#contact" className="btn btn-ghost">{d.hero.workWithMe}</a>
            </div>
          </div>
          <Pearl />
        </section>

        <section id="work" className="work" aria-labelledby="work-title">
          <div className="section-intro" data-reveal>
            <h2 id="work-title" className="section-title"><A t={d.work.title} /></h2>
            <p className="section-lede">{d.work.lede}</p>
          </div>

          <div className="featured">
            {d.work.featured.map((p, i) => (
              <article key={p.slug} className={`project tint-${p.tint}${i % 2 ? " flip" : ""}`} data-reveal>
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
            <p>{d.about.p1}</p>
            <p>{d.about.p2}</p>
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
                <span>{d.contact.basedIn}</span>
                <p>{d.contact.place}</p>
              </li>
            </ul>
          </div>
          <div data-reveal>
            <ContactForm t={d.form} lang={lang} />
          </div>
        </section>
      </main>

      <Footer tagline={d.common.tagline} copyright={d.common.copyright} />
    </>
  );
}
