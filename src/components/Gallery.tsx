"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Reveal from "./Reveal";

const IMAGES = [
  { src: "/images/reel-slicing-poster.jpg", alt: "Frisch vom Spieß geschnitten", span: "row-span-2" },
  { src: "/images/doner-5.jpg", alt: "Dürüm mit Pommes und Sauce", span: "" },
  { src: "/images/clip-flambe-poster.jpg", alt: "Unsere Küche in Aktion", span: "" },
  { src: "/images/clip-charcoal-poster.jpg", alt: "Fleisch über glühender Holzkohle", span: "row-span-2" },
  { src: "/images/ingredients-1.jpg", alt: "Frisches Gemüse als Zutaten", span: "" },
  { src: "/images/clip-chefgrill-poster.jpg", alt: "Zubereitung in der offenen Küche", span: "" },
  { src: "/images/bread-2.jpg", alt: "Hausgemachtes Fladenbrot", span: "" },
  { src: "/images/hero-poster.jpg", alt: "Unser Döner-Spieß am Feuer", span: "" },
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % IMAGES.length));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index]);

  return (
    <section id="galerie" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">Galerie</span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            EIN BLICK IN UNSERE <span className="text-fire-light">KÜCHE</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.08}
              y={20}
              className={`group relative cursor-zoom-in overflow-hidden rounded-2xl ${img.span}`}
            >
              <button
                onClick={() => setIndex(i)}
                aria-label={`${img.alt} vergrößern`}
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-fire text-cream opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
                <span className="absolute bottom-3 left-3 text-left text-xs font-semibold text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setIndex(null)}
          >
            <button
              aria-label="Schließen"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-fire"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              aria-label="Vorheriges Bild"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length));
              }}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-fire"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Nächstes Bild"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i === null ? i : (i + 1) % IMAGES.length));
              }}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream hover:bg-fire"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={IMAGES[index].src}
                alt={IMAGES[index].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-sm text-cream/80">
                {IMAGES[index].alt} &middot; {index + 1} / {IMAGES.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
