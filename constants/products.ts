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

    image: "/products/hat/mockup.jpg",

    printfulUrl:
      "https://www.printful.com/product-template/105328680/177e6a39c0ee55597ce474e0f536e30b",

    gallery: [
      "/products/hat/mockup.jpg",
      "/products/hat/front.jpg",
      "/products/hat/diagonal.jpg",
      "/products/hat/right.jpg",
      "/products/hat/left.jpg",
      "/products/hat/back.jpg",
      "/products/hat/diagonal2.jpg",
    ],
  },
];