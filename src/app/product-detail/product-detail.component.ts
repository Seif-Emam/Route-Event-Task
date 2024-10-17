import { Component, OnInit } from '@angular/core';
import { ProductservService } from '../shared/servives/productserv.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/interfaces/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  isLoading:boolean=false;
  hasError=false;
  product!:Product;

constructor(private _ProductservService:ProductservService, private _ActivatedRoute:ActivatedRoute){

}
  ngOnInit(): void {
      this.getProductsById();    
       }
 
  getProductsById(){
    this.isLoading=true;

    let id :string="";
    this._ActivatedRoute.params.subscribe({
      next : p  =>{
        id=p ['id']

      }
    })              

    this._ProductservService.getProductsById(id).subscribe({
       
        
      next : (res) =>{

        this.product=res

        console.log(res)
        this.isLoading=false
        // this.hasError=true


      }
    })

  }  

}
