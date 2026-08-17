"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    over: "HEY GUNJAN",
    title: "This little page is for you.",
    text: "There are some people who become special without even realizing it. You are one of those people.",
  },
  {
    over: "THE FIRST THING",
    title: "You have a beautiful presence.",
    text: "There is something about you that is difficult to explain. You can walk into an ordinary moment and somehow make it feel a little more memorable.",
  },
  {
    over: "YOUR SMILE",
    title: "It genuinely stands out.",
    text: "Your smile has this simple kind of warmth to it. The kind that can make a moment feel lighter without you even having to say anything.",
  },
  {
    over: "THE WAY YOU ARE",
    title: "You have your own kind of charm.",
    text: "You don't need to try too hard to stand out. There is something naturally special about the way you carry yourself and the person you are.",
  },
  {
    over: "YOUR KINDNESS",
    title: "It says a lot about you.",
    text: "The little ways you care, the way you treat people, and the warmth you carry with you say more about you than you probably realize.",
  },
  {
    over: "THE LITTLE THINGS",
    title: "They are what make you memorable.",
    text: "Sometimes it is the smallest things that stay in someone's mind—the way you laugh, the way you talk, the expressions you make, or just the little moments that happen around you.",
  },
  {
    over: "YOUR STRENGTH",
    title: "There is more to you than meets the eye.",
    text: "You have a strength in you that deserves to be appreciated. The way you handle things and continue being yourself is something genuinely admirable.",
  },
  {
    over: "YOUR ENERGY",
    title: "You make ordinary moments feel different.",
    text: "Some people bring noise wherever they go. You have something better—you bring a feeling. And sometimes that feeling is enough to make a normal day a little brighter.",
  },
  {
    over: "WHAT MAKES YOU DIFFERENT",
    title: "You are simply you.",
    text: "And honestly, that is one of the best things about you. You don't have to become someone else to be special. The person you already are is more than enough.",
  },
  {
    over: "WHAT I ADMIRE",
    title: "There is a lot to appreciate about you.",
    text: "Your beauty is only one small part of what makes you wonderful. Your personality, your heart, your little habits, your strength and your individuality are what make you truly memorable.",
  },
  {
    over: "A LITTLE REMINDER",
    title: "Never forget how special you are.",
    text: "I hope life always gives you reasons to smile, people who appreciate you, moments that make you happy, and opportunities to become everything you want to be.",
  },
  {
    over: "AND FINALLY",
    title: "Thank you, Gunjan. 🤍",
    text: "Thank you for simply being you. I'm genuinely grateful that our paths crossed, and I hope you always keep that beautiful part of yourself that makes you uniquely Gunjan.",
  },
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [slide, setSlide] = useState(0);
  const [music, setMusic] = useState(false);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 8,
      }))
    );
  }, []);

  // Start the experience + music
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

  // Music ON / OFF
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
    setSlide((current) =>
      Math.min(current + 1, slides.length - 1)
    );
  };

  const previousSlide = () => {
    setSlide((current) => Math.max(current - 1, 0));
  };

  const restart = () => {
    setSlide(0);
  };

  /*
   * OPENING SCREEN
   */

  if (!started) {
    return (
      <main className="hero">

        {/* Music */}
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

          <div className="seal">
            ♡
          </div>

          <p className="eyebrow">
            A PAGE MADE WITH WARMTH
          </p>

          <h1>
            For <em>Gunjan</em>
          </h1>

          <p className="lead">
            Some things are better written
            <br />
            than left unsaid.
          </p>

          <button onClick={startExperience}>
            Open the Khat <span>↗</span>
          </button>

          <div className="small">
            A little page for someone special · ♫
          </div>

        </section>
      </main>
    );
  }

  /*
   * MAIN EXPERIENCE
   */

  const currentSlide = slides[slide];

  return (
    <main className="hero inside">

      {/* Music */}
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

        <button
          className="music"
          onClick={toggleMusic}
        >
          {music ? "♫ ON" : "♫ OFF"}
        </button>

      </header>

      {/* Letter */}

      <section className="letter">

        <div className="number">
          {String(slide + 1).padStart(2, "0")} —{" "}
          {String(slides.length).padStart(2, "0")}
        </div>

        <div
          className="copy"
          key={slide}
        >

          <p className="eyebrow">
            {currentSlide.over}
          </p>

          <h2>
            {currentSlide.title}
          </h2>

          <p className="text">
            {currentSlide.text}
          </p>

        </div>

        {/* Navigation */}

        <div className="controls">

          {slide > 0 && (
            <button
              className="arrow"
              onClick={previousSlide}
            >
              ←
            </button>
          )}

          {slide < slides.length - 1 ? (

            <button
              className="next"
              onClick={nextSlide}
            >
              Continue <span>→</span>
            </button>

          ) : (

            <button
              className="next"
              onClick={restart}
            >
              Read again <span>↺</span>
            </button>

          )}

        </div>

        {/* Progress */}

        <div className="line">

          <span
            style={{
              width: `${
                ((slide + 1) / slides.length) * 100
              }%`,
            }}
          />

        </div>

      </section>

      <footer>
        made for someone one of a kind
      </footer>

    </main>
  );
}
