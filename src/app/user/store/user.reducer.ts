import { createReducer, on, Action } from '@ngrx/store';
import {
  requestCurrentUser,
  requestCurrentUserFail,
  requestCurrentUserSuccess,
} from './user.actions';

export const userFeatureKey = 'USER STORE';

const initialState: UserState = {
  isAdmin: false,
  name: '',
};

export interface UserState {
  isAdmin: boolean;
  name?: string;
}

export const reducer = createReducer(
  initialState,
  on(requestCurrentUserSuccess, (state, { isAdmin, name }) => ({
    ...state,
    isAdmin,
    name,
  })),
  on(requestCurrentUser, () => initialState),
  on(requestCurrentUserFail, () => initialState)
);

export const userReducer = (state: UserState, action: Action): UserState =>
  reducer(state, action);
