import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions, Effect } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserRoles } from '../../models';
import { AuthService } from '../services/auth.service';
import {
  requestLogin,
  requestLoginFail,
  requestLoginSuccess,
} from './auth.actions';

@Injectable()
export class Userffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogin),
      switchMap((action) => {
        const { email, password, name } = action;
        return this.authService.login({ email, password, name });
      }),
      map((res) => res.result),
      map((token) =>
        requestLoginSuccess({
          token: token || '',
        })
      ),
      catchError(() => of(requestLoginFail()))
    )
  );
}
