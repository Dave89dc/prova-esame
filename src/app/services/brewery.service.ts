import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Brewery } from '../models/brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor(private http:HttpClient) { }

  readonly BASE_URL = 'https://api.openbrewerydb.org/v1/breweries';
  PAGE:number =1;

  getBreweries():Observable<Brewery[]>{
    return this.http.get<any>(this.BASE_URL);
  }

}
