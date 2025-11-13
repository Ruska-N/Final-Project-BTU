import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductCardComponent
  ],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public searchQuery: string = '';
  public allProducts: Product[] = [];
  public filteredProducts: Product[] = [];
  
  public minPrice: number = 0;
  public maxPrice: number = 999;
  public sortBy: string = 'bestMatch';

  public sliderMin: number = 0;
  public sliderMax: number = 100;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  private getEffectivePrice(product: Product): number {
    return product.sale_price ?? product.price;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.allProducts = products;
 
      const prices = products.map(p => this.getEffectivePrice(p)); 
      this.sliderMin = Math.min(...prices);
      this.sliderMax = Math.max(...prices);
      this.minPrice = this.sliderMin;
      this.maxPrice = this.sliderMax;

      this.route.queryParams.subscribe(params => {
        this.searchQuery = params['q'] || '';
        this.runFilters(); 
      });
    });
  }

  public runFilters(): void {
    let tempProducts = [...this.allProducts];

    const query = this.searchQuery.toLowerCase().trim();
    if (query) {
      tempProducts = tempProducts.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    tempProducts = tempProducts.filter(product => { 
      const price = this.getEffectivePrice(product);
      return price >= this.minPrice && price <= this.maxPrice;
    });

    switch (this.sortBy) {
      case 'priceAsc':
        tempProducts.sort((a, b) => this.getEffectivePrice(a) - this.getEffectivePrice(b));
        break;
      case 'priceDesc':
        tempProducts.sort((a, b) => this.getEffectivePrice(b) - this.getEffectivePrice(a));
        break;
      case 'nameAsc':
        tempProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        tempProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        tempProducts.sort((a, b) => b.id - a.id);
        break;
      case 'bestMatch':
      default:
        tempProducts.sort((a, b) => (b.isTopSeller ? 1 : 0) - (a.isTopSeller ? 1 : 0));
        break;
    }

    this.filteredProducts = tempProducts;
  }

  public onSearchChange(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: this.searchQuery },
      queryParamsHandling: 'merge',
    });
  }

  public onFilterChange(): void {
    this.runFilters();
  }
}