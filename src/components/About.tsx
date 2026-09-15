import Image from "next/image";
import { Flame } from "lucide-react";
import Reveal from "./Reveal";

const STATS = [
  { value: "2014", label: "Gegründet" },
  { value: "50.000+", label: "Döner pro Jahr" },
  { value: "100%", label: "Hausgemacht" },
];

export default function About() {
  return (
    <section id="ueber-uns" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal y={40} className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-black/50">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/reel-flatbread-poster.jpg"
            >
              <source src="/videos/reel-flatbread.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute -bottom-8 -right-4 aspect-[4/5] w-40 overflow-hidden rounded-2xl border-4 border-charcoal shadow-2xl sm:-right-10 sm:w-56">
            <Image
              src="/images/bread-1.jpg"
              alt="Frisches hausgemachtes Fladenbrot"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-4 -top-6 flex items-center gap-2 rounded-2xl bg-fire px-5 py-3 shadow-xl shadow-fire/40 sm:-left-8">
            <Flame className="h-5 w-5 text-cream" />
            <span className="font-display text-lg tracking-wide text-cream">
              Seit 2014 in Berlin
            </span>
          </div>
        </Reveal>

        <Reveal y={40} delay={0.1} className="order-1 lg:order-2">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
            Unsere Geschichte
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] text-cream sm:text-6xl">
            HANDWERK, DAS MAN
            <span className="text-fire-light"> SCHMECKT</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/75 sm:text-lg">
            Alles begann 2014 mit einem kleinen Feuergrill und dem Traum
            unseres Gründers Mehmet: Döner so servieren, wie er in Anatolien
            gegessen wird &mdash; ehrlich, frisch und mit viel Liebe zum
            Detail. Heute grillen wir unser Fleisch weiterhin täglich frisch
            über offener Flamme, backen unser Fladenbrot selbst und rühren
            jede Sauce von Hand an.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream/75 sm:text-lg">
            Keine Kompromisse, keine Fertigprodukte &mdash; nur echtes
            Handwerk, das man in jedem Bissen schmeckt.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-fire-light sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-cream/60 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
