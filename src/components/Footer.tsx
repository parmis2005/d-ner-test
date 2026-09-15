import { Flame } from "lucide-react";
import { LOCATIONS } from "@/data/locations";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 3c.3 2.2 1.7 3.8 3.9 4v3.1c-1.5 0-2.8-.5-3.9-1.3v6.4a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.2a2.5 2.5 0 1 0 1.7 2.3V3h3Z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M15 8h-2a2 2 0 0 0-2 2v10M9 13h4" />
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
    </svg>
  );
}

const PARTNERS = ["Lieferando", "Uber Eats", "Wolt"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-fire/25 bg-gradient-to-r from-fire/15 via-charcoal-light to-charcoal-light p-8 sm:flex-row">
          <div>
            <div className="font-display text-3xl tracking-wide text-cream">DEIN DÖNER, DEIN GENUSS.</div>
            <div className="mt-1 text-sm text-cream/60">Jetzt bestellen bei unseren Lieferpartnern:</div>
          </div>
          <div className="flex flex-wrap gap-3">
            {PARTNERS.map((p) => (
              <a
                key={p}
                href="#bestellen"
                className="rounded-full border border-white/15 bg-charcoal px-5 py-2.5 text-sm font-bold text-cream transition-all hover:border-fire hover:bg-fire"
              >
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fire">
                <Flame className="h-4.5 w-4.5 text-cream" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl tracking-wide text-cream">
                ATEŞ <span className="text-fire-light">FEUERDÖNER</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Seit 2014 grillen wir in Berlin über offenem Feuer &mdash; ehrlich, frisch, handgemacht.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: InstagramIcon, label: "Instagram" },
                { Icon: TikTokIcon, label: "TikTok" },
                { Icon: FacebookIcon, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors hover:border-fire hover:text-fire-light"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wide text-cream">Navigation</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/60">
              <li><a href="#story" className="hover:text-fire-light">Handwerk</a></li>
              <li><a href="#speisekarte" className="hover:text-fire-light">Speisekarte</a></li>
              <li><a href="#reels" className="hover:text-fire-light">Reels</a></li>
              <li><a href="#galerie" className="hover:text-fire-light">Galerie</a></li>
              <li><a href="#franchise" className="hover:text-fire-light">Franchise</a></li>
              <li><a href="#standorte" className="hover:text-fire-light">Standorte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wide text-cream">Standorte</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-cream/60">
              {LOCATIONS.map((l) => (
                <li key={l.id}>
                  <div className="font-semibold text-cream/85">{l.name}</div>
                  <div>{l.street}, {l.city}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wide text-cream">Kontakt</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/60">
              <li>030 / 55 66 7788</li>
              <li>info@ates-feuerdoener.de</li>
              <li>franchise@ates-feuerdoener.de</li>
              <li className="pt-2 text-cream/45">Täglich 11:00 – 23:00 Uhr</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Ateş Feuerdöner. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cream/70">Impressum</a>
            <a href="#" className="hover:text-cream/70">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
