import Image from "next/image";
import Reveal from "./Reveal";

const IMAGES = [
  { src: "/images/doner-1.jpg", alt: "Frisch gewickelter Döner mit Gemüse", span: "row-span-2" },
  { src: "/images/interior-1.jpg", alt: "Gemütliches Interieur bei Ateş Feuerdöner", span: "" },
  { src: "/images/doner-6.jpg", alt: "Döner mit Pommes und Sauce", span: "" },
  { src: "/images/chef-1.jpg", alt: "Grillen am offenen Feuer", span: "row-span-2" },
  { src: "/images/ingredients-1.jpg", alt: "Frisches Gemüse als Zutaten", span: "" },
  { src: "/images/interior-2.jpg", alt: "Zubereitung in der offenen Küche", span: "" },
  { src: "/images/bread-2.jpg", alt: "Hausgemachtes Fladenbrot", span: "" },
  { src: "/images/doner-4.jpg", alt: "Döner Nahaufnahme", span: "" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
            Galerie
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            EIN BLICK IN UNSERE <span className="text-fire-light">KÜCHE</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.08}
              y={20}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 ring-0 ring-fire/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-fire/50" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
