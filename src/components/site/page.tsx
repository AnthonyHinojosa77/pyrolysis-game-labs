import { useEffect, useState } from "react";
import { featured, games, stations, story, studio, team } from "@/data/studio";
import { PressDialog } from "@/components/site/dialogs";
import { Embers } from "@/components/site/embers";
import { IconGitHub, IconX, TeamSeal } from "@/components/site/mark";
import { Thermometer } from "@/components/site/thermometer";

const LIST_KEY = "pgl-email";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function Seam({ temp, kicker }: { temp: string; kicker: string }) {
  return (
    <div className="seam">
      <p className="seam-meta">
        <span className="seam-temp">{temp}</span>
        <span className="seam-kicker">{kicker}</span>
      </p>
      <div className="seam-line" aria-hidden="true" />
    </div>
  );
}

function Still({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="trailer-block">
      <div className="trailer">
        <img src={src} alt={alt} width={1280} height={720} />
      </div>
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  );
}

function Signup() {
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const existing = localStorage.getItem(LIST_KEY);
    if (existing) setSaved(existing);
  }, []);

  if (saved) {
    return (
      <div className="signup-done" role="status">
        <p className="lead tight">You’re on the list.</p>
        <p className="body tight">We’ll write to {saved} when there’s something worth firing.</p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            localStorage.removeItem(LIST_KEY);
            setSaved(null);
            setEmail("");
          }}
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <form
      className="signup"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        const next = email.trim();
        if (!next) {
          setError("Add an email and we’ll keep a seat by the kiln.");
          return;
        }
        if (!isEmail(next)) {
          setError("That doesn’t look like an email yet.");
          return;
        }
        localStorage.setItem(LIST_KEY, next);
        setError("");
        setSaved(next);
      }}
    >
      <label className="sr-only" htmlFor="list-email">
        Email address
      </label>
      <input
        id="list-email"
        className="field"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="you@studio.com"
        value={email}
        suppressHydrationWarning
        onChange={(event) => {
          setEmail(event.target.value);
          if (error) setError("");
        }}
      />
      <button type="submit" className="btn btn-primary">
        Join the list
      </button>
      <p className="form-note" role="status">
        {error || "Notes about firings, not a weekly newsletter."}
      </p>
    </form>
  );
}

const cosmic = games.find((game) => game.href);

const socials = [
  {
    id: "github",
    label: "GitHub",
    value: studio.handles.github,
    href: studio.links.github,
    icon: IconGitHub,
  },
  {
    id: "x",
    label: "X",
    value: studio.handles.x,
    href: studio.links.x,
    icon: IconX,
  },
] as const;

function Socials() {
  return (
    <ul className="socials">
      {socials.map((item) => (
        <li key={item.id}>
          <a className="social" href={item.href} target="_blank" rel="noreferrer">
            <span className="social-icon">
              <item.icon />
            </span>
            <span className="social-copy">
              <span className="social-label">{item.label}</span>
              <span className="social-value">{item.value}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function HomePage() {
  return (
    <div className="page">
      <div className="heat-field" aria-hidden="true" />
      <Embers />
      <a className="skip" href="#top">
        Skip to content
      </a>
      <header className="nav" id="site-nav">
        <div className="shell nav-bar">
          <a className="brand" href="#top" aria-label="Pyrolysis Game Labs">
            <img className="brand-mark" src="/brand/mark.png" alt="" width={457} height={713} />
            <img
              className="brand-word"
              src="/brand/wordmark.png"
              alt=""
              width={1134}
              height={266}
            />
          </a>
          <nav className="nav-links" aria-label="Page">
            {stations
              .filter((station) => station.nav)
              .map((station) => (
                <a key={station.id} href={`#${station.id}`} data-nav={station.id}>
                  {station.nav}
                </a>
              ))}
          </nav>
          <p className="nav-temp" aria-hidden="true">
            <span id="thermo-value">20</span>
            <span className="thermo-unit">°C</span>
          </p>
        </div>
      </header>
      <Thermometer />
      <main>
        <section className="hero section" id="top">
          <div className="shell hero-grid">
            <div>
              <p className="rise kicker">
                <span className="seam-temp">20°C</span>
                <span>At rest</span>
              </p>
              <div className="rise rise-2">
                <img
                  className="hero-lockup"
                  src="/brand/lockup.png"
                  alt="Pyrolysis Game Labs"
                  width={1134}
                  height={1019}
                />
              </div>
              <h1 className="rise rise-3 headline">
                <span className="block">Heat breaks everything down.</span>
                <span className="block">We build it back up as games.</span>
              </h1>
              <p className="rise rise-4 dek">
                An independent studio. We take a genre apart with heat and build a new machine
                from what remains.
              </p>
              <div className="rise rise-5 hero-actions">
                <a className="btn btn-primary" href="#games">
                  Our Games
                </a>
                {cosmic?.href ? (
                  <a className="btn btn-secondary" href={cosmic.href} target="_blank" rel="noreferrer">
                    Play Cosmic Conquest
                  </a>
                ) : null}
              </div>
              <p className="scroll-hint">Scroll raises the kiln from 20°C to 500°C.</p>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>Studio</dt>
                <dd>Anthony Hinojosa</dd>
              </div>
              <div>
                <dt>Games</dt>
                <dd>Two</dd>
              </div>
              <div>
                <dt>In the kiln</dt>
                <dd>Limerality</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section" id="featured">
          <div className="shell">
            <Seam temp="150°C" kicker="Featured" />
            <div className="section-head">
              <h2 className="section-title">{featured.title}</h2>
              <p className="meta-row">
                <span className="chip chip-dev">{featured.status}</span>
                <span>{featured.platforms.join(" · ")}</span>
              </p>
            </div>
            <p className="dek featured-pitch">{featured.pitch}</p>
            <figure className="key-figure">
              <img
                className="key-art"
                src={featured.keyArt}
                alt={featured.keyAlt}
                width={1280}
                height={720}
              />
              <figcaption className="caption">{featured.keyCaption}</figcaption>
            </figure>
            <div className="featured-split">
              {featured.still ? (
                <Still
                  src={featured.still}
                  alt={featured.stillAlt ?? featured.title}
                  caption={featured.stillCaption ?? featured.title}
                />
              ) : null}
              <div className="featured-copy">
                <p className="body">{featured.note}</p>
                <a className="btn btn-primary" href="#contact">
                  Get build notes
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="games">
          <div className="shell">
            <Seam temp="300°C" kicker="Catalog" />
            <h2 className="section-title">All games</h2>
            <ul className="game-grid">
              {games.map((game) => (
                <li key={game.id}>
                  <article className="game-card">
                    <div className="cover-frame">
                      <img src={game.cover} alt={game.alt} />
                    </div>
                    <div className="game-body">
                      <h3 className="game-title">
                        {game.href ? (
                          <a href={game.href} target="_blank" rel="noreferrer">
                            {game.title}
                          </a>
                        ) : (
                          <a href="#featured">{game.title}</a>
                        )}
                      </h3>
                      <p className="game-pitch">{game.pitch}</p>
                      <p className="meta-row">
                        <span
                          className={
                            game.status === "Playable" ? "chip chip-live" : "chip chip-dev"
                          }
                        >
                          {game.status}
                        </span>
                        <span>{game.platforms.join(" · ")}</span>
                      </p>
                      {game.href ? (
                        <a className="btn btn-primary" href={game.href} target="_blank" rel="noreferrer">
                          Play
                        </a>
                      ) : null}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="studio">
          <div className="shell">
            <Seam temp="400°C" kicker="Studio" />
            <h2 className="section-title">The workshop</h2>
            <div className="story">
              <p className="lead">{story[0]}</p>
              <p className="body">{story[1]}</p>
              <p className="body">{story[2]}</p>
            </div>
            <ul className="team-grid">
              {team.map((person) => (
                <li key={person.id}>
                  <article className="team-card">
                    <div className="seal">
                      <TeamSeal id={person.id} />
                    </div>
                    <div>
                      <h3 className="person-name">{person.name}</h3>
                      <p className="person-role">{person.role}</p>
                      <p className="person-line">{person.line}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="shell">
            <Seam temp="500°C" kicker="Contact" />
            <h2 className="section-title">Write to the kiln</h2>
            <div className="contact-grid">
              <div>
                <h3 className="contact-label">Mailing list</h3>
                <Signup />
              </div>
              <div className="contact-side">
                <h3 className="contact-label">Studio</h3>
                <p className="body tight">
                  Press and anything that needs a person rather than a list. The studio lives on GitHub.
                </p>
                <a className="email-link" href={studio.github} target="_blank" rel="noreferrer">
                  {studio.githubLabel}
                </a>
                <div className="contact-actions">
                  <PressDialog
                    trigger={
                      <button type="button" className="btn btn-secondary">
                        Press kit
                      </button>
                    }
                  />
                  {cosmic?.href ? (
                    <a className="btn btn-secondary" href={cosmic.href} target="_blank" rel="noreferrer">
                      Play Cosmic Conquest
                    </a>
                  ) : null}
                </div>
                <Socials />
              </div>
            </div>
            <footer className="colophon">
              <div className="seam-line" aria-hidden="true" />
              <p>Pyrolysis Game Labs · Heat in. Games out. · © 2026</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
