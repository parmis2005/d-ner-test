import { Flame } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
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

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-light">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
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
              Handgemachter Döner am offenen Feuer &mdash; seit 2014 in
              Berlin-Kreuzberg.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors hover:border-fire hover:text-fire-light"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors hover:border-fire hover:text-fire-light"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wide text-cream">
              Navigation
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/60">
              <li><a href="#ueber-uns" className="hover:text-fire-light">Über uns</a></li>
              <li><a href="#speisekarte" className="hover:text-fire-light">Speisekarte</a></li>
              <li><a href="#galerie" className="hover:text-fire-light">Galerie</a></li>
              <li><a href="#bewertungen" className="hover:text-fire-light">Bewertungen</a></li>
              <li><a href="#kontakt" className="hover:text-fire-light">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wide text-cream">
              Kontakt
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/60">
              <li>Musterstraße 27, 10999 Berlin</li>
              <li>030 / 55 66 7788</li>
              <li>info@ates-feuerdoener.de</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wide text-cream">
              Öffnungszeiten
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/60">
              <li>Mo &ndash; Do: 11:00 &ndash; 23:00</li>
              <li>Fr &ndash; Sa: 11:00 &ndash; 00:00</li>
              <li>So: 12:00 &ndash; 22:00</li>
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
