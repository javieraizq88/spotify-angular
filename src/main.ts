import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './assets/environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { InjectSessionInterceptor } from './app/core/interceptors/inject-session.interceptor';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(BrowserModule),
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi())
  ]

}
)
  .catch(err => console.error(err));
