import { Product } from './product';
import { Cart } from './cart';

export class CartItem {
  id: number = 0;
  total_products: number = 0;
  products: Product[] = [];
}
