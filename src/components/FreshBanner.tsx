"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf } from "lucide-react";
import SplitText from "./SplitText";

export default function FreshBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <motion.video
        style={{ y }}
        className="absolute inset-0 h-[125%] w-full object-cover"
        src="/videos/clip-flambe.mp4"
        poster="/images/clip-flambe-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal-light" />

      <div className="relative flex h-full items-center">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-green-300">
            <Leaf className="h-3.5 w-3.5" /> Ohne Fertigprodukte
          </span>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] text-cream sm:text-7xl md:text-8xl">
            <SplitText text="KNACKIG UND JEDEN TAG" />
            <br />
            <span className="text-fire-light">
              <SplitText text="FRISCH ZUBEREITET." delay={0.3} />
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-cream/80 sm:text-lg">
            Was du bei uns isst, wurde heute gemacht. Nicht gestern. Nicht in einer
            Fabrik. Sondern hier &mdash; von Menschen, die Döner lieben.
          </p>
        </div>
      </div>
    </section>
  );
}
