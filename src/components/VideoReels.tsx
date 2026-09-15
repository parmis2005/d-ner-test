"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Play, Volume2, VolumeX } from "lucide-react";
import Reveal from "./Reveal";

const REELS = [
  { src: "/videos/reel-slicing.mp4", poster: "/images/reel-slicing-poster.jpg", title: "Frisch vom Spieß", likes: "12,4k" },
  { src: "/videos/clip-chefgrill.mp4", poster: "/images/clip-chefgrill-poster.jpg", title: "Feuer in der Küche", likes: "9,8k" },
  { src: "/videos/reel-flatbread.mp4", poster: "/images/reel-flatbread-poster.jpg", title: "Lahmacun-Roll", likes: "15,1k" },
  { src: "/videos/clip-dough.mp4", poster: "/images/clip-dough-poster.jpg", title: "Brot wie in Anatolien", likes: "7,3k" },
  { src: "/videos/reel-fries.mp4", poster: "/images/reel-fries-poster.jpg", title: "Feuer-Pommes", likes: "11,0k" },
  { src: "/videos/clip-oven.mp4", poster: "/images/clip-oven-poster.jpg", title: "Aus dem Steinofen", likes: "8,6k" },
];

function ReelCard({ reel }: { reel: (typeof REELS)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    videoRef.current?.play().catch(() => {});
    setPlaying(true);
  };
  const pause = () => {
    videoRef.current?.pause();
    setPlaying(false);
  };

  return (
    <div
      className="group relative aspect-[9/16] w-[240px] shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-charcoal-light shadow-xl shadow-black/40 sm:w-[280px]"
      onMouseEnter={play}
      onMouseLeave={pause}
      onClick={() => (videoRef.current?.paused ? play() : pause())}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={reel.src}
        poster={reel.poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

      {!playing && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-fire/90 shadow-lg shadow-fire/40 transition-transform group-hover:scale-110">
            <Play className="h-6 w-6 translate-x-0.5 text-cream" fill="currentColor" />
          </span>
        </span>
      )}

      <div className="absolute left-3 top-3 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-fire text-[10px] font-black text-cream">A</span>
        <span className="text-xs font-semibold text-cream drop-shadow">ates.feuerdoener</span>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          if (!videoRef.current) return;
          videoRef.current.muted = !videoRef.current.muted;
          setMuted(videoRef.current.muted);
        }}
        aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-cream backdrop-blur-sm transition-colors hover:bg-black/70"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <span className="font-display text-xl tracking-wide text-cream drop-shadow-md">{reel.title}</span>
        <span className="flex items-center gap-1 text-xs font-semibold text-cream/90">
          <Heart className="h-4 w-4 fill-fire-light text-fire-light" /> {reel.likes}
        </span>
      </div>
    </div>
  );
}

export default function VideoReels() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current?.firstElementChild as HTMLElement | null;
      if (track && trackRef.current) {
        setDragWidth(Math.max(track.scrollWidth - trackRef.current.clientWidth, 0));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="reels" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
              Folge uns auf Social Media
            </span>
            <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
              SIEH UNS BEIM <span className="text-fire-light">GRILLEN ZU</span>
            </h2>
            <p className="mt-4 text-cream/70">
              Einblicke hinter die Kulissen, neue Aktionen und viel Feuer. Ziehen,
              antippen, hören &mdash; jedes Reel ist echt aus unserer Küche.
            </p>
          </div>
          <a
            href="#"
            className="group flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-all hover:border-fire hover:bg-fire"
          >
            Jetzt folgen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      <div className="mt-14 cursor-grab active:cursor-grabbing" ref={trackRef}>
        <motion.div
          drag="x"
          dragConstraints={{ left: -dragWidth, right: 0 }}
          dragElastic={0.08}
          className="flex gap-5 px-6 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {REELS.map((reel, i) => (
            <motion.div
              key={reel.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
            >
              <ReelCard reel={reel} />
            </motion.div>
          ))}
          <div className="w-2 shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
