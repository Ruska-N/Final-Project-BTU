import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from "@angular/router";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterModule, ProductCardComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  overlayOpen = false;
  searchQuery = '';
  trendingProducts: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.loadTrendingProducts();
  }

  openOverlay() { this.overlayOpen = true; }
  closeOverlay() { this.overlayOpen = false; }

  loadTrendingProducts() {
    this.productService.getTopSellers().subscribe((products: Product[]) => {
      this.trendingProducts = products;
      this.filteredProducts = products;
    });
  }

  filterProducts() {
    const query = this.searchQuery.toLowerCase().trim();
    if (!query) {
      this.filteredProducts = this.trendingProducts;
      return;
    }
    this.filteredProducts = this.trendingProducts.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }

  goToSearchResults() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    this.closeOverlay();
  }
}