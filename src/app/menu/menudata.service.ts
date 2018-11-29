import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { map, filter, scan, switchMap, catchError } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver, throwError } from 'rxjs';
import 'rxjs/Rx';

/*import { Pipe, PipeTransform } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'; */
/*import { webSocket } from 'rxjs/webSocket';*/

interface MenuData {
  id: number,
  type: string,
  title: string,
  description: string,
  price: number
}
/* @Injectable(({providedIn:'root'}) as any) */
@Injectable()
export class MenudataService {

  private _url: string = "src/apidata/menudata.json"

  constructor(private http: HttpClient) { }

  getMenuComponent(): Observable <MenuData[]> {
    return this.http.get<MenuData[]>(this._url)
/*      .pipe(map((data => { console.log("Menu", data) }))); */
  }
}
