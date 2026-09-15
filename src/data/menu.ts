export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: "Neu" | "Bestseller" | "Scharf" | "Vegetarisch";
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "doener",
    label: "Döner",
    items: [
      {
        name: "Ateş Döner Klassik",
        description:
          "Kalbfleisch vom Feuergrill, Fladenbrot, Salat, Rotkohl, Zwiebeln, Sauce nach Wahl",
        price: "6,50 €",
        tag: "Bestseller",
      },
      {
        name: "Döner Box",
        description:
          "Kalbfleisch, Pommes, Salat und Sauce nach Wahl in der Box",
        price: "7,00 €",
      },
      {
        name: "Döner Teller",
        description:
          "Kalbfleisch, Reis oder Pommes, gegrilltes Gemüse, Salat, Sauce",
        price: "10,50 €",
      },
      {
        name: "Hähnchen Döner",
        description:
          "Mariniertes Hähnchenfleisch, Fladenbrot, Salat, Sauce nach Wahl",
        price: "6,00 €",
      },
      {
        name: "Vegi Döner",
        description:
          "Gegrilltes Gemüse & Halloumi, Fladenbrot, Salat, Sauce nach Wahl",
        price: "6,50 €",
        tag: "Vegetarisch",
      },
    ],
  },
  {
    id: "duerum",
    label: "Dürüm",
    items: [
      {
        name: "Dürüm Klassik",
        description: "Kalbfleisch im hauchdünnen Weizen-Wrap, Salat, Sauce",
        price: "7,00 €",
      },
      {
        name: "Dürüm Scharf",
        description:
          "Kalbfleisch, Jalapeños, scharfe Sauce, Zwiebeln, Salat",
        price: "7,50 €",
        tag: "Scharf",
      },
      {
        name: "Dürüm Hähnchen",
        description: "Mariniertes Hähnchenfleisch, Salat, Sauce nach Wahl",
        price: "7,00 €",
      },
    ],
  },
  {
    id: "lahmacun",
    label: "Lahmacun & Pide",
    items: [
      {
        name: "Lahmacun",
        description: "Dünner Fladen mit würzigem Hackfleisch, Petersilie, Zitrone",
        price: "4,50 €",
        tag: "Bestseller",
      },
      {
        name: "Lahmacun Döner-Roll",
        description: "Lahmacun gefüllt mit Döner, Salat und Sauce, gerollt",
        price: "6,50 €",
        tag: "Neu",
      },
      {
        name: "Käse-Pide",
        description: "Ofenfrisches Pide mit geschmolzenem Käse",
        price: "7,50 €",
        tag: "Vegetarisch",
      },
      {
        name: "Hackfleisch-Pide",
        description: "Ofenfrisches Pide mit würzigem Hackfleisch und Käse",
        price: "8,50 €",
      },
    ],
  },
  {
    id: "salate",
    label: "Salate & Beilagen",
    items: [
      {
        name: "Ateş Salat",
        description: "Gemischter Salat mit gegrilltem Hähnchen, Granatapfel-Dressing",
        price: "8,50 €",
      },
      {
        name: "Hirtensalat",
        description: "Tomaten, Gurken, Feta, Oliven, Olivenöl",
        price: "6,00 €",
        tag: "Vegetarisch",
      },
      {
        name: "Pommes Frites",
        description: "Knusprig frittiert, mit Sauce nach Wahl",
        price: "3,50 €",
      },
      {
        name: "Feuer-Pommes",
        description: "Pommes mit Feta, Peperoni und Chilisauce",
        price: "5,50 €",
        tag: "Scharf",
      },
    ],
  },
  {
    id: "getraenke",
    label: "Getränke",
    items: [
      { name: "Ayran", description: "Hausgemacht, kalt & erfrischend", price: "2,50 €" },
      { name: "Türkischer Tee", description: "Im traditionellen Glas serviert", price: "2,00 €" },
      { name: "Softdrinks 0,33l", description: "Cola, Fanta, Sprite", price: "2,50 €" },
      { name: "Wasser 0,5l", description: "Still oder mit Kohlensäure", price: "2,00 €" },
    ],
  },
];
