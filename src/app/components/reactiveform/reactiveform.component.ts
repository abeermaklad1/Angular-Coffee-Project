import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  ourValidation;
  constructor() { 
    this.ourValidation = new FormGroup({
      username: new FormControl('' , [Validators.required , Validators.minLength(3)]),
      age: new FormControl('' , [Validators.required , Validators.min(16) , Validators.max(60)]),
      email: new FormControl('' , [Validators.required , Validators.email]),
      password: new FormControl('' , [Validators.required , Validators.minLength(6)]),
    });
  }
  
  ngOnInit(): void {
  }

  get getUsername(){
    return this. ourValidation.controls["username"];
  }

  get getAge(){
    return this. ourValidation.controls["age"];
  }

  get getEmail(){
    return this. ourValidation.controls["email"];
  }

  get getPassword(){
    return this. ourValidation.controls["password"];
  }

  get checkUsername(){
    return this. ourValidation.controls["username"].valid;
  }
  
  get checkAge(){
    return this. ourValidation.controls["age"].valid;
  }
  
  get checkEmail(){
    return this. ourValidation.controls["email"].valid;
  }
  
  get checkPassword(){
    return this. ourValidation.controls["password"].valid;
  }

  submitData(){
    console.log(this.ourValidation.status);
  }

}