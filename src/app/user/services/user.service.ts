import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';
import { UserResponse } from 'src/app/models';

const apiUrl = 'http://localhost:4000/';
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
}); // this should be implemented inside adapter

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionStorageService
  ) {}

  getUser() {

    return this.http.get<UserResponse>(apiUrl + 'users/me', {
      headers,
    });
  }
}
