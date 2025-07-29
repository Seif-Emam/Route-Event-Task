import { RouterLink } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/products-service/productserv.service';
import { Product } from '../../../core/interfaces/product';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from '../../../core/services/loading-service/loading.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [RouterLink, FormsModule]
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  hasError = false;
  searchQuery: string = '';
  selectedSort: string = '';
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(private productService: ProductService, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.loading$
      .pipe(takeUntil(this.destroy$))
      .subscribe(loading => this.isLoading = loading);
    // setTimeout(() => {
    //   this.getAllProducts();
    // }, 500);
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getAllProducts() {
    this.productService.getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          this.products = res;
          this.filteredProducts = res;
        },
        error: (err: any) => {
          console.log('Error fetching products', err);
          this.hasError = true;
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
