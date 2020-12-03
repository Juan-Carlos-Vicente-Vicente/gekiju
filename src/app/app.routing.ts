import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Datosv2Component } from './components/datosv2/datosv2.component';
import { Datosv3Component } from './components/datosv3/datosv3.component';
import { Datosv4Component } from './components/datosv4/datosv4.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Tabletv1Component } from './components/tabletv1/tabletv1.component';
import { Tabletv2Component } from './components/tabletv2/tabletv2.component';

const appRoutes: Routes = [
    { path: "", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "version1", component: Tabletv1Component },
    { path: "version2", component: Tabletv2Component },
    { path: "datosv2", component: Datosv2Component },
    { path: "datosv3", component: Datosv3Component },
    { path: "datosv4", component: Datosv4Component },
    { path: "**", component: Error404Component }
];
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);