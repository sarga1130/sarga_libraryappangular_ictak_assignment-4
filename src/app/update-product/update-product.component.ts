import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  title:String = "Update Product";
  productItem = new ProductModel(null,null,null,null,null,null);
  // productItem = new ProductModel();
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    if(this.productService.selectedProduct != undefined)
    {
      console.log(this.productService.selectedProduct);
      this.productItem = this.productService.selectedProduct;
    }
   
  }
  updateProduct()
  {
    console.log(this.productItem);

    this.productService.upProduct(this.productItem);
    console.log("Update called");
    alert("Success");
    this.router.navigate(['/products']);
  }
}
