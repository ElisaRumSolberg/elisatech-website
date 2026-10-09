export type Link = { label: string; href: string };

export type Featured = {
  slug: string;
  name: string;
  tags: string[];
  status: "Live" | "Live demo" | "Submitted";
  line: string;
  how: string;
  proof?: string;
  stack: string[];
  links: Link[];
  caseStudy?: string;
  shot: { src: string; width: number; height: number; alt: string };
  tint: "blush" | "lavender" | "sage" | "surface";
};

export const featured: Featured[] = [
  {
    slug: "mangfoldshuset-vestland",
    name: "Mangfoldshuset Vestland",
    tags: ["Client website", "Nonprofit"],
    status: "Live",
    line: "The website for a community organization in Vestland, where people from different backgrounds meet, take part and learn.",
    how: "Built and looked after by me since March 2026. Activities, news, the Mangfoldsposten newsletter, membership and volunteer sign-up, Vipps donations, and an admin area so the team can publish on their own.",
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
    tags: ["AI system", "Google All Things Agentic Hackathon"],
    status: "Live demo",
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
    tags: ["AI system", "LexHack 2026"],
    status: "Submitted",
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
    tags: ["AI system", "Google All Things Agentic Hackathon"],
    status: "Live",
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
];

export type Experiment = { name: string; line: string; meta: string; status: string; link?: Link };

export const experiments: Experiment[] = [
  {
    name: "Assumption Hunter",
    line: "Finds the hidden assumptions a codebase relies on, each tied to a file and the risk if it is false.",
    meta: "Python · Gemini",
    status: "Evaluated",
    link: { label: "Source", href: "https://github.com/ElisaRumSolberg/assumption-hunter" },
  },
  {
    name: "TeachBack AI",
    line: "Grades how well someone explains a concept, against fixed rubrics. The engine only, no interface yet.",
    meta: "TypeScript · Pixel Forge AI Hackathon",
    status: "Prototype",
    link: { label: "Source", href: "https://github.com/ElisaRumSolberg/teachback-ai" },
  },
  {
    name: "Language Agent",
    line: "My own Norwegian tutor on Telegram. Spaced repetition decides what comes back; Claude writes and grades the lesson.",
    meta: "Python · SQLite · Claude",
    status: "In progress",
    link: { label: "Source", href: "https://github.com/ElisaRumSolberg/language-agent" },
  },
  {
    name: "SafeHer",
    line: "A discreet personal-safety app with a silent SOS, co-founded with Alissa Ruya Aksel at HVL.",
    meta: "Flutter · Node.js · PostgreSQL",
    status: "In development",
  },
  {
    name: "ElisaTech chatbot",
    line: "A lead-capture chatbot that answers in Norwegian, English and Turkish and hands every lead to the owner.",
    meta: "n8n · Google Sheets",
    status: "Live",
  },
];

export const approach = [
  { step: "Problem", text: "Teams inherit code full of assumptions nobody wrote down, until one breaks in production." },
  { step: "Constraints", text: "Every finding has to point to a real file and a real risk. Vague advice does not count." },
  { step: "Decisions", text: "Start with a single-prompt baseline, then add an evidence checker only where it can be measured." },
  { step: "Build", text: "A two-stage pipeline in Python: an analyzer proposes, a checker verifies against the cited file." },
  { step: "Tests", text: "Ten small projects with known answers, each with a test proving its counterexample really fails." },
  { step: "Learning", text: "The checker approved almost everything. A severity filter cut the noise by 22% without losing a single real hit." },
];

export const stack = [
  { group: "Languages", items: ["TypeScript", "Python", "Dart", "SQL"] },
  { group: "Interfaces", items: ["Next.js", "React", "Tailwind CSS", "Flutter"] },
  { group: "Backends & data", items: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "Firestore", "SQLite"] },
  { group: "AI", items: ["Gemini on Vertex AI", "Google ADK", "Claude API", "n8n"] },
  { group: "Shipping & quality", items: ["Vercel", "Cloud Run", "GitHub", "pytest", "Vitest", "Playwright"] },
];
