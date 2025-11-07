import { Routes } from '@angular/router';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ShopPageComponent,
    title: 'Tote Shop | Home',
  },
  {
    path: 'detail',
    component: ProductDetailsPageComponent,
    title: 'Product Detail',
  },
];
