import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserRoles } from 'src/app/models';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private name$$ = new BehaviorSubject('');
  private isAdmin$$ = new BehaviorSubject(false);
  public name$ = this.name$$.asObservable();
  public isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) {}

  getUser() {
    return this.userService.getUser().pipe(
      tap((res) => {
        if (res.successful) {
          this.name$$.next(res.result?.name || '');
          this.isAdmin$$.next(res.result?.role === UserRoles.ADMIN);
        }
      })
    );
  }
}
