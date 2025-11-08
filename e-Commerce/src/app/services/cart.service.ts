import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../interfaces/cart-item.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  private isCartOpen = new BehaviorSubject<boolean>(false);
  isCartOpen$ = this.isCartOpen.asObservable();

  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentItems.push({ ...product, quantity });
    }
    this.cartItems.next([...currentItems]);
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItems
      .getValue()
      .filter((item) => item.id !== productId);
    this.cartItems.next(currentItems);
  }

  getCartItemCount(): Observable<number> {
    return this.cartItems$.pipe(
      map((items) => items.reduce((count, item) => count + item.quantity, 0))
    );
  }

  getCartTotal(): Observable<number> {
    return this.cartItems$.pipe(
      map((items) =>
        items.reduce(
          (total, item) =>
            total + (item.sale_price ?? item.price) * item.quantity,
          0
        )
      )
    );
  }

  toggleCart(): void {
    this.isCartOpen.next(!this.isCartOpen.getValue());
  }

  closeCart(): void {
    this.isCartOpen.next(false);
  }
}
