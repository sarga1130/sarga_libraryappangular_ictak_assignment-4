import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';


const routes: Routes = [
  {path:"products",component:ProductListComponent},
  {path:"add",canActivate:[AuthGuard],component:NewProductComponent},
  {path:"update",component:UpdateProductComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"addauthor",component:NewAuthorComponent},
  {path:"authors",component:AuthorListComponent},
  {path:"updateauthor",component:UpdateAuthorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
