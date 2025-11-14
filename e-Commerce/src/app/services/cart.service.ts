import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartItem } from '../interfaces/cart-item.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private STORAGE_KEY = 'my_app_cart_items';
  private itemsSubject = new BehaviorSubject<CartItem[]>(
    this.getInitialItems()
  );

  public items$: Observable<CartItem[]> = this.itemsSubject.asObservable();

  private isOpenSubject = new BehaviorSubject<boolean>(false);

  public isOpen$: Observable<boolean> = this.isOpenSubject.asObservable();

  public totalItems$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((acc, item) => acc + item.quantity, 0)),
    shareReplay(1)
  );

  public totalPrice$: Observable<number> = this.items$.pipe(
    map((items) =>
      items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    ),
    shareReplay(1)
  );

  constructor() {}

  private saveState(items: CartItem[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  }
  private getInitialItems(): CartItem[] {
    try {
      const savedItems = localStorage.getItem(this.STORAGE_KEY);
      return savedItems ? JSON.parse(savedItems) : [];
    } catch (e) {
      console.error('Error reading cart from localStorage', e);
      localStorage.removeItem(this.STORAGE_KEY);
      return [];
    }
  }

  public toggleCart(): void {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  public setCartOpen(isOpen: boolean): void {
    this.isOpenSubject.next(isOpen);
  }

  public addToCart(product: Product, color: string): void {
    const currentItems = this.itemsSubject.getValue();
    const existingItem = currentItems.find(
      (i) => i.product.id === product.id && i.color === color
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${color}`,
        product: product,
        color: color,
        quantity: 1,
      };
      currentItems.push(newItem);
    }

    const newItems = [...currentItems];
    this.itemsSubject.next(newItems);
    this.saveState(newItems);

    this.setCartOpen(true);
  }

  public addGiftCardToCart(product: Product, details: any): void {
    const currentItems = this.itemsSubject.getValue();
    const newGiftCardItem: CartItem = {
      id: `giftcard-${Date.now()}`,
      product: product,
      quantity: details.quantity,
      recipientName: details.recipientName,
      recipientEmail: details.recipientEmail,
      deliveryDate: details.deliveryDate,
      message: details.message,
      color: ''
    };
    const newItems = [...currentItems, newGiftCardItem];
    this.itemsSubject.next(newItems);
    this.saveState(newItems);
    this.setCartOpen(true);
  }

  public updateQuantity(cartId: string, newQuantity: number): void {
    const currentItems = this.itemsSubject.getValue();
    const itemToUpdate = currentItems.find((i) => i.id === cartId);

    if (itemToUpdate) {
      itemToUpdate.quantity = newQuantity;
    }

    if (newQuantity <= 0) {
      this.removeFromCart(cartId);
    } else {
      this.itemsSubject.next([...currentItems]);
      this.saveState([...currentItems]);
    }
  }

  public removeFromCart(cartId: string): void {
    const currentItems = this.itemsSubject.getValue();
    const updatedItems = currentItems.filter((i) => i.id !== cartId);
    this.itemsSubject.next(updatedItems);
    this.saveState(updatedItems);
  }
}
