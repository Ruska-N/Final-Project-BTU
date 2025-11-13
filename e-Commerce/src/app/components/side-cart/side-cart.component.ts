// src/app/components/side-cart/side-cart.component.ts

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart-item.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-cart',
  imports: [CommonModule],
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.css']
})
export class SideCartComponent implements OnInit {

  public isOpen$!: Observable<boolean>;
  public items$!: Observable<CartItem[]>;
  public totalPrice$!: Observable<number>;
  public totalItems$!: Observable<number>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.isOpen$ = this.cartService.isOpen$;
    this.items$ = this.cartService.items$;
    this.totalPrice$ = this.cartService.totalPrice$;
    this.totalItems$ = this.cartService.totalItems$;
  }

  public closeCart(): void {
    this.cartService.setCartOpen(false);
  }

  public onRemoveItem(cartId: string): void {
    this.cartService.removeFromCart(cartId);
  }

  public onIncrement(item: CartItem): void {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
  }

  public onDecrement(item: CartItem): void {
    this.cartService.updateQuantity(item.id, item.quantity - 1);
  }
}