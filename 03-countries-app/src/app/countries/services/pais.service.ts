import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private fieldsToFilter: string[] = [
    'name',
    'flags',
    'capital',
    'population',
    'fifa',
  ];

  get httParams(): HttpParams {
    return new HttpParams().set('fields', this.fieldsToFilter.join(','));
  }

  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${term}`;
    return this.http.get<Country[]>(url, { params: this.httParams });
  }

  searchByCapital(capital: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url, { params: this.httParams });
  }

  searchCountryByCode(code: string): Observable<Country[]> {
    const url = `${this.baseUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url);
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httParams });
  }
}
