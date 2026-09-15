import { Crown, Gift, Sparkles, Trophy } from "lucide-react";
import Reveal from "./Reveal";

const PERKS = [
  { icon: Sparkles, title: "Punkte sammeln", text: "1 € = 1 Punkt. Bei jeder Bestellung, in jeder Filiale." },
  { icon: Gift, title: "Prämien holen", text: "Ab 100 Punkten: Gratis-Döner, Ayran oder Feuer-Pommes." },
  { icon: Trophy, title: "Aufsteigen", text: "Bronze, Silber, Gold – je höher dein Rang, desto mehr Vorteile." },
];

export default function LoyaltyBanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/clip-skewer.mp4"
        poster="/images/clip-skewer-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-charcoal/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-fire/25 via-transparent to-ember/10" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ember">
            <Crown className="h-3.5 w-3.5" /> Ateş Feuer-Club
          </span>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] text-cream sm:text-6xl lg:text-7xl">
            PUNKTE SAMMELN.
            <br />
            PRÄMIEN HOLEN.
            <br />
            <span className="text-fire-light">CHAMPION WERDEN.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base text-cream/75 sm:text-lg">
            Im Feuer-Club zählt jede Bestellung. Registriere dich kostenlos, sammle
            Punkte an allen drei Standorten und sichere dir exklusive Prämien.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-full bg-fire px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream shadow-lg shadow-fire/40 transition-all hover:-translate-y-0.5 hover:bg-fire-light"
            >
              Jetzt registrieren
            </a>
            <a
              href="#"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-all hover:border-ember hover:text-ember"
            >
              Mehr erfahren
            </a>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {PERKS.map((perk, i) => (
            <Reveal key={perk.title} delay={0.15 + i * 0.1}>
              <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-charcoal/70 p-5 backdrop-blur-md transition-all hover:-translate-x-1 hover:border-ember/40">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ember/15 text-ember transition-colors group-hover:bg-ember group-hover:text-charcoal">
                  <perk.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-2xl tracking-wide text-cream">{perk.title}</div>
                  <div className="mt-1 text-sm text-cream/65">{perk.text}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
