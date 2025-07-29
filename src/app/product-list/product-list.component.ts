import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../shared/servives/productserv.service';
import { Product } from '../shared/interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [RouterLink, FormsModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isLoading = true;
  hasError = false;
  searchQuery: string = '';
  selectedSort: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProducts();
    }, 1000);
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: res => {
        this.products = res;
        this.filteredProducts = res;
        this.isLoading = false;
      },
      error: err => {
        console.log('Error fetching products', err);
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  onSearchChange() {
    this.applyFilters();
  }

  onSortChange() {
    this.applyFilters();
  }

  applyFilters() {
    const query = this.searchQuery.trim().toLowerCase();
    let filtered = this.products.filter(product =>
      product.title.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query)
    );
    switch (this.selectedSort) {
      case 'priceLowHigh':
        filtered = filtered.slice().sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        filtered = filtered.slice().sort((a, b) => b.price - a.price);
        break;
      case 'ratingHighLow':
        filtered = filtered.slice().sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case 'nameAZ':
        filtered = filtered.slice().sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'nameZA':
        filtered = filtered.slice().sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    this.filteredProducts = filtered;
  }
}
