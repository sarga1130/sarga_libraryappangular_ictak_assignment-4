import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorModel } from './author-list/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  selectedAuthor: AuthorModel
  constructor(private http:HttpClient) {
   }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  newAuthor(item:any)
  {
    return this.http.post("http://localhost:3000/insertadd",{"author":item})
    .subscribe(data=>{console.log(data)})
  }
  //Update 
  upAuthor(item:AuthorModel)
  {
    console.log(item._id);
    return this.http.put("http://localhost:3000/updateauthor/"+item._id,{"author":item})
    .subscribe(data=>{console.log(data)});
  }
  deleteAuthor(id:String){
    return this.http.delete("http://localhost:3000/deleteauthor/"+id)
    .subscribe(data=>{console.log(data)});
  }
 
}