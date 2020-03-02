import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isMenuOpen = false;

  constructor(
    public auth: AngularFireAuth
  ) { }

  public ngOnInit() {
    this.auth.user.subscribe((value) => {
      console.log(value)
    })
  }
}
