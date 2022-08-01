import { props, createAction } from '@ngrx/store';

export const requestCurrentUser = createAction('[USER] Request user');
export const requestCurrentUserSuccess = createAction(
  '[USER] Request user success',
  props<{ isAdmin: boolean; name: string }>()
);

export const requestCurrentUserFail = createAction('[USER] Request user fail');
