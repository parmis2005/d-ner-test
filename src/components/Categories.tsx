"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Beef, CupSoda, Drumstick, Flame, Pizza, Salad, Sandwich, Wheat } from "lucide-react";
import Reveal from "./Reveal";

const CATEGORIES = [
  { icon: Beef, label: "Döner", sub: "Kalb & Hähnchen", image: "/images/doner-1.jpg" },
  { icon: Sandwich, label: "Dürüm", sub: "Im dünnen Wrap", image: "/images/doner-5.jpg" },
  { icon: Pizza, label: "Lahmacun", sub: "Aus dem Steinofen", image: "/images/clip-oven-poster.jpg" },
  { icon: Wheat, label: "Pide", sub: "Ofenfrisch", image: "/images/bread-2.jpg" },
  { icon: Drumstick, label: "Teller", sub: "Mit Reis & Salat", image: "/images/doner-6.jpg" },
  { icon: Flame, label: "Feuer-Pommes", sub: "Mit Feta & Chili", image: "/images/reel-fries-poster.jpg" },
  { icon: Salad, label: "Salate", sub: "Frisch vom Markt", image: "/images/ingredients-1.jpg" },
  { icon: CupSoda, label: "Ayran & Tee", sub: "Hausgemacht", image: "/images/tea.jpg" },
];

export default function Categories() {
  return (
    <section className="relative bg-charcoal-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
            Entdecke unsere Produkte
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            UNSERE <span className="text-fire-light">KATEGORIEN</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.label}
              href="#speisekarte"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-charcoal"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20 transition-opacity duration-500 group-hover:from-charcoal group-hover:via-charcoal/40 group-hover:to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-fire/15 text-fire-light ring-1 ring-fire/30 transition-all duration-500 group-hover:bg-fire group-hover:text-cream group-hover:shadow-lg group-hover:shadow-fire/40">
                  <cat.icon className="h-7 w-7" />
                </span>
                <div>
                  <div className="font-display text-2xl tracking-wide text-cream">{cat.label}</div>
                  <div className="text-xs font-medium uppercase tracking-wide text-cream/60">{cat.sub}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
