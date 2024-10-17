import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})  
export class ProductservService {

  constructor(private _HttpClient: HttpClient) { }

  // Fetch all products
  getAllproducts(): Observable<any> {
    return this._HttpClient.get<any>(`https://fakestoreapi.com/products`);
  }

  // Fetch a product by ID
  getProductsById(productId: string): Observable< any> {
    return this._HttpClient.get<{ data: any }>(`https://fakestoreapi.com/products/${productId}`);
  }
}
