import { createReducer, on, Action } from '@ngrx/store';
import {
  requestAddAuthor,
  requestAddAuthorFail,
  requestAddAuthorSuccess,
  requestAuthors,
  requestAuthorsFail,
  requestAuthorsSuccess,
  resetAddedAuthor,
} from './authors.actions';

export const userFeatureKey = 'AUTHORS STORE';

const initialState: AuthorsState = {
  authors: [],
  addedAuthor: '',
};

export interface AuthorsState {
  authors: any[];
  addedAuthor: string;
}

export const reducer = createReducer(
  initialState,
  on(requestAuthors, () => initialState),
  on(requestAuthorsSuccess, () => initialState),
  on(requestAuthorsFail, () => initialState),
  on(requestAddAuthor, () => initialState),
  on(requestAddAuthorSuccess, () => initialState),
  on(requestAddAuthorFail, () => initialState),
  on(resetAddedAuthor, () => initialState)
);

export const authorsReducer = (
  state: AuthorsState,
  action: Action
): AuthorsState => reducer(state, action);
