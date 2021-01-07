import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String ="Book List";
  //Product is the model class for a product item
  products: ProductModel[];
  //image properties
  imageWidth:number = 50;
  imageMargin:number = 2;

  showImage: boolean = false;
  //creating service object for calling getProducts()
  

  toggleImage():void{
    this.showImage =!this.showImage; 
  }
  constructor(private router:Router,private productService:ProductService,public _auth:AuthService ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:any)=>{
      this.products = JSON.parse(JSON.stringify(data));
    })
  }

  onedit(product:any)
  {
    this.productService.selectedProduct = product;
    console.log(this.productService.selectedProduct);
    this.router.navigate(['/update']);
  }

  ondlt(product:any)
  {
    this.productService.deleteProduct(product._id);
    alert("Product deleted");
    // this.router.navigate(['/']);
    window.location.reload();
  }
}
