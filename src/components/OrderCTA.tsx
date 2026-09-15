import Image from "next/image";
import { Bike, ShoppingBag, UtensilsCrossed } from "lucide-react";

const OPTIONS = [
  {
    icon: Bike,
    title: "Lieferung",
    text: "Bestell bequem online — heiß und frisch in ca. 30 Minuten bei dir.",
    cta: "Lieferung starten",
  },
  {
    icon: ShoppingBag,
    title: "Abholung",
    text: "Online bestellen, in 15 Minuten fertig zur Abholung vor Ort.",
    cta: "Abholung bestellen",
  },
  {
    icon: UtensilsCrossed,
    title: "Vor Ort genießen",
    text: "Reserviere deinen Tisch und genieße frisch vom Feuergrill.",
    cta: "Tisch reservieren",
  },
];

export default function OrderCTA() {
  return (
    <section id="bestellen" className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src="/images/doner-3.jpg"
        alt="Frisch zubereiteter Döner"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/90" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
            Bestellen
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            HUNGER? <span className="text-fire-light">WIR LIEFERN.</span>
          </h2>
          <p className="mt-4 text-cream/75">
            Wähle deine bevorzugte Option &mdash; frisch, schnell und direkt
            vom Feuer auf deinen Teller.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {OPTIONS.map((opt) => (
            <div
              key={opt.title}
              className="flex flex-col items-center rounded-3xl border border-white/10 bg-charcoal-light/80 p-8 text-center backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-fire/20">
                <opt.icon className="h-7 w-7 text-fire-light" />
              </span>
              <h3 className="mt-5 font-display text-2xl tracking-wide text-cream">
                {opt.title}
              </h3>
              <p className="mt-2 text-sm text-cream/65">{opt.text}</p>
              <a
                href="tel:+493055667788"
                className="mt-6 w-full rounded-full bg-fire px-5 py-3 text-sm font-bold uppercase tracking-wide text-cream shadow-lg shadow-fire/30 transition-colors hover:bg-fire-light"
              >
                {opt.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
