import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing, appRoutingProvider } from "./app.routing";
import { LoginComponent } from './components/login/login.component';
import { SogetiService } from './services/sogeti.service';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { Tabletv1Component } from './components/tabletv1/tabletv1.component';
import { Tabletv2Component } from './components/tabletv2/tabletv2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Error404Component,
    Tabletv1Component,
    Tabletv2Component
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routing
  ],
  providers: [SogetiService, appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
