import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/servives/productserv.service';
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

constructor(private _ProductservService:ProductService, private _ActivatedRoute:ActivatedRoute){

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

    this._ProductservService.getProductById(id).subscribe({
       
        
      next : (res:any) =>{

        this.product=res

        console.log(res)
        this.isLoading=false
        // this.hasError=true


      }
    })

  }  

}
