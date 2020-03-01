import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data;
  public isMenuOpen = false;

  constructor(private oidcSecurityService: OidcSecurityService) { }

  public ngOnInit() {
    this.data = this.oidcSecurityService.getUserData();
  }
}
