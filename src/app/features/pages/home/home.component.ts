import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Array holding product details
  products = [
    {
      id: 1,
      title: 'Classic Watch',
      price: 129.99,
      image: 'assets/Master_Ultra_Thin_41_PG.jpg',
      link: '/product/1'
    },
    {
      id: 2,
      title: 'Professional Camera',
      price: 699.99,
      image: 'assets/Sony-Alpha-A99-Professional-Digital-SLR.jpg',
      link: '/product/2'
    },
    {
      id: 3,
      title: 'Sleek Laptop',
      price: 999.99,
      image: 'assets/img-MacBook-Pro-Retina-14-Inch-23934.jpg',
      link: '/product/3'
    }
  ];
}
