import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routes } from './app.routes';

// export const routes : Routes = [
//   { path: '**', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent},
//   { path: 'about', component: AboutComponent},
// ];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
