import { Nav } from "./nav";
import { Footer } from "./footer";
import { A } from "./text";
import { getDict } from "../i18n";
import type { Lang } from "../i18n/config";

export function PrivacyPage({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const p = d.privacy;

  return (
    <>
      <Nav lang={lang} t={{ ...d.nav, home: d.common.home, openMenu: d.common.openMenu, closeMenu: d.common.closeMenu, language: d.common.language }} />
      <main className="case legal">
        <header className="case-hero">
          <h1 className="case-title"><A t={p.title} /></h1>
          <p className="legal-updated">{p.updated}</p>
          <p className="case-lede">{p.intro}</p>
        </header>
        <div className="legal-body">
          {p.sections.map((s, i) => (
            <section key={s.h} aria-labelledby={`privacy-${i}`}>
              <h2 id={`privacy-${i}`}>{s.h}</h2>
              {s.p.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer lang={lang} tagline={d.common.tagline} copyright={d.common.copyright} privacy={p.link} />
    </>
  );
}
