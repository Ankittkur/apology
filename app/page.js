"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    over: "SOME PEOPLE",
    title: "Are simply unforgettable.",
    text: "And somehow, you became one of those people without even trying.",
  },
  {
    over: "GUNJAN",
    title: "There is something beautiful about you.",
    text: "Not just the smile or the way you look, but the person you are when nobody is trying to define you.",
  },
  {
    over: "THE LITTLE THINGS",
    title: "They make you special.",
    text: "Your kindness. Your energy. Your way of making ordinary moments feel a little less ordinary.",
  },
  {
    over: "A SMALL REMINDER",
    title: "You are genuinely amazing.",
    text: "I hope you never underestimate the warmth, beauty and goodness you bring into the lives of the people around you.",
  },
  {
    over: "AND FINALLY",
    title: "Thank you, Gunjan. 🤍",
    text: "For simply being you. I'm genuinely grateful that our paths crossed.",
  },
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [slide, setSlide] = useState(0);
  const [music, setMusic] = useState(false);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 8,
      }))
    );
  }, []);

  // Start music after user interaction
  const startExperience = () => {
    const audio = document.getElementById("bgMusic");

    if (audio) {
      audio.volume = 0.35;

      audio
        .play()
        .then(() => {
          setMusic(true);
        })
        .catch(() => {
          setMusic(false);
        });
    }

    setStarted(true);
  };

  // Toggle music
  const toggleMusic = () => {
    const audio = document.getElementById("bgMusic");

    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setMusic(true);
    } else {
      audio.pause();
      setMusic(false);
    }
  };

  const nextSlide = () => {
    setSlide((current) => Math.min(current + 1, slides.length - 1));
  };

  const previousSlide = () => {
    setSlide((current) => Math.max(current - 1, 0));
  };

  const restart = () => {
    setSlide(0);
  };

  /*
   * Opening screen
   */
  if (!started) {
    return (
      <main className="hero">
        {/* Background Music */}
        <audio id="bgMusic" loop preload="auto">
          <source src="/music.mp3" type="audio/mpeg" />
        </audio>

        <div className="grain" />

        <div className="petals">
          {petals.map((petal) => (
            <i
              key={petal.id}
              style={{
                left: `${petal.left}%`,
                animationDelay: `${petal.delay}s`,
                animationDuration: `${petal.duration}s`,
              }}
            >
              ✦
            </i>
          ))}
        </div>

        <section className="opening">
          <div className="seal">♡</div>

          <p className="eyebrow">A PAGE MADE WITH WARMTH</p>

          <h1>
            For <em>Gunjan</em>
          </h1>

          <p className="lead">
            Some things are better written
            <br />
            than left unsaid.
          </p>

          <button onClick={startExperience}>
            Open the letter <span>↗</span>
          </button>

          <div className="small">
            A little page for someone special · ♫
          </div>
        </section>
      </main>
    );
  }

  const currentSlide = slides[slide];

  /*
   * Letter experience
   */
  return (
    <main className="hero inside">
      {/* Background Music */}
      <audio id="bgMusic" loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <div className="grain" />

      <div className="petals">
        {petals.map((petal) => (
          <i
            key={petal.id}
            style={{
              left: `${petal.left}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
            }}
          >
            ✦
          </i>
        ))}
      </div>

      {/* Header */}
      <header>
        <div className="brand">
          GUNJAN <span>♡</span>
        </div>

        <button className="music" onClick={toggleMusic}>
          {music ? "♫ ON" : "♫ OFF"}
        </button>
      </header>

      {/* Main Letter */}
      <section className="letter">
        <div className="number">
          {String(slide + 1).padStart(2, "0")} — 05
        </div>

        <div className="copy" key={slide}>
          <p className="eyebrow">{currentSlide.over}</p>

          <h2>{currentSlide.title}</h2>

          <p className="text">{currentSlide.text}</p>
        </div>

        {/* Controls */}
        <div className="controls">
          {slide > 0 && (
            <button className="arrow" onClick={previousSlide}>
              ←
            </button>
          )}

          {slide < slides.length - 1 ? (
            <button className="next" onClick={nextSlide}>
              Continue <span>→</span>
            </button>
          ) : (
            <button className="next" onClick={restart}>
              Read again <span>↺</span>
            </button>
          )}
        </div>

        {/* Progress */}
        <div className="line">
          <span
            style={{
              width: `${((slide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </section>

      <footer>made for someone one of a kind</footer>
    </main>
  );
}
