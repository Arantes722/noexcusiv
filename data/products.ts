import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "hat",

    slug: "first-drop-cap",

    name: "NO EXCUSES Hat",

    collection: "FIRST DROP",

    price: 34.99,

    description:
      "The first NOEXCUSIV piece. A premium dad hat created for those who choose discipline over excuses.",

    image: "/products/hat/mockup.png",

    printfulUrl:
      "https://www.printful.com/product-template/105328680/177e6a39c0ee55597ce474e0f536e30b",

    gallery: [
      "/products/hat/mockup.png",
      "/products/hat/front.png",
      "/products/hat/diagonal.png",
      "/products/hat/right.png",
      "/products/hat/left.png",
      "/products/hat/back.png",
      "/products/hat/diagonal2.png",
    ],
  },
];