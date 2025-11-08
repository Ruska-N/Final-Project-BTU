import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPageComponent implements OnInit {
  product$: Observable<Product | undefined> | undefined;
  products: Product[] = [];
  selectedImageUrl: string = '';
  selectedColor: string = '';
  quantity: number = 1;
  prevProductId: number | null = null;
  nextProductId: number | null = null;
  openAccordion: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.route.paramMap.subscribe((params) => {
        const productId = Number(params.get('id'));
        this.updateNavigation(productId);
        this.loadProduct(productId);
      });
    });
  }

  loadProduct(id: number): void {
    this.product$ = this.productService.getProductById(id);
    this.product$.subscribe((product) => {
      if (product && product.image_url.length > 0) {
        this.selectedImageUrl = product.image_url[0];
        this.selectedColor = product.colors[0];
        this.quantity = 1;
      }
    });
  }

  updateNavigation(productId: number): void {
    const currentIndex = this.products.findIndex((p) => p.id === productId);
    this.prevProductId =
      currentIndex > 0 ? this.products[currentIndex - 1].id : null;
    this.nextProductId =
      currentIndex < this.products.length - 1
        ? this.products[currentIndex + 1].id
        : null;
  }

  navigateToProduct(productId: number | null): void {
    if (productId) {
      this.router.navigate(['/product', productId]);
    }
  }

  selectImage(url: string): void {
    this.selectedImageUrl = url;
  }

  selectColor(color: string, imageIndex: number, product: Product): void {
    this.selectedColor = color;
    if (product.image_url[imageIndex]) {
      this.selectedImageUrl = product.image_url[imageIndex];
    }
  }

  updateQuantity(amount: number): void {
    const newQuantity = this.quantity + amount;
    if (newQuantity >= 1) {
      this.quantity = newQuantity;
    }
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product, this.quantity);
  }

  toggleAccordion(section: string): void {
    this.openAccordion = this.openAccordion === section ? null : section;
  }
}
