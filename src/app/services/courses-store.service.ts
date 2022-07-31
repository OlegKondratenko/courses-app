import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { CourseInterface } from '../models';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject(false);
  private courses$$ = new BehaviorSubject<CourseInterface[]>([]);
  public isLoading$ = this.isLoading$$.asObservable();
  public courses$ = this.courses$$.asObservable();

  constructor(private coursesService: CoursesService) {}

  getAll() {
    return this.coursesService.getAll().pipe(
      tap(() => this.isLoading$$.next(true)),
      tap((res) => this.courses$$.next(res.successful ? res.result : [])),
      tap(() => this.isLoading$$.next(false)),
      switchMap(() => this.courses$)
    );
  }

  createCourse() {}
  editCourse() {}
  getCourse() {}
  deleteCourse() {}
}
