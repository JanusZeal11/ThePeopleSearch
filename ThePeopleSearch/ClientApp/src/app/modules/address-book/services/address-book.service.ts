import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  API_URL = "https://localhost:44302";  //TODO: Setup environment setting for field

  constructor(
    private http: HttpClient
  ) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.API_URL}/api/People`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.API_URL}/api/People/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  addPerson(person: Person) {
    return this.http.post(`${this.API_URL}/api/People`, person)
      .pipe(
        catchError(this.handleError)
      );
  }

  updatePerson(id: number, person: Person) {
    return this.http.put(`${this.API_URL}/api/People/${id}`, person)
      .pipe(
        catchError(this.handleError)
      );
  }

  removePerson(id: number) {
    return this.http.delete(`${this.API_URL}/api/People/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
