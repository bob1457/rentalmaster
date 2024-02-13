import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PropertyComponent } from "./property/property.component";
import { TenantComponent } from "./tenant/tenant.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const ManageRoutes: Route[] = [
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'properties', component: PropertiesComponent },
    // { path: 'tenants', component: TenantsComponent },
    { path: '', component: DashboardComponent },
    { path: 'property', component: PropertyComponent},
    { path: 'tenant', component: TenantComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ];