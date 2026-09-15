"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Beef, Droplets, Flame, Leaf, Wheat } from "lucide-react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

const CHIPS = [
  { icon: Beef, label: "Kalbfleisch vom Feuer", pos: "-left-4 top-8 sm:-left-10", anim: "animate-float" },
  { icon: Wheat, label: "Hausgebackenes Fladenbrot", pos: "-right-2 top-1/4 sm:-right-12", anim: "animate-float-delay" },
  { icon: Leaf, label: "Täglich frisches Gemüse", pos: "-left-2 bottom-1/4 sm:-left-14", anim: "animate-float-delay-2" },
  { icon: Droplets, label: "3 hausgemachte Saucen", pos: "-right-4 bottom-6 sm:-right-8", anim: "animate-float" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-10 select-none overflow-hidden">
        <div className="flex w-max animate-marquee-slow gap-10 whitespace-nowrap font-display text-[9rem] leading-none text-outline sm:text-[14rem]">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>DÖNER</span><span>•</span><span>DÜRÜM</span><span>•</span><span>LAHMACUN</span><span>•</span><span>FEUER</span><span>•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
            Unser Signature Döner
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] text-cream sm:text-6xl lg:text-7xl">
            <SplitText text="GÖNN DIR DEN DÖNER" />
            <br />
            <SplitText text="VON UND FÜR" delay={0.2} />{" "}
            <span className="text-fire-light">
              <SplitText text="CHAMPIONS." delay={0.35} />
            </span>
          </h2>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
              Zartes Kalbfleisch, das jeden Morgen frisch mariniert und über offener
              Flamme gegrillt wird. Dazu unser Fladenbrot aus dem Steinofen, knackiges
              Gemüse vom Markt und drei Saucen, die wir täglich von Hand anrühren.
              Kein Fertigspieß. Keine Kompromisse.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#speisekarte"
                className="rounded-full bg-fire px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream shadow-lg shadow-fire/30 transition-all hover:-translate-y-0.5 hover:bg-fire-light"
              >
                Zur Speisekarte
              </a>
              <a
                href="#story"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-all hover:border-fire/60 hover:bg-white/5"
              >
                So entsteht er
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square overflow-hidden rounded-full border-8 border-charcoal-light shadow-[0_0_80px_rgba(234,59,35,0.35)]"
          >
            <Image
              src="/images/doner-1.jpg"
              alt="Ateş Signature Döner"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="absolute -inset-6 -z-10 rounded-full border border-dashed border-fire/30 animate-spin-slow" />

          {CHIPS.map((chip, i) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5, type: "spring" }}
              className={`absolute ${chip.pos} ${chip.anim} flex items-center gap-2 rounded-full border border-white/10 bg-charcoal-light/90 px-4 py-2 text-xs font-semibold text-cream shadow-xl backdrop-blur-md`}
            >
              <chip.icon className="h-4 w-4 text-fire-light" />
              {chip.label}
            </motion.div>
          ))}

          <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fire/10 blur-3xl" />
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-fire px-5 py-3 shadow-xl shadow-fire/40">
            <Flame className="h-5 w-5 text-cream" />
            <span className="font-display text-lg tracking-wide text-cream">Ab 6,50 €</span>
          </div>
        </div>
      </div>
    </section>
  );
}
