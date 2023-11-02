import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { RentalAppComponent } from "./rental-app/rental-app.component";

export const routes : Routes = [
    { path: 'rentals', component: RentalAppComponent},     
    { path: '', component: RentalAppComponent}, //HomeComponent
    // { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)},
    { path: 'manage', loadComponent: () => import('./manage/home/home.component').then(m => m.HomeComponent)},
    { path: '**', redirectTo: '', pathMatch: 'full' },    
  ];