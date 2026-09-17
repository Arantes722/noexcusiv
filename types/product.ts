export interface ProductKeyOption {
  id: string;
  name: string;
  status: "available" | "coming-soon";
}

export interface ProductDetails {
  material: string;
  dimensions: string;
  finish: string;
  presentation: string;
  weight: string;
}

export interface Product {
  id: string;
  slug: string;

  name: string;
  collection: string;

  price: number;

  description: string;

  image: string;
  gallery: string[];

  statement: string;
  statementDescription: string;

  keyOptions: ProductKeyOption[];

  details: ProductDetails;

  included: string[];
}