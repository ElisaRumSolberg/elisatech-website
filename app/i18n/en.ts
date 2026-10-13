/** Heading with an italic accent: [before, accent, after]. */
export type Accent = [string, string, string?];

export const en = {
  meta: {
    homeTitle: "Elisa Rumeysa Solberg — Elisa Studio | elisatech.io",
    homeDescription:
      "Portfolio and web studio of Elisa Rumeysa Solberg, Computer Engineering student in Bergen. Websites, software and AI systems, with real projects and a direct line for new work.",
    ogDescription: "Thoughtful technology, beautifully built. Websites, software and AI systems from Bergen.",
    ogLocale: "en_GB",
    jobTitle: "Computer Engineering student",
  },
  common: {
    newTab: " (opens in a new tab)",
    builtWith: "Built with",
    home: "Elisa Studio, home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    tagline: "Thoughtful technology, beautifully built.",
    copyright: "© 2026 Elisa Rumeysa Solberg · Bergen",
  },
  nav: { work: "Work", studio: "Studio", about: "About", cta: "Let's talk" },
  hero: {
    words: [
      { t: "A little" },
      { t: "creativity,", em: true },
      { t: "a lot" },
      { t: "of" },
      { t: "code.", underline: true },
    ] as { t: string; em?: boolean; underline?: boolean }[],
    sub: "Hi, I'm Elisa, a Computer Engineering student at HVL in Bergen, building thoughtful websites, useful software and intelligent systems.",
    explore: "Explore my work",
    workWithMe: "Work with me",
  },
  work: {
    title: ["Selected ", "work"] as Accent,
    lede: "A real website for a real organization, and the AI systems I'm proudest of. Each one says plainly what it is, and how far along it is.",
    caseStudy: "Read the case study",
    status: { live: "Live", demo: "Live demo", submitted: "Submitted" },
    featured: [
      {
        slug: "mangfoldshuset-vestland",
        name: "Mangfoldshuset Vestland",
        status: "live",
        tags: ["Client website", "Nonprofit"],
        line: "The website for a community organization in Vestland, where people from different backgrounds meet, take part and learn.",
        how: "Built and looked after by me since March 2026. Activities, news, the Mangfoldsposten magazine, membership and volunteer sign-up, Vipps donations, and an admin area so the team can publish on their own.",
        proof: "Checked with Vitest, Playwright and axe accessibility scans before changes go live.",
        stack: ["Next.js", "Supabase", "Resend", "Vercel"],
        links: [{ label: "Visit the live site", href: "https://www.mangfoldshusetvestland.no/" }],
        caseStudy: "/projects/mangfoldshuset-vestland",
        shot: { src: "/work/mangfoldshuset.jpg", width: 2160, height: 1170, alt: "Front page of mangfoldshusetvestland.no: a green hero reading 'Et varmt fellesskap i Vestland' beside a photo from a girls' basketball event." },
        tint: "sage",
      },
      {
        slug: "incident-resolver-agent",
        name: "Incident Resolver Agent",
        status: "demo",
        tags: ["AI system", "Google All Things Agentic Hackathon"],
        line: "An agent that investigates production incidents, proposes a fix, applies it when it is allowed to, and checks that the service recovered.",
        how: "The model only diagnoses and proposes. A deterministic safety policy engine, with a whitelist, per-service risk profiles, autonomy modes and a kill switch, decides what may run, and asks a human above low risk.",
        proof: "Tests cover the cases that matter: blocked actions, double approvals, failed fixes and forced escalation.",
        stack: ["Gemini", "Google ADK", "FastAPI", "Next.js", "Firestore", "Cloud Run"],
        links: [
          { label: "Try the demo", href: "https://incident-resolver-web-722901486266.us-central1.run.app" },
          { label: "Source code", href: "https://github.com/ElisaRumSolberg/incident-resolver-agent" },
        ],
        shot: { src: "/work/incident.jpg", width: 2160, height: 1350, alt: "Incident Resolver landing page: 'An agent that investigates, decides, and acts, safely' above four steps, observe, diagnose, decide and act." },
        tint: "lavender",
      },
      {
        slug: "clearrights",
        name: "ClearRights",
        status: "submitted",
        tags: ["AI system", "LexHack 2026"],
        line: "Explains Norwegian official letters in plain language, works out the deadlines, and shows where to get help.",
        how: "The model only classifies the letter. Agencies, laws and links come from a knowledge base checked against Lovdata, and every point quotes the sentence it came from.",
        proof: "On a small set of test letters we wrote ourselves: red-team 24/24, deadlines 28/28, quotes 98/98.",
        stack: ["Next.js", "Gemini", "Cloud Run"],
        links: [
          { label: "Try it", href: "https://clearrights-760863161403.europe-north1.run.app" },
          { label: "Watch the demo", href: "https://youtu.be/GM6BdBLJIGM" },
        ],
        shot: { src: "/work/clearrights.jpg", width: 2160, height: 1350, alt: "ClearRights home: 'Official letters should not feel impossible to understand' next to an upload panel for analysing a letter." },
        tint: "blush",
      },
      {
        slug: "bureaucracy-action-agent",
        name: "Bureaucracy Action Agent",
        status: "live",
        tags: ["AI system", "Google All Things Agentic Hackathon"],
        line: "Turns an official document into a living plan: tasks, deadlines, dependencies, and what to do next.",
        how: "When you finish a task, the agent re-walks the dependency graph, unlocks what comes next and logs why. Priorities come from rules, never from the model's own opinion.",
        stack: ["Gemini", "Google ADK", "FastAPI", "Next.js", "Firestore", "Cloud Run"],
        links: [
          { label: "Try it", href: "https://bureaucracy-agent-web-760863161403.us-central1.run.app" },
          { label: "Source code", href: "https://github.com/ElisaRumSolberg/bureaucracy-action-agent" },
        ],
        shot: { src: "/work/bureaucracy.jpg", width: 2160, height: 1350, alt: "Bureaucracy Action Agent landing page with a next best action card, 'Upload proof of funds, due in 3 days, blocks 2 other actions'." },
        tint: "surface",
      },
    ] as Featured[],
    experimentsTitle: "Experiments & learning",
    experimentsLede: "Smaller builds, prototypes and things in progress. Honest labels included.",
    experiments: [
      { name: "Assumption Hunter", line: "Finds the hidden assumptions a codebase relies on, each tied to a file and the risk if it is false.", meta: "Python · Gemini", status: "Evaluated", link: { label: "Source", href: "https://github.com/ElisaRumSolberg/assumption-hunter" } },
      { name: "TeachBack AI", line: "Grades how well someone explains a concept, against fixed rubrics. The engine only, no interface yet.", meta: "TypeScript · Pixel Forge AI Hackathon", status: "Prototype", link: { label: "Source", href: "https://github.com/ElisaRumSolberg/teachback-ai" } },
      { name: "Language Agent", line: "My own Norwegian tutor on Telegram. Spaced repetition decides what comes back; Claude writes and grades the lesson.", meta: "Python · SQLite · Claude", status: "In progress", link: { label: "Source", href: "https://github.com/ElisaRumSolberg/language-agent" } },
      { name: "SafeHer", line: "A discreet personal-safety app with a silent SOS, co-founded with Alissa Ruya Aksel at HVL.", meta: "Flutter · Node.js · PostgreSQL", status: "In development" },
      { name: "ElisaTech chatbot", line: "A lead-capture chatbot that answers in Norwegian, English and Turkish and hands every lead to the owner.", meta: "n8n · Google Sheets", status: "Live" },
    ] as Experiment[],
  },
  studio: {
    title: ["What I can build ", "for you"] as Accent,
    lede: "For nonprofits, organizations and small businesses. Clear scope, honest estimates, and a site or tool you understand when it's handed over.",
    services: [
      { title: "Web experiences", text: "Fast, responsive, accessible websites for organizations and small businesses, that your team can keep up to date.", example: "Like Mangfoldshuset Vestland" },
      { title: "Software engineering", text: "Useful applications, integrations and APIs, with clean structure and tests, so they keep working after launch.", example: "Like the Bureaucracy Action Agent" },
      { title: "AI & automation", text: "Practical, carefully scoped AI tools and workflows: chatbots, document helpers, forms that route themselves.", example: "Like ClearRights or the ElisaTech chatbot" },
    ],
    processLabel: "How a project runs",
    process: ["Discover", "Plan", "Design", "Build", "Review", "Launch"],
    cta: "Tell me about your project",
  },
  approach: {
    title: ["How I ", "think", " through a project"] as Accent,
    lede: "One real example, from Assumption Hunter: what went in, and what I learned when the numbers came back.",
    steps: [
      { step: "Problem", text: "Teams inherit code full of assumptions nobody wrote down, until one breaks in production." },
      { step: "Constraints", text: "Every finding has to point to a real file and a real risk. Vague advice does not count." },
      { step: "Decisions", text: "Start with a single-prompt baseline, then add an evidence checker only where it can be measured." },
      { step: "Build", text: "A two-stage pipeline in Python: an analyzer proposes, a checker verifies against the cited file." },
      { step: "Tests", text: "Ten small projects with known answers, each with a test proving its counterexample really fails." },
      { step: "Learning", text: "The checker approved almost everything. A severity filter cut the noise by 22% without losing a single real hit." },
    ],
  },
  about: {
    title: ["Hi, I'm ", "Elisa"] as Accent,
    p1: "I study Computer Engineering at HVL in Bergen. I'm drawn to problems where software has to be careful: official letters, personal safety, systems that act on their own. And I like making things that feel good to use.",
    p2: "I speak Norwegian, English and Turkish, and I build for people in all three. Most of what I know I learned by shipping something, testing it like someone wants it to break, and writing down what surprised me.",
    stackTitle: "Tools I've used in these projects",
    stack: [
      { group: "Languages", items: ["TypeScript", "Python", "Dart", "SQL"] },
      { group: "Interfaces", items: ["Next.js", "React", "Tailwind CSS", "Flutter"] },
      { group: "Backends & data", items: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "Firestore", "SQLite"] },
      { group: "AI", items: ["Gemini on Vertex AI", "Google ADK", "Claude API", "n8n"] },
      { group: "Shipping & quality", items: ["Vercel", "Cloud Run", "GitHub", "pytest", "Vitest", "Playwright"] },
    ],
  },
  contact: {
    title: ["Have something lovely in mind? ", "Let's build it thoughtfully."] as Accent,
    lede: "A website, a tool, an internship or just a question: write a few lines and I'll get back to you.",
    email: "Email",
    basedIn: "Based in",
    place: "Bergen, Norway",
  },
  form: {
    name: "Your name",
    email: "Email",
    type: "What is it about?",
    types: ["A website", "Improving an existing website", "Software or an integration", "AI or workflow automation", "A job or internship", "Something else"],
    message: "Tell me a little",
    placeholder: "What you have in mind, and roughly when you need it",
    privacy: "Your message goes to my inbox through Formspree and is only used to reply to you.",
    send: "Send message",
    sending: "Sending…",
    sent: "Thank you! Your message reached me, and I'll reply within a couple of days.",
    error: "Your message didn't go through. Please try again, or write to hello@elisatech.io.",
    invalid: "Please add your name, a valid email and a few words about what you need.",
  },
  caseStudy: {
    metaTitle: "Mangfoldshuset Vestland — case study | Elisa Studio",
    metaDescription:
      "How Elisa Rumeysa Solberg designed, built and maintains the website for Mangfoldshuset Vestland, a community organization in Vestland: activities, magazine, membership, donations and an admin area.",
    ogDescription: "A real website for a nonprofit, designed, built and maintained by Elisa Rumeysa Solberg.",
    back: "All work",
    tags: ["Client website", "Nonprofit"],
    lede: "The website for a community organization in Vestland, where people from different backgrounds meet, take part and learn. I designed it, built it and still look after it.",
    facts: [
      { label: "My role", value: "Design, development and maintenance, on my own" },
      { label: "Client", value: "Mangfoldshuset Vestland, a nonprofit in Vestland" },
      { label: "Timeline", value: "March 2026 – today" },
      { label: "Built with", value: "Next.js · Supabase · Resend · Vercel" },
    ],
    visit: "Visit the live site",
    talk: "Talk about your website",
    showcaseLabel: "Screenshots of the front page",
    desktopAlt: "Front page of mangfoldshusetvestland.no on a desktop: a green hero reading 'Et varmt fellesskap i Vestland' beside a photo from a girls' basketball event.",
    phoneAlt: "The same front page on a phone, with the menu button, the hero text and the organization's impact numbers.",
    doesTitle: ["What the site ", "does"] as Accent,
    doesLede: "Two sides of the same site: what visitors see, and the admin area the volunteers use to keep it alive without needing a developer for every change.",
    visitorsTitle: "For visitors",
    visitors: [
      "A front page with a photo carousel and the organization's own impact numbers",
      "Activities and regular offers, with sign-up and email reminders",
      "News, committees and an about page",
      "Mangfoldsposten, the organization's magazine, readable as a flip-through edition with an archive",
      "Membership and volunteer forms, ideas and partnership requests",
      "Vipps donations, a privacy page and a cookie notice that only uses necessary cookies",
    ],
    teamTitle: "For the team",
    team: [
      "Sign-in for the team, with roles that decide who may edit what",
      "Publishing activities, offers, news, committees and front-page images",
      "Uploading new magazine editions",
      "Members, incoming messages and form submissions in one place",
      "Statistics the team updates themselves",
    ],
    lookTitle: ["A closer ", "look"] as Accent,
    gallery: [
      { src: "/work/mangfoldshuset-aktiviteter.jpg", label: "mangfoldshusetvestland.no/aktiviteter", alt: "Activities page listing regular offers: Barseltreff on Fridays, Språkkafé on Tuesdays and Familiebrunsj on the last Sunday of the month.", caption: "Activities and regular offers, each with time, place and sign-up." },
      { src: "/work/mangfoldshuset-posten.jpg", label: "mangfoldshusetvestland.no/mangfoldsposten", alt: "Mangfoldsposten page showing the August 2026 edition in a page viewer with zoom and fullscreen controls, and an archive of earlier editions.", caption: "Mangfoldsposten, readable page by page, with an archive." },
      { src: "/work/mangfoldshuset-bli-med.jpg", label: "mangfoldshusetvestland.no/bli-med", alt: "Bli med page with shortcuts to membership, volunteering, ideas and partnerships, above the membership form.", caption: "One page for every way to take part, starting with membership." },
    ],
    decisionsTitle: ["Decisions I'm ", "glad I made"] as Accent,
    decisions: [
      { title: "A real database, not a page builder", text: "Content lives in Supabase (Postgres) with row-level security, so the team edits through the admin area and the database itself enforces who can read and change what. The schema grew through about 27 SQL migrations as new needs came in." },
      { title: "Email that does not double-send", text: "Form notifications and activity reminders go through Resend. The reminder job runs on a schedule, uses Norwegian time for its dates and is idempotent, so a retry never sends the same reminder twice." },
      { title: "The magazine as a magazine", text: "Mangfoldsposten is published as a PDF. Instead of a download link only, the site renders it page by page with pdf.js and lets readers flip through it, with zoom, fullscreen and an archive of earlier editions." },
      { title: "Validate everything that comes in", text: "Forms are validated with Zod on the server, and link fields such as external links and the Vipps link only accept real http(s) addresses before anything is saved." },
    ],
    wrongTitle: ["What went wrong, ", "and what I changed"] as Accent,
    wrongLede: "In September I reviewed the whole site as if I were auditing someone else's work. These are the findings that mattered most.",
    challenges: [
      { title: "A missing mobile menu", text: "A full review in September showed the navigation had no menu on phones at all. I added one, widened the breakpoint and moved it to a simpler native details/summary pattern." },
      { title: "Fail-open roles", text: "The same review found that role checks let people through when a role could not be read. I changed them to fail closed, fixed the related database policies and added HTTP security headers, with regression tests so it stays fixed." },
      { title: "Accessibility findings", text: "Automated axe scans flagged colour contrast, heading order and a missing landmark. I fixed all three, added visible focus rings, reduced-motion support and pause buttons for the moving carousel, and made the animated counters announce their final value to screen readers." },
      { title: "A logo that disappeared at night", text: "On phones with forced dark mode, the browser darkened the header and the logo vanished. The header now keeps a fixed light background so the logo is always visible." },
    ],
    healthTitle: "How it stays healthy",
    numbers: [
      { n: "~360", label: "commits since 12 March 2026" },
      { n: "27", label: "database migrations" },
      { n: "3", label: "kinds of automated checks: Vitest, Playwright, axe" },
    ],
    healthText: "Unit and regression tests run with Vitest, real browser checks with Playwright, and accessibility scans with axe. Dependencies are kept current, and production has no open npm audit findings.",
    ctaTitle: ["Does your organization need ", "a site like this?"] as Accent,
    ctaLede: "I build websites for nonprofits, organizations and small businesses, and I stay around after launch. Tell me what you need and I'll answer honestly about what it takes.",
    ctaPrimary: "Tell me about your project",
    ctaSecondary: "See my other work",
  },
  notFound: { title: "This page doesn't exist", text: "The link may be old, or the page has moved.", home: "Go to the front page" },
};

export type Featured = {
  slug: string;
  name: string;
  status: "live" | "demo" | "submitted";
  tags: string[];
  line: string;
  how: string;
  proof?: string;
  stack: string[];
  links: { label: string; href: string }[];
  caseStudy?: string;
  shot: { src: string; width: number; height: number; alt: string };
  tint: "blush" | "lavender" | "sage" | "surface";
};

export type Experiment = { name: string; line: string; meta: string; status: string; link?: { label: string; href: string } };

export type Dict = typeof en;
