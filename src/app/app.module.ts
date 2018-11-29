import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashComponent } from './splash/splash.component';
import { MenuComponent } from './menu/menu.component';
import { MainfilterPipe } from './mainfilter.pipe';
import { StarterfilterPipe } from './starterfilter.pipe';
import { DessertfilterPipe } from './dessertfilter.pipe';
import { ApiDataService } from './api-data.service';
import { ApiService } from './api.service';

import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
/*import { AppRoutingModule, routingComponents } from './app.routing';*/
import { Pipe, PipeTransform } from '@angular/core';
import {getLocaleCurrencySymbol} from "@angular/common";
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { map, filter, scan, switchMap, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
/*import {environment} from 'src/environments/environment';*/
/*import {environment} from 'src/environments/environment.prod';*/


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SplashComponent,
    MenuComponent,
    MainfilterPipe,
    StarterfilterPipe,
    DessertfilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
