import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { map, filter, scan, switchMap, catchError } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver, throwError } from 'rxjs';
import 'rxjs/Rx';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'cust',
  providers: [ApiDataService],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

/*  customers: Customers[] = []; */
  customers = [];
  constructor(
    private apiDataService: ApiDataService
  ) {
  }

  public ngOnInit() {
    this.apiDataService
      .getAllCustomers()
/*     .subscribe( value => console.log(value)); */
      .subscribe(
        (customers) => {
          this.customers = customers;
        }
      );
  }

}
