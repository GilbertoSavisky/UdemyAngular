import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from '../app.api';
import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {

        constructor(private http: HttpClient) { }

        restaurants(search?: string): Observable <Restaurant[]> {
          let params: HttpParams;
          if (search) {
            params = new HttpParams().set('q', search);
          }
            return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params});
        }

        restaurantsById(id: string): Observable<Restaurant> {
            return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
        }

        reviewsOfRestaurant(id: string): Observable<any> {
            return this.http.get(`${MEAT_API}/restaurant/${id}/reviews`);
        }

        menuOfRestaurant(id: string): Observable<MenuItem[]> {
            return this.http.get<MenuItem[]>(`${MEAT_API}/restaurant/${id}/menu`);
        }
}
