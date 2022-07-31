import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions, Effect } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthorsService } from 'src/app/services/authors.service';
import { requestAuthors, requestAuthorsSuccess } from './authors.actions';

@Injectable()
export class Userffects {
  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {}

  @Effect()
  getAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAuthors),
      switchMap(() => this.authorsService.getAll()),
      map((res) => res.result),
      map((authors) =>
        requestAuthorsSuccess({
          authors,
        })
      ),
      catchError(() => of(requestAuthors()))
    )
  );
}
