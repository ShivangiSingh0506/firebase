import { Component } from '@angular/core';
//import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import "firebase/auth";
import firebase from "firebase/app";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private afAuth: AngularFireAuth) {
   }
  login(){
   this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider() );
   console.log("logged in");


  }
}
