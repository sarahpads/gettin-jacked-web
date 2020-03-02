import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public provider;

  constructor(
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.provider = new auth.GoogleAuthProvider()
  }

  public login() {
    this.auth.auth.signInWithRedirect(this.provider)
  }
}
