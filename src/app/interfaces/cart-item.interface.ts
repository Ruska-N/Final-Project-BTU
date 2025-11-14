import { Product } from './product.interface';

export interface CartItem {
  id: string;
  product: Product;
  color: string;
  quantity: number;
  recipientName?: string;
  recipientEmail?: string;
  deliveryDate?: string;
  message?: string;
}
