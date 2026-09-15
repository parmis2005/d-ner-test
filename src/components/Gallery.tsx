import Image from "next/image";

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
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-fire-light">
            Galerie
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            EIN BLICK IN UNSERE <span className="text-fire-light">KÜCHE</span>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
