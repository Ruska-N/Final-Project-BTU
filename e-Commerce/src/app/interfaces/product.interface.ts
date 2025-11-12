export interface Product {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  image_url: string[];
  description: string;
  sku: string;
  colors: string[];
  quantity_in_stock: number;
  isTopSeller?: boolean;
}
