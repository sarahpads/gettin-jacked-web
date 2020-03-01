import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDFqwf3XMLYR28BOO7YHP35grgGgBvqmNg",
      authDomain: "gettin-jacked.firebaseapp.com",
      databaseURL: "https://gettin-jacked.firebaseio.com",
      projectId: "gettin-jacked",
      storageBucket: "gettin-jacked.appspot.com",
      messagingSenderId: "1018739243673",
      appId: "1:1018739243673:web:77aec7b3e60b160c4c5608"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
