import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const apiUrl = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient, public router: Router) {}

  getMovies() {
    return this.http.get<any>(`${apiUrl}movies`, httpOptions);
  }
}
