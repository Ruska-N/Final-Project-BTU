import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(this.productsUrl)
      .pipe(map((response) => response.products));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products) => products.find((p) => p.id === id))
    );
  }


  getTopSellers(): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.filter(p => p.isTopSeller)) 
    );
  }

  searchProducts(query: string): Observable<Product[]> {
    const lowerQuery = query.toLowerCase().trim();
    return this.getProducts().pipe(
      map(products =>
        products.filter(p => p.name.toLowerCase().includes(lowerQuery))
      )
    );
  }
}
