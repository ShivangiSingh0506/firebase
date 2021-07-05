import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import * as firebase from 'firebase'
@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(private afAuth:AngularFireAuth) {
    // user: firebase.User
    afAuth.authState.subscribe(res=> console.log(res)
    );
   }
  logout()
  {
    this.afAuth.signOut();
  }

}
