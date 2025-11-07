import { Routes } from '@angular/router';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ShopPageComponent,
    title: 'Tote Shop | Home',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
