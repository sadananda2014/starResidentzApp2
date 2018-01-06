import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "Rxjs";


import { AlertService } from '../_directives/alert.service';



@Injectable()
export class AuthService {
  token: string;
  user: object = {};

  constructor(private zone:NgZone, private router: Router, public afAuth: AngularFireAuth, private alertService: AlertService) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(response => {
          this.navigateto('/signin');
          this.alertService.success('User register success fully');
        })
      .catch(
        error => {console.log(error); this.alertService.error(error.message);}
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.alertService.success('User signed in success fully');
          this.navigateto('/home');
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => {  console.log(error); this.alertService.error(error.message);}
      );
  }

  
signinWithGoogle(){
  let provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider)
        .then(
          response =>{
            this.alertService.success("Signed in with google successfull");
            this.token = response.credential.accessToken; 
            console.log(response.user);
            this.zone.run(() => this.navigateto('/'));
    })
    .catch(
        error => {
    // Handle Errors here.
      console.log(error); 
      this.alertService.error(error.message);
  });
}

signinWithFacebook(){
  this.afAuth.auth.signInWithPopup(new
  firebase.auth.FacebookAuthProvider()).then(
    response =>{
       console.log("Facebook Successfully");
       this.token = response.credential.accessToken; 
       this.alertService.success("Signed in with Facebook successfull");
       this.zone.run(() => this.navigateto('/'));
       console.log(response.credential.accessToken);
    }
  ).catch(
         error => {  
           console.log(error); 
           this.alertService.error(error.message);
          }
      );
}


  logout() {
    firebase.auth().signOut();
    this.token = null;
     this.alertService.success("Signed out successfully")
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  getCurrentUser(){
    return this.token != null;
  }

  navigateto(menu){
    var stopCondition = false;
     setTimeout(()=>{
         this.router.navigate([menu]);
     },2000)
  }
}
