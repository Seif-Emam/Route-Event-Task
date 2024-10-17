import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductservService } from '../shared/servives/productserv.service';
import { AllProductRes } from '../shared/interfaces/allprductsres';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports:[RouterLink]
})
export class ProductListComponent implements OnInit {
  ProductList: any[] = [];  // Holds the list of products
  isLoading = true;         // Loading state
  hasError = false;         // Error state
 
  constructor(private _ProductservService: ProductservService,) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProducts();    
    }, 1000);  // Simulate loading delay
  }

  // Method to fetch products from the service
  getAllProducts() {
    this._ProductservService.getAllproducts().subscribe({
      next: res => {
        this.ProductList = res;  // Assign the fetched products to the ProductList
        this.isLoading = false;  // Stop loading after data is fetched
      },
      error: err => {
        console.log('Error fetching products', err);
        this.hasError = true;    // Set error state
        this.isLoading = false;  // Stop loading on error
      }
    });
  }

 
}
