import { Routes, RouterModule } from "@angular/router";
// import { PageNotFoundComponent } from "./not-found.component";
import { HomeComponent } from "./modules/home/home.component";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    // { path: '**', component: PageNotFoundComponent } // don't define any route after this line!
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes, { useHash: true });