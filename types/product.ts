export interface Product {
  id: string;

  slug: string;

  name: string;

  collection: string;

  price: number;

  description: string;

  image: string;

  printfulUrl: string;

  gallery: string[];
}