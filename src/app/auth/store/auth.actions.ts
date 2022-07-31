import { props, createAction } from '@ngrx/store';

export const requestLogin = createAction(
  '[AUTH] request Login',
  props<{ email: string; password: string; name: string }>()
);
export const requestLoginSuccess = createAction(
  '[AUTH] request Login Success',
  props<{ token: string }>()
);
export const requestLoginFail = createAction('[AUTH] request Login Fail');
export const requestRegister = createAction('[AUTH] request Register');
export const requestRegisterSuccess = createAction(
  '[AUTH] request Register Success'
);
export const requestRegisterFail = createAction('[AUTH] request Register Fail');
export const requestLogout = createAction('[AUTH] request Logout');
export const requestLogoutSuccess = createAction(
  '[AUTH] request Logout Success'
);

export const requestCurrentUserSuccess = createAction(
  '[USER] Request user success',
  props<{ isAdmin: boolean; name: string }>()
);

export const requestCurrentUserFail = createAction('[USER] Request user fail');
