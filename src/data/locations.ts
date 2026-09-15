export type Location = {
  id: string;
  name: string;
  street: string;
  city: string;
  phone: string;
  coords: [number, number];
  hours: string;
  image: string;
};

export const LOCATIONS: Location[] = [
  {
    id: "kreuzberg",
    name: "Ateş Kreuzberg",
    street: "Musterstraße 27",
    city: "10999 Berlin",
    phone: "030 / 55 66 7788",
    coords: [52.4996, 13.418],
    hours: "Mo–So 11:00 – 23:00",
    image: "/images/clip-charcoal-poster.jpg",
  },
  {
    id: "neukoelln",
    name: "Ateş Neukölln",
    street: "Beispielallee 88",
    city: "12043 Berlin",
    phone: "030 / 55 66 7789",
    coords: [52.4812, 13.4352],
    hours: "Mo–So 11:00 – 00:00",
    image: "/images/reel-slicing-poster.jpg",
  },
  {
    id: "prenzlauer-berg",
    name: "Ateş Prenzlauer Berg",
    street: "Platzhalterweg 5",
    city: "10437 Berlin",
    phone: "030 / 55 66 7790",
    coords: [52.5448, 13.4105],
    hours: "Mo–So 11:30 – 23:00",
    image: "/images/clip-dough-poster.jpg",
  },
];
