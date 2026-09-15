import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Lena Hoffmann",
    text: "Der beste Döner in Kreuzberg, keine Frage! Das Fleisch ist immer frisch, die Soßen hausgemacht und das Team super freundlich.",
    rating: 5,
  },
  {
    name: "Kaan Yıldız",
    text: "Erinnert mich an den Döner aus meiner Kindheit in der Türkei. Ehrlich, frisch und mit viel Liebe zubereitet. Absolute Empfehlung!",
    rating: 5,
  },
  {
    name: "Sophie Bergmann",
    text: "Endlich ein Döner-Laden mit veganer und vegetarischer Auswahl, die genauso lecker ist wie das Original. Kommen wir immer wieder gerne her.",
    rating: 5,
  },
  {
    name: "Markus Wittmann",
    text: "Schnelle Lieferung, großzügige Portionen und ein unschlagbares Preis-Leistungs-Verhältnis. Unser Stammladen für den Freitagabend.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="bewertungen" className="relative bg-charcoal-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
            Bewertungen
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            DAS SAGEN UNSERE <span className="text-fire-light">GÄSTE</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-charcoal p-6 shadow-lg shadow-black/20"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-ember text-ember" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/75">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-fire/20 font-display text-sm text-fire-light">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-sm font-semibold text-cream">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
