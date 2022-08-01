import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { requestCurrentUser } from './user.actions';
import { UserState } from './user.reducer';
import { getName, isAdmin } from './user.selectors';

@Injectable({ providedIn: 'root' })
export class UserStateFacade {
  name$ = this.store.pipe(select(getName));
  isAdmin$ = this.store.pipe(select(isAdmin));
  constructor(private store: Store<UserState>) {}
  getCurrentUser(): void {
    this.store.dispatch(requestCurrentUser());
  }
}
