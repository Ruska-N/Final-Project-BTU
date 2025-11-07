import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  contactEmail = 'info@mysite.com';
  exampleEmail = 'example@mysite.com';


  submitted = false;


  subscribeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    subscribeCheck: new FormControl(false, [Validators.requiredTrue]),
  });

  get email() {
    return this.subscribeForm.get('email');
  }

  get subscribeCheck() {
    return this.subscribeForm.get('subscribeCheck');
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.subscribeForm.valid) {
      console.log('Form Submitted!', this.subscribeForm.value);
      alert('Thank you for subscribing!');


      this.subscribeForm.reset();
      this.submitted = false;
    }
  }
}
