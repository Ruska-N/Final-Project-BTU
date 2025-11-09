import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

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

  onSubmit(): void {
    this.submitted = true;
    if (this.giftCardForm.valid) {
      console.log('Form Submitted', this.giftCardForm.value);
      alert('Gift card added to cart!');
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
