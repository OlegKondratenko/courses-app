import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthorInterface } from '../models';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreService {
  private isLoading$$ = new BehaviorSubject(false);
  private authors$$ = new BehaviorSubject<AuthorInterface[]>([]);
  private isLoading$ = this.isLoading$$.asObservable();
  private authors$ = this.authors$$.asObservable();
  constructor(private authorsService: AuthorsService) {}

  getAuthors(): void {
    this.authorsService.getAll().pipe(
      tap(() => this.isLoading$$.next(true)),
      tap((res) => this.authors$$.next(res.successful ? res.result : [])),
      tap(() => this.isLoading$$.next(false))
    );
  }

  getAuthor(id: string) {
    this.authorsService.getAuthor(id).pipe(
      tap(() => this.isLoading$$.next(true)),
      tap((res) =>
        this.authors$$.next(
          res.successful
            ? this.authors$$.getValue()?.filter((author) => author.id !== id)
            : []
        )
      ),
      tap(() => this.isLoading$$.next(false))
    );
  }
}
