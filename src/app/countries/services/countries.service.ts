import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCapital( term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    // En el return debemos poner un generico con el tipo de dato que esperamos recibir.
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([])) // Si sucede un error, en lugar del error regresa un observable vacio.
      );
  }

  searchCountry( term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;

    return this.http.get<Country[]>( url)
      .pipe(
        catchError( () => of([]))
      );
  }

  searchRegion( region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]))
      );
  }
}
