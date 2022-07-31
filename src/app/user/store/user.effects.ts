import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions, Effect } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserStoreService } from '../services/user-store.service';
import { UserService } from '../services/user.service';
import { UserRoles } from '../../models';
import {
  requestCurrentUser,
  requestCurrentUserFail,
  requestCurrentUserSuccess,
} from './user.actions';

@Injectable()
export class Userffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private userStoreService: UserStoreService
  ) {}

  @Effect()
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestCurrentUser),
      switchMap(() => this.userStoreService.getUser()),
      map((res) => res.result),
      map((user) =>
        requestCurrentUserSuccess({
          name: user?.name || '',
          isAdmin: user?.role === UserRoles.ADMIN,
        })
      ),
      catchError(() => of(requestCurrentUserFail()))
    )
  );
}
