import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. დააიმპორტე შენი 3 "მთავარი" კომპონენტი
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideCartComponent } from './components/side-cart/side-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SideCartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'e-Commerce';
}
