import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-gift-card-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gift-card-page.component.html',
  styleUrls: ['./gift-card-page.component.css'],
})
export class GiftCardPageComponent implements OnInit {
  giftCardForm!: FormGroup;
  amounts: number[] = [25, 50, 100, 150, 200];
  submitted = false;

  constructor(private fb: FormBuilder, private cartService: CartService) {}

  ngOnInit(): void {
    this.giftCardForm = this.fb.group({
      amount: [25, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      recipientType: ['forSomeoneElse', Validators.required],
      recipientEmail: ['', [Validators.required, Validators.email]],
      recipientName: [''],
      deliveryDate: [this.getTodayDate(), Validators.required],
      message: [''],
    });

    this.onRecipientTypeChange();
  }

  get recipientType() {
    return this.giftCardForm.get('recipientType');
  }

  get recipientEmail() {
    return this.giftCardForm.get('recipientEmail');
  }

  get recipientName() {
    return this.giftCardForm.get('recipientName');
  }

  onRecipientTypeChange(): void {
    this.recipientType?.valueChanges.subscribe((type) => {
      const recipientEmail = this.giftCardForm.get('recipientEmail');
      const recipientName = this.giftCardForm.get('recipientName');
      const deliveryDate = this.giftCardForm.get('deliveryDate');
      const message = this.giftCardForm.get('message');

      if (type === 'forSomeoneElse') {
        recipientEmail?.setValidators([Validators.required, Validators.email]);
        recipientName?.clearValidators();
        deliveryDate?.enable();
        message?.enable();
      } else {
        recipientEmail?.clearValidators();
        recipientName?.clearValidators();
        deliveryDate?.disable();
        message?.disable();
      }
      recipientEmail?.updateValueAndValidity();
      recipientName?.updateValueAndValidity();
    });
  }

  selectAmount(amount: number): void {
    this.giftCardForm.patchValue({ amount });
  }

  updateQuantity(change: number): void {
    const currentQuantity = this.giftCardForm.get('quantity')?.value || 1;
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
      this.giftCardForm.patchValue({ quantity: newQuantity });
    }
  }

  selectRecipientType(type: string): void {
    this.giftCardForm.patchValue({ recipientType: type });
  }

  getTodayDate(): string {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${today.getFullYear()}-${month}-${day}`;
  }

  addToCart(): void {
    this.submitted = true;
    if (this.giftCardForm.valid) {
      const formValue = this.giftCardForm.value;
      const giftCardProduct: Product = {
        id: -1,
        name: 'eGift Card',
        price: formValue.amount,
        image_url: [
          'https://static.wixstatic.com/media/e90a2a_c3de803545f340df9dd4aa88a72e0718~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e90a2a_c3de803545f340df9dd4aa88a72e0718~mv2.png',
        ],
        description: 'A gift of choice.',
        sku: 'GIFT-CARD',
        colors: [],
        quantity_in_stock: 999,
      };

      const details = {
        quantity: formValue.quantity,
        recipientName: formValue.recipientName || 'N/A',
        recipientEmail: formValue.recipientEmail,
        deliveryDate: formValue.deliveryDate,
        message: formValue.message || 'No message.',
      };

      if (formValue.recipientType === 'forMyself') {
        details.recipientEmail = 'For myself';
        details.recipientName = '';
        details.deliveryDate = '';
        details.message = '';
      }

      this.cartService.addGiftCardToCart(giftCardProduct, details);

      this.submitted = false;
      this.giftCardForm.reset({
        amount: 25,
        quantity: 1,
        recipientType: 'forSomeoneElse',
        deliveryDate: this.getTodayDate(),
        recipientEmail: '',
        recipientName: '',
        message: '',
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
