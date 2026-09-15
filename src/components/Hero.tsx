"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Flame, Star } from "lucide-react";
import Embers from "./Embers";

const WORDS_TOP = ["FRISCH", "VOM"];
const WORDS_BOTTOM = ["OFFENEN", "FEUER"];

function Word({ word, index }: { word: string; index: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom pt-[0.14em] -mt-[0.14em]">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>
      &nbsp;
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex h-[100svh] min-h-[660px] w-full items-center justify-center overflow-hidden"
    >
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale: videoScale }}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      <Embers />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-ember/40 bg-black/30 px-4 py-1.5 backdrop-blur-sm"
        >
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-ember text-ember" />
            ))}
          </div>
          <span className="text-xs font-semibold tracking-wide text-cream/90">
            4.9 · über 1.200 Bewertungen
          </span>
        </motion.div>

        <h1 className="font-display text-6xl leading-[0.95] text-cream sm:text-8xl md:text-9xl">
          <span className="block">
            {WORDS_TOP.map((w, i) => (
              <Word key={w} word={w} index={i} />
            ))}
          </span>
          <span className="block text-fire-light animate-flicker">
            {WORDS_BOTTOM.map((w, i) => (
              <Word key={w} word={w} index={i + 2} />
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-6 max-w-xl text-base text-cream/80 sm:text-lg"
        >
          Handgemachter Döner, täglich frisches Fleisch und original türkisches
          Fladenbrot &mdash; an drei Standorten in Berlin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#bestellen"
            className="group relative overflow-hidden rounded-full bg-fire px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-xl shadow-fire/40 transition-all hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              <Flame className="h-4 w-4" /> Jetzt online bestellen
            </span>
          </a>
          <a
            href="#speisekarte"
            className="rounded-full border border-cream/40 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15"
          >
            Speisekarte ansehen
          </a>
        </motion.div>
      </motion.div>

      <a
        href="#showcase"
        aria-label="Nach unten scrollen"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70 transition-colors hover:text-fire-light"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
