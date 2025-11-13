import { Routes } from '@angular/router';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { GiftCardPageComponent } from './pages/gift-card-page/gift-card-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
export const routes: Routes = [
  {
    path: '',
    component: ShopPageComponent,
    title: 'Tote Shop | Home',
  },
  {
    path: 'product/:id',
    component: ProductDetailsPageComponent,
    title: 'Product Details',
  },
  {
    path: 'gift-card',
    component: GiftCardPageComponent,
    title: 'eGift Card',
  },
  {
    path: 'contact', 
    component: ContactPageComponent,
    title: 'Contact Us',
  },
  {
    path: 'faq',
    component: FaqPageComponent,
    title: 'FAQ',
  },
  { 
    path: 'search', 
    component: SearchResultsComponent 
  },
  { 
    path: 'cart', 
    component: CartPageComponent 
  },
  {
    path: '**',
    redirectTo: '',
  },
];
