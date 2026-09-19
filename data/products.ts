import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "pursuit",
    slug: "pursuit",

    name: "KEEP GOING FOR IT.",

    collection: "NOEXCUSIV / 001",

    price: 49.9,

    description:
      "A statement piece built around the pursuit of something bigger. KEEP GOING FOR IT. turns a symbol of ambition into a physical reminder to keep moving toward the life you want.",

    image: "/products/pursuit.jpg",

    gallery: [
      "/products/pursuit.jpg",
    ],

    statement: "KEEP GOING FOR IT.",

    statementDescription:
      "Some dreams take years to become real. That doesn't make them any less worth chasing.",

    keyOptions: [
      {
        id: "lamborghini",
        name: "Lamborghini",
        status: "available",
      },
      {
        id: "ferrari",
        name: "Ferrari",
        status: "coming-soon",
      },
      {
        id: "porsche",
        name: "Porsche",
        status: "coming-soon",
      },
    ],

    details: {
      material: "To be confirmed",
      dimensions: "To be confirmed",
      finish: "To be confirmed",
      presentation: "To be confirmed",
      weight: "To be confirmed",
    },

    included: [
      "KEEP GOING FOR IT. statement piece",
      "Selected automotive key",
      "Presentation details to be confirmed",
    ],
  },
];