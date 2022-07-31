import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, catchError, filter, map, tap } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
import { AuthReqBody, AuthResponse } from 'src/app/models';

const apiUrl = 'http://localhost:4000/';
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject(false);
  public isAuthorized$ = this.isAuthorized$$.pipe(map((val) => val));
  error = '';

  constructor(
    public sessionService: SessionStorageService,
    private http: HttpClient
  ) {}

  login({ password, name, email }: AuthReqBody) {
    return this.http
      .post<AuthResponse>(
        apiUrl + 'login',
        { password, name, email },
        { headers }
      )
      .pipe(
        tap((res) => {
          this.sessionService.setToken(res?.result);
          this.isAuthorized$$.next(true);
        })
      );
  }

  logout() {
    return this.http
      .delete<AuthResponse>(apiUrl + 'logout', { ...headers })
      .pipe(
        filter((res) => Boolean(res.successful)),
        tap(() => {
          this.sessionService.deleteToken();
          this.isAuthorized$$.next(false);
        }),
        catchError((err) => (this.error = err))
      );
  }

  register(userDTO: AuthReqBody) {
    console.log(userDTO);
    return this.http
      .post<AuthResponse>(apiUrl + 'register', userDTO, { ...headers })
      .pipe(tap((res) => console.log('AUTH SERVICE', res)));
  }
}
