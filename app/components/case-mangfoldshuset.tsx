import Image from "next/image";
import Link from "next/link";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { RevealObserver, Shot, Sparkle } from "./motion";
import { A } from "./text";
import { getDict } from "../i18n";
import { href, type Lang } from "../i18n/config";

export function MangfoldshusetCase({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const c = d.caseStudy;
  const home = href(lang, "/");

  return (
    <>
      <RevealObserver />
      <Nav lang={lang} t={{ ...d.nav, home: d.common.home, openMenu: d.common.openMenu, closeMenu: d.common.closeMenu, language: d.common.language }} />
      <main className="case">
        <header className="case-hero">
          <Link href={`${home}#work`} className="back-link">
            <span aria-hidden="true">←</span> {c.back}
          </Link>
          <p className="project-tags">
            <span className="status status-live">{d.work.status.live}</span>
            {c.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
          <h1 className="case-title">Mangfoldshuset Vestland</h1>
          <p className="case-lede">{c.lede}</p>
          <dl className="case-facts">
            {c.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="hero-actions">
            <a href="https://www.mangfoldshusetvestland.no/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {c.visit} <span aria-hidden="true">↗</span>
              <span className="sr-only">{d.common.newTab}</span>
            </a>
            <Link href={`${home}#contact`} className="btn btn-ghost">{c.talk}</Link>
          </div>
        </header>

        <section className="case-showcase" aria-label={c.showcaseLabel}>
          <div className="case-desktop">
            <Shot label="mangfoldshusetvestland.no">
              <Image src="/work/mangfoldshuset.jpg" width={2160} height={1170} priority sizes="(max-width: 900px) 92vw, 64vw" alt={c.desktopAlt} />
            </Shot>
          </div>
          <div className="case-phone">
            <Image src="/work/mangfoldshuset-mobile.jpg" width={780} height={1688} sizes="(max-width: 900px) 60vw, 22vw" alt={c.phoneAlt} />
          </div>
        </section>

        <section className="case-section case-split" aria-labelledby="built-title">
          <div data-reveal>
            <h2 id="built-title" className="section-title"><A t={c.doesTitle} /></h2>
            <p className="section-lede">{c.doesLede}</p>
          </div>
          <div className="case-lists" data-reveal>
            <div className="case-list tint-sage">
              <h3>{c.visitorsTitle}</h3>
              <ul>{c.visitors.map((x) => <li key={x}><Sparkle className="list-mark" />{x}</li>)}</ul>
            </div>
            <div className="case-list tint-lavender">
              <h3>{c.teamTitle}</h3>
              <ul>{c.team.map((x) => <li key={x}><Sparkle className="list-mark" />{x}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="section-title" data-reveal><A t={c.lookTitle} /></h2>
          <div className="case-gallery">
            {c.gallery.map((g) => (
              <figure key={g.src} data-reveal>
                <Shot label={g.label}>
                  <Image src={g.src} width={2160} height={1350} sizes="(max-width: 900px) 92vw, 46vw" alt={g.alt} />
                </Shot>
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="case-section" aria-labelledby="decisions-title">
          <h2 id="decisions-title" className="section-title" data-reveal><A t={c.decisionsTitle} /></h2>
          <div className="case-cards">
            {c.decisions.map((x) => (
              <article key={x.title} data-reveal>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-challenges" aria-labelledby="challenges-title">
          <h2 id="challenges-title" className="section-title" data-reveal><A t={c.wrongTitle} /></h2>
          <p className="section-lede" data-reveal>{c.wrongLede}</p>
          <ol className="path" data-reveal>
            {c.challenges.map((x, i) => (
              <li key={x.title} style={{ "--d": i } as React.CSSProperties}>
                <span className="path-dot" aria-hidden="true" />
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-section case-quality" aria-labelledby="quality-title">
          <div className="case-quality-box tint-blush" data-reveal>
            <h2 id="quality-title" className="sub-title">{c.healthTitle}</h2>
            <ul className="case-numbers">
              {c.numbers.map((n) => (
                <li key={n.label}><strong>{n.n}</strong><span>{n.label}</span></li>
              ))}
            </ul>
            <p>{c.healthText}</p>
          </div>
        </section>

        <section className="case-section case-cta" aria-labelledby="cta-title">
          <div data-reveal>
            <h2 id="cta-title" className="section-title"><A t={c.ctaTitle} /></h2>
            <p className="section-lede">{c.ctaLede}</p>
            <div className="hero-actions">
              <Link href={`${home}#contact`} className="btn btn-primary">{c.ctaPrimary}</Link>
              <Link href={`${home}#work`} className="btn btn-ghost">{c.ctaSecondary}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tagline={d.common.tagline} copyright={d.common.copyright} privacy={d.privacy.link} />
    </>
  );
}
