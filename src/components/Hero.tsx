"use client";

import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full border border-ember/40 bg-black/30 px-4 py-1.5 backdrop-blur-sm">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-ember text-ember" />
            ))}
          </div>
          <span className="text-xs font-semibold tracking-wide text-cream/90">
            4.9 · über 1.200 Bewertungen
          </span>
        </div>

        <h1 className="font-display text-6xl leading-[0.95] text-cream sm:text-8xl md:text-9xl">
          FRISCH VOM
          <br />
          <span className="text-fire-light animate-flicker">OFFENEN FEUER</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-cream/80 sm:text-lg">
          Handgemachter Döner, täglich frisches Fleisch und original
          türkisches Fladenbrot &mdash; direkt aus dem Herzen von Berlin-Kreuzberg.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="#bestellen"
            className="rounded-full bg-fire px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-xl shadow-fire/40 transition-all hover:-translate-y-0.5 hover:bg-fire-light"
          >
            Jetzt online bestellen
          </a>
          <a
            href="#speisekarte"
            className="rounded-full border border-cream/40 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15"
          >
            Speisekarte ansehen
          </a>
        </div>
      </div>

      <a
        href="#ueber-uns"
        aria-label="Nach unten scrollen"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70 transition-colors hover:text-fire-light"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
