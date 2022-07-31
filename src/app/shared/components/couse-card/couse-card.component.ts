import { Component, Input, OnInit } from '@angular/core';
import { from, map, Observable, of, switchMap, tap, toArray } from 'rxjs';
import { AuthorInterface, CourseCard } from 'src/app/models';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-couse-card',
  templateUrl: './couse-card.component.html',
  styleUrls: ['./couse-card.component.scss'],
})
export class CouseCardComponent implements OnInit {
  @Input() item?: CourseCard;
  authors: AuthorInterface[] = [];
  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {
    if (this.item?.authors) {
      from(this.item?.authors)
        .pipe(
          switchMap((id) => this.authorsService.getAuthor(id)),
          map((res) => res.result),
          toArray()
        )
        .subscribe((authors) => (this.authors = authors));
    }
  }
}
