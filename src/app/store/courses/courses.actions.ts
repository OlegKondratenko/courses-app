import { props, createAction } from '@ngrx/store';

export const requestAllCourses = createAction('[COURSES] Request courses');
export const requestAllCoursesSuccess = createAction(
  '[COURSES] Request courses',
  props<{ courses: any[] }>()
);
export const requestAllCoursesFail = createAction('[COURSES] Request courses');
export const requestSingleCourse = createAction('[COURSES] Request courses');
export const requestSingleCourseSuccess = createAction(
  '[COURSES] Request courses'
);
export const requestSingleCourseFail = createAction(
  '[COURSES] Request courses'
);
export const requestFilteredCourses = createAction('[COURSES] Request courses');
export const requestFilteredCoursesSuccess = createAction(
  '[COURSES] Request courses'
);
export const requestDeleteCourse = createAction('[COURSES] Request courses');
export const requestDeleteCourseFail = createAction(
  '[COURSES] Request courses'
);
export const requestEditCourse = createAction('[COURSES] Request courses');
export const requestEditCourseSuccess = createAction(
  '[COURSES] Request courses'
);
export const requestEditCourseFail = createAction('[COURSES] Request courses');
export const requestCreateCourse = createAction('[COURSES] Request courses');
export const requestCreateCourseSuccess = createAction(
  '[COURSES] Request courses'
);
export const requestCreateCourseFail = createAction(
  '[COURSES] Request courses'
);
