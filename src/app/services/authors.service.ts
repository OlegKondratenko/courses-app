import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorResponse, AuthorsResponse } from '../models';

const apiUrl = 'http://localhost:4000/';
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
}); // this should be implemented inside adapter

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<AuthorsResponse>(apiUrl + 'authors/all', {
      headers,
    });
  }

  getAuthor(id: string) {
    return this.http.get<AuthorResponse>(apiUrl + `authors/${id}`, {
      headers,
    });
  }
}
