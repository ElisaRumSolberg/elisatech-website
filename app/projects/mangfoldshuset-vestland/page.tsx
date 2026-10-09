import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";
import { RevealObserver, Shot, Sparkle } from "../../components/motion";

export const metadata: Metadata = {
  title: "Mangfoldshuset Vestland — case study | Elisa Studio",
  description:
    "How Elisa Rumeysa Solberg designed, built and maintains the website for Mangfoldshuset Vestland, a community organization in Vestland: activities, magazine, membership, donations and an admin area.",
  alternates: { canonical: "/projects/mangfoldshuset-vestland" },
  openGraph: {
    title: "Mangfoldshuset Vestland — case study",
    description: "A real website for a nonprofit, designed, built and maintained by Elisa Rumeysa Solberg.",
    url: "https://elisatech.io/projects/mangfoldshuset-vestland",
    images: [{ url: "/work/mangfoldshuset.jpg", width: 2160, height: 1170 }],
  },
};

const facts = [
  { label: "My role", value: "Design, development and maintenance, on my own" },
  { label: "Client", value: "Mangfoldshuset Vestland, a nonprofit in Vestland" },
  { label: "Timeline", value: "March 2026 – today" },
  { label: "Built with", value: "Next.js · Supabase · Resend · Vercel" },
];

const publicSide = [
  "A front page with a photo carousel and the organization's own impact numbers",
  "Activities and regular offers, with sign-up and email reminders",
  "News, committees and an about page",
  "Mangfoldsposten, the organization's magazine, readable as a flip-through edition with an archive",
  "Membership and volunteer forms, ideas and partnership requests",
  "Vipps donations, a privacy page and a cookie notice that only uses necessary cookies",
];

const adminSide = [
  "Sign-in for the team, with roles that decide who may edit what",
  "Publishing activities, offers, news, committees and front-page images",
  "Uploading new magazine editions",
  "Members, incoming messages and form submissions in one place",
  "Statistics the team updates themselves",
];

const decisions = [
  {
    title: "A real database, not a page builder",
    text: "Content lives in Supabase (Postgres) with row-level security, so the team edits through the admin area and the database itself enforces who can read and change what. The schema grew through about 27 SQL migrations as new needs came in.",
  },
  {
    title: "Email that does not double-send",
    text: "Form notifications and activity reminders go through Resend. The reminder job runs on a schedule, uses Norwegian time for its dates and is idempotent, so a retry never sends the same reminder twice.",
  },
  {
    title: "The magazine as a magazine",
    text: "Mangfoldsposten is published as a PDF. Instead of a download link only, the site renders it page by page with pdf.js and lets readers flip through it, with zoom, fullscreen and an archive of earlier editions.",
  },
  {
    title: "Validate everything that comes in",
    text: "Forms are validated with Zod on the server, and link fields such as external links and the Vipps link only accept real http(s) addresses before anything is saved.",
  },
];

const challenges = [
  {
    title: "A missing mobile menu",
    text: "A full review in September showed the navigation had no menu on phones at all. I added one, widened the breakpoint and moved it to a simpler native details/summary pattern.",
  },
  {
    title: "Fail-open roles",
    text: "The same review found that role checks let people through when a role could not be read. I changed them to fail closed, fixed the related database policies and added HTTP security headers, with regression tests so it stays fixed.",
  },
  {
    title: "Accessibility findings",
    text: "Automated axe scans flagged colour contrast, heading order and a missing landmark. I fixed all three, added visible focus rings, reduced-motion support and pause buttons for the moving carousel, and made the animated counters announce their final value to screen readers.",
  },
  {
    title: "A logo that disappeared at night",
    text: "On phones with forced dark mode, the browser darkened the header and the logo vanished. The header now keeps a fixed light background so the logo is always visible.",
  },
];

const gallery = [
  { src: "/work/mangfoldshuset-aktiviteter.jpg", label: "mangfoldshusetvestland.no/aktiviteter", alt: "Activities page listing regular offers: Barseltreff on Fridays, Språkkafé on Tuesdays and Familiebrunsj on the last Sunday of the month.", caption: "Activities and regular offers, each with time, place and sign-up." },
  { src: "/work/mangfoldshuset-posten.jpg", label: "mangfoldshusetvestland.no/mangfoldsposten", alt: "Mangfoldsposten page showing the August 2026 edition in a page viewer with zoom and fullscreen controls, and an archive of earlier editions.", caption: "Mangfoldsposten, readable page by page, with an archive." },
  { src: "/work/mangfoldshuset-bli-med.jpg", label: "mangfoldshusetvestland.no/bli-med", alt: "Bli med page with shortcuts to membership, volunteering, ideas and partnerships, above the membership form.", caption: "One page for every way to take part, starting with membership." },
];

export default function MangfoldshusetCaseStudy() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main className="case">
        <header className="case-hero">
          <Link href="/#work" className="back-link">
            <span aria-hidden="true">←</span> All work
          </Link>
          <p className="project-tags">
            <span className="status status-live">Live</span>
            <span>Client website</span>
            <span>Nonprofit</span>
          </p>
          <h1 className="case-title">Mangfoldshuset Vestland</h1>
          <p className="case-lede">
            The website for a community organization in Vestland, where people from different backgrounds meet,
            take part and learn. I designed it, built it and still look after it.
          </p>
          <dl className="case-facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="hero-actions">
            <a href="https://www.mangfoldshusetvestland.no/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit the live site <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link href="/#contact" className="btn btn-ghost">Talk about your website</Link>
          </div>
        </header>

        <section className="case-showcase" aria-label="Screenshots of the front page">
          <div className="case-desktop">
            <Shot label="mangfoldshusetvestland.no">
              <Image src="/work/mangfoldshuset.jpg" width={2160} height={1170} priority sizes="(max-width: 900px) 92vw, 64vw" alt="Front page of mangfoldshusetvestland.no on a desktop: a green hero reading 'Et varmt fellesskap i Vestland' beside a photo from a girls' basketball event." />
            </Shot>
          </div>
          <div className="case-phone">
            <Image src="/work/mangfoldshuset-mobile.jpg" width={780} height={1688} sizes="(max-width: 900px) 60vw, 22vw" alt="The same front page on a phone, with the menu button, the hero text and the organization's impact numbers." />
          </div>
        </section>

        <section className="case-section case-split" aria-labelledby="built-title">
          <div data-reveal>
            <h2 id="built-title" className="section-title">What the site <em>does</em></h2>
            <p className="section-lede">
              Two sides of the same site: what visitors see, and the admin area the volunteers use to keep it alive
              without needing a developer for every change.
            </p>
          </div>
          <div className="case-lists" data-reveal>
            <div className="case-list tint-sage">
              <h3>For visitors</h3>
              <ul>{publicSide.map((x) => <li key={x}><Sparkle className="list-mark" />{x}</li>)}</ul>
            </div>
            <div className="case-list tint-lavender">
              <h3>For the team</h3>
              <ul>{adminSide.map((x) => <li key={x}><Sparkle className="list-mark" />{x}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="section-title" data-reveal>A closer <em>look</em></h2>
          <div className="case-gallery">
            {gallery.map((g) => (
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
          <h2 id="decisions-title" className="section-title" data-reveal>Decisions I&apos;m <em>glad I made</em></h2>
          <div className="case-cards">
            {decisions.map((d) => (
              <article key={d.title} data-reveal>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-challenges" aria-labelledby="challenges-title">
          <h2 id="challenges-title" className="section-title" data-reveal>What went wrong, <em>and what I changed</em></h2>
          <p className="section-lede" data-reveal>
            In September I reviewed the whole site as if I were auditing someone else&apos;s work. These are the
            findings that mattered most.
          </p>
          <ol className="path" data-reveal>
            {challenges.map((c, i) => (
              <li key={c.title} style={{ "--d": i } as React.CSSProperties}>
                <span className="path-dot" aria-hidden="true" />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-section case-quality" aria-labelledby="quality-title">
          <div className="case-quality-box tint-blush" data-reveal>
            <h2 id="quality-title" className="sub-title">How it stays healthy</h2>
            <ul className="case-numbers">
              <li><strong>~360</strong><span>commits since 12 March 2026</span></li>
              <li><strong>27</strong><span>database migrations</span></li>
              <li><strong>3</strong><span>kinds of automated checks: Vitest, Playwright, axe</span></li>
            </ul>
            <p>
              Unit and regression tests run with Vitest, real browser checks with Playwright, and accessibility scans
              with axe. Dependencies are kept current, and production has no open npm audit findings.
            </p>
          </div>
        </section>

        <section className="case-section case-cta" aria-labelledby="cta-title">
          <div data-reveal>
            <h2 id="cta-title" className="section-title">Does your organization need <em>a site like this?</em></h2>
            <p className="section-lede">
              I build websites for nonprofits, organizations and small businesses, and I stay around after launch.
              Tell me what you need and I&apos;ll answer honestly about what it takes.
            </p>
            <div className="hero-actions">
              <Link href="/#contact" className="btn btn-primary">Tell me about your project</Link>
              <Link href="/#work" className="btn btn-ghost">See my other work</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
