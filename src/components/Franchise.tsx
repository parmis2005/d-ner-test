import { ArrowRight, BadgeCheck, HandCoins, Users } from "lucide-react";
import Counter from "./Counter";
import Reveal from "./Reveal";

const BENEFITS = [
  { icon: BadgeCheck, text: "Erprobtes Konzept mit über 12 Jahren Erfahrung" },
  { icon: Users, text: "Schulung deines Teams in unserer Feuer-Akademie" },
  { icon: HandCoins, text: "Faire Konditionen, transparente Zahlen" },
];

export default function Franchise() {
  return (
    <section id="franchise" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal y={40} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/60">
            <video
              className="h-full w-full object-cover"
              src="/videos/clip-chefgrill.mp4"
              poster="/images/clip-chefgrill-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-charcoal/70 backdrop-blur-md">
              {[
                { to: 12, suffix: "+", label: "Jahre" },
                { to: 3, suffix: "", label: "Filialen" },
                { to: 98, suffix: "%", label: "Zufriedene Gäste" },
              ].map((s) => (
                <div key={s.label} className="p-4 text-center sm:p-6">
                  <div className="font-display text-3xl text-fire-light sm:text-4xl">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-cream/60 sm:text-xs">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">Dein Weg ins Business</span>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] text-cream sm:text-6xl">
              LEITE DEIN EIGENES
              <br />
              <span className="text-fire-light">ATEŞ FEUERDÖNER</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              Bring das beste Feuer-Handwerk in deine Stadt. Als Franchise-Partner
              profitierst du von unserem Rezept, unserem Lieferantennetzwerk und
              einem Team, das dich vom ersten Tag an begleitet.
            </p>
          </Reveal>
          <div className="mt-8 space-y-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.text} delay={0.1 + i * 0.08}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal-light p-4 transition-colors hover:border-fire/40">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fire/15 text-fire-light">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-cream/85">{b.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35}>
            <a
              href="mailto:franchise@ates-feuerdoener.de"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-fire px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream shadow-lg shadow-fire/40 transition-all hover:-translate-y-0.5 hover:bg-fire-light"
            >
              Franchise-Partner werden
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
