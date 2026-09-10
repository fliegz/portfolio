"use client";

import { useMemo, useState } from "react";
import "./studio.css";

type Network = "Instagram" | "LinkedIn" | "TikTok" | "Facebook" | "X";

const networks: { name: Network; mark: string; tone: string; connected: boolean }[] = [
  { name: "Instagram", mark: "◎", tone: "pink", connected: true },
  { name: "LinkedIn", mark: "in", tone: "blue", connected: true },
  { name: "TikTok", mark: "♪", tone: "black", connected: false },
  { name: "Facebook", mark: "f", tone: "indigo", connected: true },
  { name: "X", mark: "𝕏", tone: "black", connected: false },
];

const queue = [
  { day: "12", mon: "SEP", title: "What I learned building an AI receptionist", networks: ["in", "𝕏"], time: "9:30 AM", state: "Ready" },
  { day: "13", mon: "SEP", title: "Three automations that give me an hour back", networks: ["◎", "f"], time: "11:00 AM", state: "Draft" },
  { day: "15", mon: "SEP", title: "Behind the scenes: from rough idea to useful product", networks: ["♪", "◎"], time: "5:45 PM", state: "Needs video" },
];

export default function Studio() {
  const [selected, setSelected] = useState<Network[]>(["Instagram", "LinkedIn"]);
  const [copy, setCopy] = useState("The best automations don’t feel like automation. They feel like getting a small part of your day back.\n\nHere are three simple systems I’ve been testing this week ↓");
  const [notice, setNotice] = useState("");
  const [tab, setTab] = useState("Create");
  const active = useMemo(() => networks.filter((n) => selected.includes(n.name)), [selected]);

  function toggle(name: Network) {
    setSelected((value) => value.includes(name) ? value.filter((item) => item !== name) : [...value, name]);
  }

  function schedule() {
    if (!copy.trim() || selected.length === 0) return;
    setNotice(`Scheduled for ${selected.length} ${selected.length === 1 ? "channel" : "channels"}`);
    window.setTimeout(() => setNotice(""), 3000);
  }

  return (
    <main className="studio-shell">
      <aside className="studio-sidebar">
        <a className="studio-logo" href="/studio" aria-label="Solo studio home"><span>J</span><b>Solo</b></a>
        <nav aria-label="Studio navigation">
          {["Create", "Calendar", "Library", "Analytics"].map((item) => <button className={tab === item ? "active" : ""} key={item} onClick={() => setTab(item)}><span>{item === "Create" ? "+" : item === "Calendar" ? "▦" : item === "Library" ? "□" : "↗"}</span>{item}</button>)}
        </nav>
        <div className="sidebar-bottom"><a href="/">← Portfolio</a><div className="person"><span>JF</span><div><b>Jeffrey</b><small>Personal workspace</small></div></div></div>
      </aside>

      <section className="studio-main">
        <header className="studio-header"><div><p>PERSONAL CONTENT STUDIO</p><h1>{tab === "Create" ? "Create once. Shape it for everywhere." : tab}</h1></div><div className="header-actions"><button className="icon-button" aria-label="Notifications">◌</button><button className="help-button">Need help?</button></div></header>

        {tab === "Create" ? <>
          <section className="connection-strip" aria-label="Social channels">
            <div><strong>Your channels</strong><span>{networks.filter(n => n.connected).length} connected</span></div>
            <div className="network-row">{networks.map((network) => <button key={network.name} className={`network ${network.tone} ${selected.includes(network.name) ? "selected" : ""}`} onClick={() => toggle(network.name)} aria-pressed={selected.includes(network.name)}><i>{network.mark}</i><span>{network.name}</span><em className={network.connected ? "on" : ""}>{network.connected ? "Connected" : "Connect"}</em></button>)}</div>
          </section>

          <div className="composer-grid">
            <section className="composer-card">
              <div className="card-label"><span>01</span><div><strong>Start with your idea</strong><small>We’ll adapt it to each channel.</small></div></div>
              <textarea value={copy} onChange={(event) => setCopy(event.target.value)} maxLength={2200} aria-label="Post content" />
              <div className="composer-tools"><div><button title="Add image">▧</button><button title="Add video">▷</button><button title="Add link">↗</button><button title="Add emoji">☺</button></div><span>{copy.length} / 2,200</span></div>
              <div className="ai-box"><div><i>✦</i><span><strong>Make it work harder</strong><small>Turn this into platform-ready variations.</small></span></div><button onClick={() => setNotice("Variations are ready to review")}>Generate variations →</button></div>
            </section>

            <section className="preview-card">
              <div className="preview-head"><div><strong>Live preview</strong><small>{active.length || 0} selected</small></div><span>•••</span></div>
              {active.length ? <div className="preview-body"><div className="preview-profile"><span>JF</span><div><b>Jeffrey Fliegler</b><small>{active.map(n => n.name).join(" · ")}</small></div></div><p>{copy || "Your post will appear here."}</p><div className="media-placeholder"><span>Drop an image or video</span><small>Recommended 1080 × 1350</small></div><div className="preview-stats"><span>♡ &nbsp; ◯ &nbsp; ↗</span><span>Save</span></div></div> : <div className="empty-preview">Select a channel to preview your post.</div>}
              <div className="preview-foot"><span>Preview adapts to each network</span><button>Open detailed previews ↗</button></div>
            </section>
          </div>

          <section className="schedule-bar"><div><span className="step">02</span><div><strong>Choose when it goes live</strong><small>Pacific time · Best time highlighted</small></div></div><div className="schedule-controls"><button><span>▦</span><b>Fri, Sep 12</b></button><button><span>◷</span><b>9:30 AM</b><em>BEST TIME</em></button><button className="schedule-button" onClick={schedule} disabled={!copy.trim() || selected.length === 0}>Schedule post <span>→</span></button></div></section>

          <section className="queue-section"><div className="queue-title"><div><p>UP NEXT</p><h2>Your content queue</h2></div><button onClick={() => setTab("Calendar")}>View calendar →</button></div><div className="queue-list">{queue.map(item => <article key={item.title}><div className="date-box"><b>{item.day}</b><span>{item.mon}</span></div><div className="queue-copy"><h3>{item.title}</h3><div>{item.networks.map(n => <i key={n}>{n}</i>)}<span>{item.time}</span></div></div><span className={`queue-state ${item.state.toLowerCase().replace(" ", "-")}`}>{item.state}</span><button aria-label={`More options for ${item.title}`}>•••</button></article>)}</div></section>
        </> : <section className="placeholder-view"><span>{tab === "Calendar" ? "▦" : tab === "Library" ? "□" : "↗"}</span><h2>{tab} is ready for the next build.</h2><p>The composer is complete. This workspace will hold your {tab.toLowerCase()} tools next.</p><button onClick={() => setTab("Create")}>Back to Create</button></section>}
      </section>
      {notice && <div className="toast" role="status"><span>✓</span>{notice}</div>}
    </main>
  );
}
