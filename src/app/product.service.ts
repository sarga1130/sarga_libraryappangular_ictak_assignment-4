import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: ProductModel
  constructor(private http:HttpClient) {
   }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item:any)
  {
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
  }
  //Update Product
  upProduct(item:ProductModel)
  {
    console.log(item._id);
    return this.http.put("http://localhost:3000/update/"+item._id,{"product":item})
    .subscribe(data=>{console.log(data)});
  }
  deleteProduct(id:String){
    return this.http.delete("http://localhost:3000/delete/"+id)
    .subscribe(data=>{console.log(data)});
  }
 
}
