import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { RentalAppComponent } from "./rental-app/rental-app.component";

export const routes : Routes = [
    { path: 'rentals', component: RentalAppComponent},     
    { path: '', component: RentalAppComponent}, //HomeComponent
    // { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' },    
  ];