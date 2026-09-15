import Image from "next/image";
import { Quote } from "lucide-react";
import Counter from "./Counter";
import Reveal from "./Reveal";

const STATS = [
  { to: 3, suffix: "", label: "Standorte in Berlin" },
  { to: 50000, suffix: "+", label: "Döner pro Jahr" },
  { to: 12, suffix: "", label: "Jahre Handwerk" },
  { to: 100, suffix: "%", label: "Hausgemacht" },
];

export default function Founder() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-fire/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal y={40} className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/60">
            <Image
              src="/images/chef-1.jpg"
              alt="Mehmet Ateş, Gründer von Ateş Feuerdöner, am Grill"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="font-display text-3xl tracking-wide text-cream">Mehmet Ateş</div>
              <div className="text-sm font-semibold uppercase tracking-wide text-fire-light">
                Gründer & Grillmeister
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -top-6 flex h-24 w-24 items-center justify-center rounded-full bg-fire text-cream shadow-xl shadow-fire/40 sm:-right-8 sm:h-28 sm:w-28">
            <Quote className="h-10 w-10" fill="currentColor" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
              Über uns
            </span>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] text-cream sm:text-6xl">
              „ICH WOLLTE DEN DÖNER,
              <br />
              <span className="text-fire-light">DEN ES SO NICHT MEHR GAB.“</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
              „Als ich 2014 den ersten Ateş in Kreuzberg eröffnet habe, gab es überall
              nur noch Fertigspieße. Ich habe meinem Vater in Gaziantep zugeschaut, wie
              er das Fleisch über Holzkohle gegrillt hat – diesen Geschmack wollte ich
              nach Berlin bringen. Heute machen wir das immer noch genau so: Feuer,
              frisches Fleisch, ehrliches Handwerk. Alles andere wäre kein Ateş.“
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl text-fire-light sm:text-5xl">
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-cream/60 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
