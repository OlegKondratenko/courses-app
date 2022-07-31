import { createReducer, on, Action } from '@ngrx/store';
import {
  requestLogin,
  requestLoginFail,
  requestLoginSuccess,
  requestLogout,
  requestLogoutSuccess,
  requestRegister,
  requestRegisterFail,
  requestRegisterSuccess,
} from './auth.actions';

export const authFeatureKey = 'AUTH STORE';

const initialState: AuthState = {
  isAuthorized: false,
  token: '',
  errorMessage: '',
};

export interface AuthState {
  isAuthorized: boolean;
  token: string;
  errorMessage: string;
}

export const reducer = createReducer(
  initialState,
  on(requestLogin, () => initialState),
  on(requestLoginSuccess, () => initialState),
  on(requestLoginFail, () => initialState),
  on(requestRegister, () => initialState),
  on(requestRegisterSuccess, () => initialState),
  on(requestRegisterFail, () => initialState),
  on(requestLogout, () => initialState),
  on(requestLogoutSuccess, () => initialState)
);

export const authReducer = (state: AuthState, action: Action): AuthState =>
  reducer(state, action);
