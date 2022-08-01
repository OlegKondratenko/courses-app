import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions, Effect } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { UserRoles } from '../../models';
import {
  requestAllCourses,
  requestAllCoursesFail,
  requestAllCoursesSuccess,
} from './courses.actions';

@Injectable()
export class Userffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}

  @Effect()
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAllCourses),
      switchMap(() => this.coursesService.getAll()),
      map((res) => res.result),
      map((courses) =>
        requestAllCoursesSuccess({
          courses,
        })
      ),
      catchError(() => of(requestAllCoursesFail()))
    )
  );
}
