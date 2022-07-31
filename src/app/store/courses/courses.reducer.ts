import { createReducer, on, Action } from '@ngrx/store';
import { CourseInterface } from 'src/app/models';
import {
  requestAllCourses,
  requestAllCoursesFail,
  requestAllCoursesSuccess,
  requestCreateCourse,
  requestCreateCourseFail,
  requestCreateCourseSuccess,
  requestDeleteCourse,
  requestDeleteCourseFail,
  requestEditCourse,
  requestEditCourseFail,
  requestEditCourseSuccess,
  requestFilteredCourses,
  requestFilteredCoursesSuccess,
  requestSingleCourse,
  requestSingleCourseFail,
  requestSingleCourseSuccess,
} from './courses.actions';

export const userFeatureKey = 'COURSES STORE';

const initialState: CoursesState = {
  allCourses: [],
  courses: [],
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: '',
};

export interface CoursesState {
  allCourses: any[];
  courses: any[];
  course?: CourseInterface;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}

export const reducer = createReducer(
  initialState,
  on(requestAllCourses, () => initialState),
  on(requestAllCoursesSuccess, () => initialState),
  on(requestAllCoursesFail, () => initialState),
  on(requestSingleCourse, () => initialState),
  on(requestSingleCourseSuccess, () => initialState),
  on(requestSingleCourseFail, () => initialState),
  on(requestFilteredCourses, () => initialState),
  on(requestFilteredCoursesSuccess, () => initialState),
  on(requestDeleteCourse, () => initialState),
  on(requestDeleteCourseFail, () => initialState),
  on(requestEditCourse, () => initialState),
  on(requestEditCourseSuccess, () => initialState),
  on(requestEditCourseFail, () => initialState),
  on(requestCreateCourse, () => initialState),
  on(requestCreateCourseSuccess, () => initialState),
  on(requestCreateCourseFail, () => initialState)
);

export const coursesReducer = (
  state: CoursesState,
  action: Action
): CoursesState => reducer(state, action);
