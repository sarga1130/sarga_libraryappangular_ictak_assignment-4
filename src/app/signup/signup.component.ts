import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title='Sign Up';
  User:any={name:'',
        country:'',
      email:'',
    password:''};
        userVerify()
        {
          alert("Registration Successful")
        }

  constructor() { }

  ngOnInit(): void {
  }

}
