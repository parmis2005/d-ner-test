"use client";

import { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import Reveal from "./Reveal";

const REELS = [
  {
    src: "/videos/reel-slicing.mp4",
    poster: "/images/reel-slicing-poster.jpg",
    title: "Frisch geschnitten",
    tall: true,
  },
  {
    src: "/videos/reel-prep.mp4",
    poster: "/images/reel-prep-poster.jpg",
    title: "Handgemacht",
    tall: false,
  },
  {
    src: "/videos/reel-flatbread.mp4",
    poster: "/images/reel-flatbread-poster.jpg",
    title: "Ofenfrisches Fladenbrot",
    tall: true,
  },
  {
    src: "/videos/reel-fries.mp4",
    poster: "/images/reel-fries-poster.jpg",
    title: "Knusprig frittiert",
    tall: false,
  },
];

function ReelCard({
  reel,
  index,
}: {
  reel: (typeof REELS)[number];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <Reveal
      delay={index * 0.08}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal-light shadow-lg shadow-black/30 ${
        reel.tall ? "row-span-2 aspect-[9/16]" : "aspect-video sm:aspect-[9/10]"
      }`}
    >
      <div
        className="group relative h-full w-full cursor-pointer"
        onMouseEnter={() => {
          videoRef.current?.play();
          setPlaying(true);
        }}
        onMouseLeave={() => {
          videoRef.current?.pause();
          setPlaying(false);
        }}
        onClick={() => {
          if (!videoRef.current) return;
          if (videoRef.current.paused) {
            videoRef.current.play();
            setPlaying(true);
          } else {
            videoRef.current.pause();
            setPlaying(false);
          }
        }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={reel.src}
          poster={reel.poster}
          muted={muted}
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {!playing && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-fire/90 shadow-lg shadow-fire/40 transition-transform group-hover:scale-110">
              <Play className="h-5 w-5 translate-x-0.5 text-cream" fill="currentColor" />
            </span>
          </span>
        )}

        <button
          onClick={toggleSound}
          aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-cream backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>

        <span className="absolute bottom-3 left-3 right-3 font-display text-lg tracking-wide text-cream drop-shadow-md">
          {reel.title}
        </span>
      </div>
    </Reveal>
  );
}

export default function VideoReels() {
  return (
    <section className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
            Frisch von der Flamme
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            SIEH UNS BEIM <span className="text-fire-light">GRILLEN ZU</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Ein Blick hinter die Kulissen &mdash; vom Fladenbrot aus dem Ofen
            bis zum letzten Schnitt. Video antippen bzw. mit der Maus
            berühren, um es abzuspielen.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {REELS.map((reel, i) => (
            <ReelCard key={reel.src} reel={reel} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
