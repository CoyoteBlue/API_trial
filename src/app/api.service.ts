import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
/*import {environment} from 'src/environments/environment';*/
/*import {environment} from 'src/environments/environment.prod';*/
/*import { Http, Response } from '@angular/http'; */
/*import { Customers } from './customers';*/
/*import { Observable } from 'rxjs/Observable'; */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { map, filter, scan, switchMap, catchError } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver, throwError } from 'rxjs';
import 'rxjs/Rx';

const API_URL = environment.apiUrl;

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

/*  public getAllCustomers(): Observable<Customers[]> {
  return this.http
    .get(API_URL + '/customers')
    .map(response => {
/*      let url = this.url + '/customers'; */
     /* const customers = response.json();
      return customers.map((customers) => new customers(customers));
    })
  /*  .catch(this.handleError); */
/*  } */

}
