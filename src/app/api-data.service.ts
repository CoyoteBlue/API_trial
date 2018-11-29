import { Injectable } from '@angular/core';
/*import { Customers } from './customers';*/
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

interface Customers {
  id: number,
  gender: string,
  name: string,
  address1: string,
  address2: string,
  city: string,
  occupation: string,
  phone: string,
  billingId: number,
}

@Injectable()
export class ApiDataService {

  constructor(
  private api: ApiService
) {
}

// Simulate GET /Customers
getAllCustomers(): Observable<Customers[]> {
  return this.api.getAllCustomers();
}

}
