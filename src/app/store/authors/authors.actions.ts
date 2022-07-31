import { props, createAction } from '@ngrx/store';

export const requestAuthors = createAction('[AUTHORS] Request author');
export const requestAuthorsSuccess = createAction(
  '[USER] Request user success',
  props<{ authors: any[] }>()
);
export const requestAuthorsFail = createAction('[AUTHORS] Request author fail');
export const requestAddAuthor = createAction('[AUTHORS] Request add author');
export const requestAddAuthorSuccess = createAction(
  '[AUTHORS] Request add author success'
);
export const requestAddAuthorFail = createAction(
  '[AUTHORS] Request add author fail'
);
export const resetAddedAuthor = createAction('[AUTHORS] Reset added user');
