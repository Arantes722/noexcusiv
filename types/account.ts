export type OrderStatus = "Processing" | "Shipped" | "Delivered" | "Cancelled";

export type AccountOrder = {
  id: string;
  orderNumber: string;
  date: string;
  total: number;
  status: string;
  items: {
    productName: string;
    quantity: number;
    key: string;
    unitPrice: number;
  }[];
  shipping: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentStatus: string;
  tracking?: string;
};
