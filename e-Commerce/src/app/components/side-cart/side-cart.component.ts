import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public promoCodeVisible: boolean = false;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.isOpen$ = this.cartService.isOpen$;
    this.items$ = this.cartService.items$;
    this.totalPrice$ = this.cartService.totalPrice$;
    this.totalItems$ = this.cartService.totalItems$;
  }

  public onViewCart(): void {
    this.router.navigate(['/cart']);
    this.cartService.setCartOpen(false);
  }

  public togglePromoCode(): void {
    this.promoCodeVisible = !this.promoCodeVisible;
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