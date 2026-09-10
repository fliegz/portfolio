import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeffrey Fliegler — AI systems, built in public",
  description: "A living portfolio of AI products, agents, and experiments built by Jeffrey Fliegler.",
};

const projects = [
  { name: "Hermes Mission Control", type: "AI infrastructure", status: "In Progress", href: "https://getsreviews.app/", description: "A command center for coordinating agents, queues, approvals, memory, handoffs, and live work.", tags: ["Agents", "Orchestration", "Dashboard"] },
  { name: "Dox Review", type: "Document intelligence", status: "In Progress", href: "https://doxreview.thepointsolutions.com/", description: "A private document review workspace that summarizes long records, preserves page-level citations, and checks claims against the source documents.", tags: ["Documents", "Citations", "Verification"] },
  { name: "Fantasy Wizard", type: "Fantasy sports", status: "In Progress", href: "https://fantasywizard.thepointsolutions.com/", description: "A fantasy sports assistant designed to turn player information into clearer, faster lineup decisions.", tags: ["Fantasy sports", "AI", "Decision support"] },
  { name: "Baseball Workshop", type: "Sports technology", status: "Built", href: "https://Baseballworkshop.com", description: "A video-based coaching workspace for players, parents, and coaches to turn swings into useful feedback.", tags: ["Video", "Coaching", "Analysis"] },
  { name: "Marcy", type: "Small business AI", status: "Built", href: "https://www.getmarcy.com/", description: "An AI receptionist that captures leads, answers questions, sends texts, and keeps owners in the loop.", tags: ["Leads", "SMS", "Automation"] },
  { name: "StockFit", type: "Fitness technology", status: "Built", href: "https://stockfit.thepointsolutions.com/", description: "A practical fitness tool built to help people make progress with clearer, more useful guidance.", tags: ["Fitness", "Tooling", "Web app"] },
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
      <section className="hero wrap" id="top"><div className="hero-kicker"><span>AI systems designer</span><span>California · 2026</span></div><h1>Portfolio<span>.</span></h1><div className="hero-bottom"><p className="lede">Useful AI products, agents, and automation—designed for people doing real work.</p><div className="hero-actions"><a className="button primary" href="#work">Explore the work <span>↓</span></a><a className="text-link" href="#about">About Jeffrey →</a></div></div></section>
      <div className="marquee" aria-label="Jeffrey Fliegler portfolio"><div>Jeffrey Fliegler <b>•</b> AI Systems <b>•</b> Portfolio <b>•</b> 2026 <b>•</b> Jeffrey Fliegler <b>•</b> AI Systems <b>•</b> Portfolio <b>•</b> 2026</div></div>
      <section className="signal"><div className="wrap signal-inner"><span className="signal-dot" />Currently focused on <strong>agent coordination, useful automation, and a calmer way to work.</strong><span className="signal-date">August 2026</span></div></section>
      <section className="work wrap" id="work"><div className="section-head"><div><p className="eyebrow">Selected work</p><h2>A growing shelf of experiments.</h2></div><p className="section-note">Some are shipped. Some are still becoming. All of them start with a real problem.</p></div><div className="grid">{projects.map((project, index) => <article className={`card card-${(index % 4) + 1}`} key={project.name}><div className="card-top"><span className="number">0{index + 1}</span><span className={`status ${statusClass[project.status]}`}>{project.status}</span></div><p className="card-type">{project.type}</p><h3>{project.name}</h3><p className="card-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.href && <a href={project.href} target="_blank" rel="noreferrer">Open project ↗</a>}</article>)}</div></section>
      <section className="about wrap" id="about"><div className="about-intro"><p className="eyebrow">About</p><h2>Hello!</h2><p className="about-role">I’m Jeffrey Fliegler<br /><em>AI systems designer & builder</em></p></div><div className="about-copy"><p>I’m interested in the space between an idea and the moment it becomes useful. That usually means simple interfaces, thoughtful automation, and systems that make the next action obvious.</p><p>This is a living portfolio. New products, agents, and working versions are added as they take shape.</p><div className="capabilities"><span>Product strategy</span><span>AI automation</span><span>Agent systems</span><span>Rapid prototyping</span></div></div></section>
      <section className="work wrap"><div className="section-head"><div><p className="eyebrow">In the lab</p><h2>Agent Builds, Early-Stage Systems, and Internal Tools</h2></div></div><div className="grid">{labProjects.map(([number, name, description], index) => <article className={`card card-${(index % 4) + 1}`} key={number}><div className="card-top"><span className="number">{number}</span></div><p className="card-type">Lab build</p><h3>{name}</h3><p className="card-description">{description}</p></article>)}</div></section>
      <section className="contact wrap" id="contact"><p className="eyebrow">Have a good problem?</p><h2>Let’s make it<br /><em>less complicated.</em></h2><a className="button primary" href="mailto:Jeff@thepointsolutions.com">Say hello <span>↗</span></a></section>
      <footer className="footer wrap"><span>© 2026 Jeffrey Fliegler</span><span>Built in public, one useful thing at a time.</span></footer>
    </main>
  );
}
