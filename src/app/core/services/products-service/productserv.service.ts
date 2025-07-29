import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  /** Fetch all products */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`);
  }

  /** Fetch a product by ID */
  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${productId}`);
  }
}
