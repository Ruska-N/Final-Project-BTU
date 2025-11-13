import { Product } from './product.interface';


export interface CartItem {
  id: string;
  product: Product;
  color: string;
  quantity: number;
}