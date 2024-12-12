import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';


import {FormsModule} from '@angular/forms';
//import { SlickCarouselModule } from 'ngx-slick-carousel';

import {HttpClientModule} from "@angular/common/http";


import {AsyncPipe, CommonModule} from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AsyncPipe,
    HttpClientModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
