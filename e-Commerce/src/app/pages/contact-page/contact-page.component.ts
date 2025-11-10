import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

interface Country {
  name: string;
  code: string;
  flagUrl: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  countries: Country[] = [
    {
      name: 'Afghanistan',
      code: '+93',
      flagUrl: 'https://flagcdn.com/w20/af.png',
    },
    {
      name: 'Aland Islands',
      code: '+358',
      flagUrl: 'https://flagcdn.com/w20/ax.png',
    },
    {
      name: 'Albania',
      code: '+355',
      flagUrl: 'https://flagcdn.com/w20/al.png',
    },
    {
      name: 'Algeria',
      code: '+213',
      flagUrl: 'https://flagcdn.com/w20/dz.png',
    },
    {
      name: 'American Samoa',
      code: '+1684',
      flagUrl: 'https://flagcdn.com/w20/as.png',
    },
    {
      name: 'United States',
      code: '+1',
      flagUrl: 'https://flagcdn.com/w20/us.png',
    },
    {
      name: 'United Kingdom',
      code: '+44',
      flagUrl: 'https://flagcdn.com/w20/gb.png',
    },
  ];

  selectedCountry: Country | null = null;
  isDropdownOpen = false;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      message: new FormControl('', [Validators.required]),
    });
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }
  get lastName() {
    return this.contactForm.get('lastName');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCountry(country: Country): void {
    this.selectedCountry = country;
    this.isDropdownOpen = false;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      alert('Your message has been sent!');
      this.contactForm.reset();
      this.submitted = false;
      this.selectedCountry = null; 
    }
  }
}
