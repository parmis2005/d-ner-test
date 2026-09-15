"use client";

import dynamic from "next/dynamic";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-charcoal-light text-sm text-cream/50">
      Karte wird geladen...
    </div>
  ),
});

const HOURS = [
  { day: "Montag – Donnerstag", time: "11:00 – 23:00" },
  { day: "Freitag – Samstag", time: "11:00 – 00:00" },
  { day: "Sonntag", time: "12:00 – 22:00" },
];

export default function Contact() {
  return (
    <section id="kontakt" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
            Kontakt & Anfahrt
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            BESUCH UNS <span className="text-fire-light">VOR ORT</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal y={30} className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-charcoal-light p-7">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-fire-light" />
                <div>
                  <h3 className="font-display text-lg tracking-wide text-cream">
                    Adresse
                  </h3>
                  <p className="mt-1 text-sm text-cream/70">
                    Musterstraße 27
                    <br />
                    10999 Berlin-Kreuzberg
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-fire-light" />
                <div>
                  <h3 className="font-display text-lg tracking-wide text-cream">
                    Telefon
                  </h3>
                  <a
                    href="tel:+493055667788"
                    className="mt-1 block text-sm text-cream/70 hover:text-fire-light"
                  >
                    030 / 55 66 7788
                  </a>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-fire-light" />
                <div>
                  <h3 className="font-display text-lg tracking-wide text-cream">
                    E-Mail
                  </h3>
                  <a
                    href="mailto:info@ates-feuerdoener.de"
                    className="mt-1 block text-sm text-cream/70 hover:text-fire-light"
                  >
                    info@ates-feuerdoener.de
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-charcoal-light p-7">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-fire-light" />
                <h3 className="font-display text-lg tracking-wide text-cream">
                  Öffnungszeiten
                </h3>
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between text-sm text-cream/75"
                  >
                    <span>{h.day}</span>
                    <span className="font-semibold text-cream">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="tel:+493055667788"
              className="flex items-center justify-center gap-2 rounded-full bg-fire px-6 py-4 text-sm font-bold uppercase tracking-wide text-cream shadow-lg shadow-fire/30 transition-all hover:bg-fire-light"
            >
              <Send className="h-4 w-4" /> Tisch reservieren
            </a>
          </Reveal>

          <Reveal y={30} delay={0.1} className="order-1 h-[400px] overflow-hidden rounded-3xl border border-white/10 lg:order-2 lg:col-span-3 lg:h-auto">
            <MapView />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
