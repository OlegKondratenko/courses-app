import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class CoursesStateFacade {
  constructor(private store: Store) {
    // this.store.pipe(select());
    // getCurrentUser():void{
    // }
  }
}
