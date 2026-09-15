"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Menu, Phone, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#story", label: "Handwerk" },
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#reels", label: "Reels" },
  { href: "#standorte", label: "Standorte" },
  { href: "#franchise", label: "Franchise" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > last && y > 160 && !open);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-charcoal/90 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-fire shadow-md shadow-fire/40 transition-transform group-hover:scale-110 group-hover:rotate-12">
            <Flame className="h-5 w-5 text-cream" strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl tracking-wide text-cream">
            ATEŞ <span className="text-fire-light">FEUERDÖNER</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium tracking-wide text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-fire-light transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+493055667788"
            className="flex items-center gap-2 text-sm font-semibold text-cream/90 transition-colors hover:text-fire-light"
          >
            <Phone className="h-4 w-4" />
            030 / 55 66 7788
          </a>
          <a
            href="#bestellen"
            className="rounded-full bg-fire px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-cream shadow-lg shadow-fire/30 transition-all hover:-translate-y-0.5 hover:bg-fire-light hover:shadow-fire-light/40"
          >
            Jetzt bestellen
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü öffnen"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex flex-col gap-1 border-t border-white/10 bg-charcoal px-5 pb-6 pt-2 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-cream/90 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+493055667788"
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-base font-semibold text-cream/90"
            >
              <Phone className="h-4 w-4" /> 030 / 55 66 7788
            </a>
            <a
              href="#bestellen"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-fire px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-cream shadow-lg shadow-fire/30"
            >
              Jetzt bestellen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
