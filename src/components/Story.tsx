"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Leaf, Scissors, Wheat } from "lucide-react";

const STEPS = [
  {
    icon: Wheat,
    title: "Das Brot",
    headline: "JEDEN MORGEN AUS DEM STEINOFEN",
    text: "Unser Fladenbrot wird jeden Morgen um 6 Uhr von Hand geformt und im Steinofen gebacken. Außen knusprig, innen luftig – so wie in Anatolien.",
    video: "/videos/clip-dough.mp4",
    poster: "/images/clip-dough-poster.jpg",
  },
  {
    icon: Flame,
    title: "Das Feuer",
    headline: "ÜBER ECHTER HOLZKOHLE GEGRILLT",
    text: "Kein Elektrogrill. Unser mariniertes Kalbfleisch bekommt seinen Geschmack über glühender Holzkohle – rauchig, saftig, unverwechselbar.",
    video: "/videos/clip-charcoal.mp4",
    poster: "/images/clip-charcoal-poster.jpg",
  },
  {
    icon: Scissors,
    title: "Der Schnitt",
    headline: "HAUCHDÜNN, DIREKT VOM SPIESS",
    text: "Erst wenn du bestellst, schneiden wir das Fleisch frisch vom Spieß. Jede Scheibe hat die perfekte Röstung – nie vorgeschnitten, nie aufgewärmt.",
    video: "/videos/reel-slicing.mp4",
    poster: "/images/reel-slicing-poster.jpg",
  },
  {
    icon: Leaf,
    title: "Die Frische",
    headline: "GEMÜSE VOM MARKT, TÄGLICH GESCHNITTEN",
    text: "Tomaten, Rotkohl, Zwiebeln und Salat kommen jeden Morgen frisch vom Großmarkt und werden bei uns in der Küche geschnitten – nie aus der Tüte.",
    video: "/videos/clip-tomato.mp4",
    poster: "/images/clip-tomato-poster.jpg",
  },
];

export default function Story() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const step = STEPS[active];

  return (
    <section id="story" className="relative bg-charcoal-light">
      <div className="mx-auto max-w-7xl px-6 pt-24 text-center sm:px-8 sm:pt-32">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
          Handwerk in vier Schritten
        </span>
        <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
          SO ENTSTEHT <span className="text-fire-light">DEIN DÖNER</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="sticky top-20 z-10 h-[48vh] lg:top-24 lg:h-[calc(100vh-8rem)]">
          <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
            <AnimatePresence mode="sync">
              <motion.video
                key={step.video}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
                src={step.video}
                poster={step.poster}
                autoPlay
                muted
                loop
                playsInline
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-2">
                {STEPS.map((s, i) => (
                  <span
                    key={s.title}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                      i <= active ? "bg-fire-light" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-fire text-cream shadow-lg shadow-fire/40">
                  <step.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-fire-light">
                    Schritt {active + 1} / {STEPS.length}
                  </div>
                  <div className="font-display text-2xl tracking-wide text-cream">{step.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[28vh] py-[6vh] lg:gap-[40vh] lg:py-[30vh]">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="transition-opacity duration-500"
              style={{ opacity: active === i ? 1 : 0.35 }}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-6xl text-fire/40">0{i + 1}</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="mt-4 font-display text-4xl leading-[0.98] text-cream sm:text-5xl">
                {s.headline}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
