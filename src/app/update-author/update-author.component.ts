import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../author-list/author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  title:String = "Update Author";
  authorItem = new AuthorModel(null,null,null,null,null);
  // productItem = new ProductModel();
  constructor(private authorService:AuthorService, private router:Router) { }

  ngOnInit(): void {
    if(this.authorService.selectedAuthor != undefined)
    {
      console.log(this.authorService.selectedAuthor);
      this.authorItem = this.authorService.selectedAuthor;
    }
   
  }
  updateAuthor()
  {
    console.log(this.authorItem);

    this.authorService.upAuthor(this.authorItem);
    console.log("Update called");
    alert("Success");
    this.router.navigate(['/authors']);
  }
}

