import { NgModule, APP_INITIALIZER, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule as OidcModule, OidcConfigService, OidcSecurityService, OpenIdConfiguration } from 'angular-auth-oidc-client';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OidcModule.forRoot()
  ],
})
export class AuthModule {
  constructor(
    private oidcConfigService: OidcConfigService,
    private oidcSecurityService: OidcSecurityService
  ) {
    this.oidcConfigService.onConfigurationLoaded.subscribe((result) => {
      const config: OpenIdConfiguration = {
        stsServer: result.customConfig.stsServer,
        redirect_url: environment.redirectUrl,
        client_id: environment.clientId,
        scope: 'openid profile email',
        response_type: 'id_token token'
      };

      this.oidcSecurityService.setupModule(config, result.authWellknownEndpoints);
    });
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        OidcConfigService,
        {
          provide: APP_INITIALIZER,
          useFactory: (oidcConfigService: OidcConfigService) => {
            return () => oidcConfigService.load_using_custom_stsServer(environment.stsServer);
          },
          deps: [OidcConfigService],
          multi: true,
        },
      ]
    };
  }
}
