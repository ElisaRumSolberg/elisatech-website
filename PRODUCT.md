# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Everyone who might look Elisa up (confirmed: "aslında herkesi"):
- Recruiters and internship hiring managers: skills, real projects, technical thinking, HVL background.
- Nonprofits and community organizations: the Mangfoldshuset Vestland client site and a clear web offer.
- Small businesses: websites, integrations, AI tools, realistic examples.
- Developer peers: source code, architecture, tradeoffs, GitHub.

Visitors will also arrive from the developer credit in the Mangfoldshuset Vestland footer (once the organization approves the link).

## Product Purpose
Personal software engineering portfolio and small digital studio for Elisa Rumeysa Solberg, Computer Engineering student at HVL in Bergen. It replaces the former ElisaTech agency landing page. Success: within seconds a visitor knows who Elisa is, what she builds and how to contact her; recruiters can open honest, detailed project pages; potential clients find a live, genuine website project and a clear web development offer.

Commissions are a first-class path (confirmed 2026-10-09): anyone who wants a website, software or AI automation built must be able to reach Elisa easily from anywhere on the page. No prices are published.

## Positioning
Builds AI systems where code makes the decisions and the model is constrained (deterministic policy gates, fixed rubrics, verified knowledge bases, measured evaluations), and builds real websites for real organizations. Shipped and tested, not mockups. Works in Norwegian, English and Turkish.

## Capabilities and Constraints
- Next.js 16 (App Router, TypeScript, Tailwind v4) on git branch `portfolio`, replacing the old static `index.html`. The old site stays on `main`; the user's uncommitted FAQ work is in `git stash` ("business-site FAQ section").
- Hosting: Vercel. Primary domain https://www.elisastudio.no (Domeneshop, registered to Elisa 2026-10-09); elisastudio.no redirects to www; elisatech.io is the old domain and should redirect to elisastudio.no.
- Languages: Norwegian (nb) at /, English at /en, with hreflang alternates.
- Contact form posts to Formspree (`https://formspree.io/f/xlgaggyk`). Google Analytics G-JBR4458X7Q was on the old site.
- Norwegian and English are live; Turkish is not planned for now. Never ship untranslated placeholders.
- Planned routes (later phases): /projects, /projects/[slug], /about, /studio, /notes, /contact, /resume.
- The user commits and merges herself.

## Brand Commitments
- Source-of-truth brief: `Downloads/ELISA_STUDIO_PROJECT_PLAN.md` (user-supplied 2026-10-09), adopted together with Claude's additions (extra projects, alternative typefaces), confirmed by the user.
- Working public name "Elisa Studio", wordmark `elisa.` with secondary `studio`. Domain elisastudio.no (from 2026-10-14). The old ElisaTech orbit logo is retired.
- Brand promise: "Thoughtful technology, beautifully built." Guiding line: "Soft in appearance. Strong in engineering."
- Voice: warm, direct, confident, precise, approachable. No "senior engineer" claims, invented testimonials or unevidenced metrics.
- Email hello@elisatech.io. GitHub github.com/ElisaRumSolberg. LinkedIn and CV not provided yet; do not invent.

## Evidence on Hand
Featured:
- Mangfoldshuset Vestland: real website for a nonprofit, live at https://www.mangfoldshusetvestland.no/. Next.js 16, Supabase (database, auth, storage), Resend, Vercel, Vipps donations; activities, news, newsletter (Mangfoldsposten), membership, admin; Vitest, Playwright, axe. Built since March 2026, about 360 commits.
- Incident Resolver Agent: observe → investigate → act → verify → re-plan loop; Gemini via ADK only diagnoses and proposes; Safety Policy Engine (whitelist, service risk profiles, autonomy modes, kill switch, rate limit) decides; human approval above low risk; 22+ backend tests. Public repo, live demo with guest mode. Google All Things Agentic Hackathon, Aug 2026.
- ClearRights: explains Norwegian official letters, computes deadlines, routes to agency and law from a Lovdata-verified knowledge base; red-team 24/24, deadlines 28/28, quotes 98/98 on the team's own letters. Demo video https://youtu.be/GM6BdBLJIGM. LexHack 2026, submitted 27 Sep 2026, judging pending.
- Bureaucracy Action Agent: documents → persistent, dependency-aware workflow with a self-updating Next Best Action and activity log; ADK tool calls, Firestore, Cloud Run, Gemini 3. Public repo github.com/ElisaRumSolberg/bureaucracy-action-agent.

Experiments and learning:
- Assumption Hunter: reports hidden assumptions in a codebase, each tied to a file and a risk; 10-case eval with ground truth; V2 severity filter cut findings per case 4.5 → 3.5 at 100% recall. Python, Gemini. Public repo.
- TeachBack AI: evaluation engine (no UI yet) grading explanations against fixed rubrics; temperature 0, evidence quotes, 14-case suite, consistency check, prompt-injection tested. TypeScript. Pixel Forge AI Hackathon. Public repo.
- Language Agent: Telegram Norwegian tutor; SQLite + spaced repetition decide, Claude writes and grades. Python. Phase 1. Public repo.
- SafeHer: discreet personal-safety app with silent SOS, Flutter + Node/Express + PostgreSQL, co-founded with Alissa Ruya Aksel, HVL Skape. Do not describe the disguise mechanism.
- ElisaTech chatbot: n8n lead-capture chatbot in NO/EN/TR.

Absent, must not be fabricated: client testimonials, engagement or impact figures, hackathon placements, photos of Elisa, LinkedIn URL, CV, notes/articles.

## Product Principles
1. Real, verified work only; unfinished work is labeled honestly.
2. Web development services stay visible next to the AI work, because clients arrive from a client website.
3. Show how Elisa thinks (problem → constraints → decisions → tests → learning), not a logo collage.
4. Soft in appearance, strong in engineering: readability, speed and accessibility before decoration.

## Accessibility & Inclusion
Contrast checked on blush, lavender and sage surfaces; keyboard navigation and visible focus; reduced-motion support with no information gated behind animation.
