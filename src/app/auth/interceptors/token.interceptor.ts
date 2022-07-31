import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SessionStorageService } from '../services/session-storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private sessionService: SessionStorageService,
    private router: Router,
    private authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.sessionService.getToken();
    const tokenizedReq = request.clone({
      headers: request.headers.append('Autorization', token || ''),
    });

    return next.handle(tokenizedReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse)
            console.log('Server response111111', event);
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            console.log('Server error1111111111111');
            if (err.status == 401) {
              this.authService
                .logout()
                .subscribe(() => this.router.navigateByUrl('/login'));
            }
          }
        }
      )
    );
  }
}
