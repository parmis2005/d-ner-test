import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import Reveal from "./Reveal";

const POSTS = [
  {
    image: "/images/clip-oven-poster.jpg",
    date: "2. September 2026",
    tag: "Neueröffnung",
    title: "Ateş Prenzlauer Berg ist eröffnet – unser dritter Standort in Berlin",
    excerpt: "Mehr Platz, ein größerer Holzkohlegrill und zum ersten Mal ein eigener Steinofen für Lahmacun direkt im Gastraum.",
  },
  {
    image: "/images/reel-fries-poster.jpg",
    date: "18. August 2026",
    tag: "Neu auf der Karte",
    title: "Feuer-Pommes: Knusprig, mit Feta, Peperoni und unserer Chilisauce",
    excerpt: "Unsere beliebteste Beilage bekommt ein Upgrade. Ab sofort an allen Standorten – auch als Vegi-Box.",
  },
  {
    image: "/images/clip-dough-poster.jpg",
    date: "5. August 2026",
    tag: "Hinter den Kulissen",
    title: "Warum wir unser Fladenbrot jeden Morgen um 6 Uhr selbst backen",
    excerpt: "Ein Blick in die Backstube: 40 Kilo Teig, ein Steinofen und ein Rezept, das aus Gaziantep stammt.",
  },
];

export default function News() {
  return (
    <section className="relative bg-charcoal-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">Neuigkeiten</span>
            <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
              ATEŞ <span className="text-fire-light">NEWS</span>
            </h2>
          </div>
          <a href="#" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-cream/80 hover:text-fire-light">
            Alle Beiträge <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-charcoal transition-all hover:-translate-y-1.5 hover:border-fire/40 hover:shadow-xl hover:shadow-fire/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-fire px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-cream">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-cream/50">
                    <CalendarDays className="h-3.5 w-3.5" /> {post.date}
                  </div>
                  <h3 className="mt-3 font-display text-2xl leading-tight tracking-wide text-cream transition-colors group-hover:text-fire-light">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/65">{post.excerpt}</p>
                  <span className="mt-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-fire-light">
                    Weiterlesen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
