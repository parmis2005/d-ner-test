"use client";

import { useState } from "react";
import { MENU } from "@/data/menu";
import { Flame } from "lucide-react";

const TAG_STYLES: Record<string, string> = {
  Neu: "bg-ember/20 text-ember border-ember/40",
  Bestseller: "bg-fire/20 text-fire-light border-fire/40",
  Scharf: "bg-red-500/20 text-red-400 border-red-500/40",
  Vegetarisch: "bg-green-500/20 text-green-400 border-green-500/40",
};

export default function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const category = MENU.find((c) => c.id === active) ?? MENU[0];

  return (
    <section id="speisekarte" className="relative bg-charcoal-light py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
            Speisekarte
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            UNSERE <span className="text-fire-light">KLASSIKER</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Alle Preise verstehen sich inkl. MwSt. &mdash; frisch zubereitet
            in unserer offenen Küche.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all ${
                active === cat.id
                  ? "border-fire bg-fire text-cream shadow-lg shadow-fire/30"
                  : "border-white/15 bg-white/5 text-cream/70 hover:border-fire/50 hover:text-cream"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {category.items.map((item) => (
            <div
              key={item.name}
              className="group flex items-start justify-between gap-4 border-b border-white/10 pb-6"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-display text-xl tracking-wide text-cream group-hover:text-fire-light transition-colors">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${TAG_STYLES[item.tag]}`}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-cream/60">{item.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 font-display text-xl text-ember">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-fire/25 bg-gradient-to-r from-fire/10 to-transparent p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <Flame className="h-8 w-8 shrink-0 text-fire-light" />
            <p className="text-cream/85">
              Alle Gerichte auch als <strong className="text-cream">vegetarische Variante</strong> mit
              gegrilltem Gemüse & Halloumi erhältlich.
            </p>
          </div>
          <a
            href="#bestellen"
            className="shrink-0 rounded-full bg-fire px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream shadow-lg shadow-fire/30 transition-all hover:bg-fire-light"
          >
            Jetzt bestellen
          </a>
        </div>
      </div>
    </section>
  );
}
