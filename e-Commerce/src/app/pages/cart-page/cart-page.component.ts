import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart-item.interface';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  public items$!: Observable<CartItem[]>;
  public totalPrice$!: Observable<number>;
  public promoCodeVisible: boolean = false;
  public noteVisible: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items$ = this.cartService.items$;
    this.totalPrice$ = this.cartService.totalPrice$;
  }

  public onIncrement(item: CartItem): void {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
  }

  public onDecrement(item: CartItem): void {
    this.cartService.updateQuantity(item.id, item.quantity - 1);
  }

  public onRemoveItem(cartId: string): void {
    this.cartService.removeFromCart(cartId);
  }

  public togglePromoCode(): void {
    this.promoCodeVisible = !this.promoCodeVisible;
  }

  public toggleNote(): void {
    this.noteVisible = !this.noteVisible;
  }
}