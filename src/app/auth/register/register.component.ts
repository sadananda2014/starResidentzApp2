import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router, private authService: AuthService) { }

    myform:       FormGroup;
    name:         FormControl;
    email:        FormControl;
    password:     FormControl;
    phone:        FormControl;

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

createFormControls() { 
  this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.phone = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('[0-9() ]{7,}$')
    ]);
  }

  createForm() { 
    this.myform = new FormGroup({
      email: this.email,
      password: this.password,
      phone:this.phone,
      name:this.name
    });
  }

  onSignup() {
    const email = this.myform.value.email;
    const password = this.myform.value.password;
    this.authService.signupUser(email, password);
  }

    signinWithGoogle(){
    this.authService.signinWithGoogle();
  }

   signinWithFacebook(){
    this.authService.signinWithFacebook();
  }

}
