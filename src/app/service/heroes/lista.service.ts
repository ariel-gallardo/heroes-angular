import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import Heroe from '../../heroes/heroe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export default class ListaService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient) { }

  getAll(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.heroesUrl);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
