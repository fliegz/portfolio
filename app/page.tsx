import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeffrey Fliegler — AI systems, built in public",
  description: "A living portfolio of AI products, agents, and experiments built by Jeffrey Fliegler.",
};

const projects = [
  { name: "Hermes Mission Control", type: "AI infrastructure", status: "In Progress", href: "https://getsreviews.app/", description: "A command center for coordinating agents, queues, approvals, memory, handoffs, and live work.", tags: ["Agents", "Orchestration", "Dashboard"] },
  { name: "Baseball Workshop", type: "Sports technology", status: "Built", href: "https://Baseballworkshop.com", description: "A video-based coaching workspace for players, parents, and coaches to turn swings into useful feedback.", tags: ["Video", "Coaching", "Analysis"] },
  { name: "Marcy", type: "Small business AI", status: "Built", href: "https://www.getmarcy.com/", description: "An AI receptionist that captures leads, answers questions, sends texts, and keeps owners in the loop.", tags: ["Leads", "SMS", "Automation"] },
  { name: "Prompt Foundation", type: "AI productivity", status: "Built", href: "https://prompts.thepointsolutions.com/", description: "A practical prompt-building tool for turning rough ideas into reusable instructions and workflows.", tags: ["Prompts", "Tooling", "UX"] },
  { name: "Content Multiplier", type: "Marketing systems", status: "In Progress", href: "https://contentx.thepointsolutions.com/", description: "A content engine that helps restaurants and local businesses turn one idea into a week of useful marketing.", tags: ["Content", "Marketing", "MVP"] },
  { name: "Restaurant Picker", type: "Consumer app", status: "Built", href: "https://rpicks.thepointsolutions.com/", description: "A low-friction way for two people to privately choose a restaurant they will both actually enjoy.", tags: ["Matching", "Preferences", "Mobile"] },
  { name: "AI Legal Intake", type: "Professional services", status: "Prototype", href: "https://www.getmarcy.com/LAWAI", description: "An intake flow designed to turn messy first contacts into organized, actionable case information.", tags: ["Intake", "AI", "Legal"] },
  { name: "Obsidian Mission Sync", type: "Personal knowledge", status: "Connected", description: "A bridge between a local knowledge base and the systems used to plan and run ongoing work.", tags: ["Obsidian", "MCP", "Notes"] },
];

const statusClass: Record<string, string> = { Built: "built", "In Progress": "progress", Prototype: "prototype", Connected: "connected" };

const labProjects = [
  ["01", "Content Generator", "A curated blog creator for AI news and information—great for topical authority and website SEO."],
  ["02", "Cold Email System", "Finds leads, adds them to an email delivery system, and sends targeted outreach."],
  ["03", "Job Hunter", "Finds roles on job sites, then writes a tailored résumé and cover letter for each opportunity."],
  ["04", "Database Lookup Agent", "An internal-use-only agent for finding and organizing information across business databases."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap"><a className="brand" href="#top">JF<span>.</span></a><div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div></nav>
      <section className="hero wrap" id="top"><p className="eyebrow">A living portfolio</p><h1>Useful things,<br /><em>built deliberately.</em></h1><p className="lede">I design and build small, practical AI systems for people doing real work — from baseball coaches to local businesses to the agents that help me run it all.</p><div className="hero-actions"><a className="button primary" href="#work">Explore the work <span>↓</span></a><a className="text-link" href="#about">What I’m building now →</a></div></section>
      <section className="signal"><div className="wrap signal-inner"><span className="signal-dot" />Currently focused on <strong>agent coordination, useful automation, and a calmer way to work.</strong><span className="signal-date">August 2026</span></div></section>
      <section className="work wrap" id="work"><div className="section-head"><div><p className="eyebrow">Selected work</p><h2>A growing shelf of experiments.</h2></div><p className="section-note">Some are shipped. Some are still becoming. All of them start with a real problem.</p></div><div className="grid">{projects.map((project, index) => <article className={`card card-${(index % 4) + 1}`} key={project.name}><div className="card-top"><span className="number">0{index + 1}</span><span className={`status ${statusClass[project.status]}`}>{project.status}</span></div><p className="card-type">{project.type}</p><h3>{project.name}</h3><p className="card-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.href && <a href={project.href} target="_blank" rel="noreferrer">Open project ↗</a>}</article>)}</div></section>
      <section className="about wrap" id="about"><div className="about-mark">✦</div><div><p className="eyebrow">The through-line</p><h2>Less noise. More leverage.</h2><p>I’m interested in the space between an idea and the moment it becomes useful. That usually means simple interfaces, thoughtful automation, and systems that make the next action obvious.</p><p>This page is intentionally a living document. New projects, notes, and working versions can be added here as they take shape.</p></div></section>
      <section className="work wrap"><div className="section-head"><div><p className="eyebrow">In the lab</p><h2>Agentic builds</h2></div><p className="section-note">Agent builds, early-stage systems, experiments, and internal tools.</p></div><div className="grid">{labProjects.map(([number, name, description], index) => <article className={`card card-${(index % 4) + 1}`} key={number}><div className="card-top"><span className="number">{number}</span><span className="status progress">Early stage</span></div><p className="card-type">Lab build</p><h3>{name}</h3><p className="card-description">{description}</p></article>)}</div></section>
      <section className="contact wrap" id="contact"><p className="eyebrow">Have a good problem?</p><h2>Let’s make it<br /><em>less complicated.</em></h2><a className="button primary" href="mailto:hello@jeffreyfliegler.com">Say hello <span>↗</span></a></section>
      <footer className="footer wrap"><span>© 2026 Jeffrey Fliegler</span><span>Built in public, one useful thing at a time.</span></footer>
    </main>
  );
}
