import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// export const routes : Routes = [
//   { path: '**', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent},
//   { path: 'about', component: AboutComponent},
// ];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    // importProvidersFrom(MatButtonModule),
    // importProvidersFrom(MatIconModule)
]
};
