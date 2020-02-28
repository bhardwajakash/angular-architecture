import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<any> {
      return of([
        {
          id: 1,
          name: 'Phone XL',
          price: 799,
          description: 'A large phone with one of the best screens'
        },
        {
          id: 2,
          name: 'Phone Mini',
          price: 699,
          description: 'A great phone with one of the best cameras'
        },
        {
          id: 3,
          name: 'Phone Standard',
          price: 299,
          description: ''
        }
      ]);
  }
}
