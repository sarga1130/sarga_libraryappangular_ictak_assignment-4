import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AnyMxRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(user:any){
    return this.http.post<any>("http://localhost:3000/login",user)
    // .subscribe((data:any)=>{
    //   console.log('success')
    // })
    
  }

  constructor(private http:HttpClient) { }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

}

