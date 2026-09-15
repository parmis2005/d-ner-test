import { Beef, Clock, Flame, Leaf, Truck } from "lucide-react";

const ITEMS = [
  { icon: Flame, label: "Täglich am offenen Feuer gegrillt" },
  { icon: Leaf, label: "100% frische Zutaten" },
  { icon: Beef, label: "Hausgemachtes Fleisch & Soßen" },
  { icon: Truck, label: "Lieferung in 30 Minuten" },
  { icon: Clock, label: "Täglich geöffnet bis 23 Uhr" },
];

export default function USPBar() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative z-20 -mt-px overflow-hidden border-y border-white/10 bg-charcoal-light py-4">
      <div className="flex w-max animate-marquee gap-16">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <item.icon className="h-5 w-5 text-fire-light" strokeWidth={2} />
            <span className="text-sm font-semibold uppercase tracking-wide text-cream/80">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
