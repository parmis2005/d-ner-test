"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { LOCATIONS } from "@/data/locations";
import Reveal from "./Reveal";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-charcoal-light text-sm text-cream/50">
      Karte wird geladen...
    </div>
  ),
});

export default function Locations() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="standorte" className="relative bg-charcoal-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">Standorte & Kontakt</span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            FINDE DEIN <span className="text-fire-light">ATEŞ</span>
          </h2>
          <p className="mt-4 text-cream/70">
            Drei Filialen in Berlin &mdash; klicke auf einen Standort, um ihn auf der Karte zu sehen.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="order-2 flex flex-col gap-4 lg:order-1 lg:col-span-2">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.id} delay={i * 0.08} y={20}>
                <button
                  onClick={() => setActive(loc.id)}
                  className={`group flex w-full gap-4 rounded-3xl border p-4 text-left transition-all ${
                    active === loc.id
                      ? "border-fire bg-fire/10 shadow-lg shadow-fire/10"
                      : "border-white/10 bg-charcoal hover:border-fire/40"
                  }`}
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
                    <Image src={loc.image} alt={loc.name} fill sizes="96px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-2xl tracking-wide text-cream">{loc.name}</h3>
                      <Navigation className={`h-4 w-4 shrink-0 transition-colors ${active === loc.id ? "text-fire-light" : "text-cream/30"}`} />
                    </div>
                    <div className="mt-1.5 flex items-start gap-2 text-sm text-cream/70">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-fire-light" />
                      <span>{loc.street}, {loc.city}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-sm text-cream/70">
                      <Clock className="h-4 w-4 shrink-0 text-fire-light" />
                      <span>{loc.hours}</span>
                    </div>
                    <a
                      href={`tel:${loc.phone.replace(/[^\d]/g, "")}`}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-1 flex items-center gap-2 text-sm text-cream/70 hover:text-fire-light"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-fire-light" />
                      <span>{loc.phone}</span>
                    </a>
                  </div>
                </button>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="rounded-3xl border border-white/10 bg-charcoal p-5 text-sm text-cream/70">
                Allgemeine Anfragen:{" "}
                <a href="mailto:info@ates-feuerdoener.de" className="font-semibold text-cream hover:text-fire-light">
                  info@ates-feuerdoener.de
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal y={30} delay={0.1} className="order-1 h-[420px] overflow-hidden rounded-3xl border border-white/10 lg:order-2 lg:col-span-3 lg:h-auto lg:min-h-[560px]">
            <MapView active={active} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
