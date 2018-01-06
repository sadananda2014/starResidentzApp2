import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

import { AuthService } from '../auth.service';
import { AlertService } from '../../_directives/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private authService: AuthService, private alertService: AlertService) { }

    myform:     FormGroup;
    email:      FormControl;
    password:   FormControl;
  ngOnInit() {
        this.createFormControls();
        this.createForm();
        //this.alertService.error("Signed out successfully")
  }

  createFormControls() { 
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() { 
    this.myform = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

onSignin() {
    const email = this.myform.value.email;
    const password = this.myform.value.password;
    this.authService.signinUser(email, password);
    this.alertService.error("Success");
  }

  signinWithGoogle(){
    this.authService.signinWithGoogle();
  }

   signinWithFacebook(){
    this.authService.signinWithFacebook();
  }
}
