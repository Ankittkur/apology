 "use client";

import { useEffect, useState } from "react";

const pages = [
  {
    kicker: "A LITTLE SOMETHING FOR YOU",
    title: "Hey Gunjan…",
    body: (
      <>
        Some people become special without even trying.
        <br /><br />
        You are one of those people.
      </>
    ),
    button: "There’s more →",
  },
  {
    kicker: "JUST A FEW THINGS",
    title: "What I admire about you",
    body: (
      <>
        Your smile. Your kindness. Your strength. The way you carry yourself.
        <br /><br />
        There is something genuinely beautiful about the person you are —
        something that makes you easy to admire and impossible to forget.
      </>
    ),
    button: "Keep going →",
  },
  {
    kicker: "THE LITTLE THINGS",
    title: "You make moments better",
    body: (
      <>
        Sometimes it is not about doing something extraordinary.
        <br /><br />
        Sometimes, simply having you around makes an ordinary moment feel a
        little more special.
      </>
    ),
    button: "One more →",
  },
  {
    kicker: "FROM THE HEART",
    title: "You are genuinely special.",
    body: (
      <>
        I hope you always remember how wonderful you are.
        <br /><br />
        You deserve all the beautiful things life has to offer, and I hope
        life keeps giving you reasons to smile.
      </>
    ),
    button: "Final note →",
  },
  {
    kicker: "JUST FOR YOU",
    title: "Gunjan 🤍",
    body: (
      <>
        You are kind.
        <br />
        You are beautiful.
        <br />
        You are strong.
        <br /><br />
        And most importantly, you are wonderfully, unapologetically you.
        <br /><br />
        I’m genuinely grateful that our paths crossed.
      </>
    ),
    button: null,
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [opening, setOpening] = useState(true);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    setSparkles(
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 4,
      }))
    );
  }, []);

  const next = () => {
    setOpening(false);
    setCurrent((v) => Math.min(v + 1, pages.length - 1));
  };

  const reset = () => {
    setCurrent(0);
    setOpening(true);
  };

  if (opening) {
    return (
      <main className="scene">
        {sparkles.map((s) => (
          <span
            key={s.id}
            className="sparkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
        <div className="glow glowOne" />
        <div className="glow glowTwo" />

        <section className="opening">
          <div className="tiny-heart">♡</div>
          <p className="kicker">A LITTLE SOMETHING</p>
          <h1>For <em>Gunjan</em></h1>
          <p className="intro">
            Because some people deserve to be reminded<br />
            just how wonderful they are.
          </p>
          <button className="primary" onClick={next}>
            Open this little page <span>→</span>
          </button>
          <p className="hint">Made with a little warmth 🤍</p>
        </section>
      </main>
    );
  }

  const item = pages[current];

  return (
    <main className="scene">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
      <div className="glow glowOne" />
      <div className="glow glowTwo" />

      <section className="card">
        <div className="topline">
          <span>♡</span>
          <span>{String(current + 1).padStart(2, "0")} / 05</span>
        </div>

        <div className="content" key={current}>
          <p className="kicker">{item.kicker}</p>
          <h2>{item.title}</h2>
          <div className="body">{item.body}</div>

          {item.button ? (
            <button className="primary" onClick={next}>
              {item.button}
            </button>
          ) : (
            <button className="secondary" onClick={reset}>
              Read it again ↺
            </button>
          )}
        </div>

        <div className="progress">
          {pages.map((_, i) => (
            <span key={i} className={i === current ? "active" : ""} />
          ))}
        </div>
      </section>

      <p className="footer">A small page for someone genuinely special.</p>
    </main>
  );
}
