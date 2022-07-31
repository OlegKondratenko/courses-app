import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CourseInterface } from 'src/app/models';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  @Input() list$?: Observable<CourseInterface[]>;
  @Input() isEditable: boolean = false;
  @Output() cardAction = new EventEmitter<string>();
  faPen = faPen;
  faTrashCan = faTrashCan;

  constructor() {}
  ngOnInit(): void {}
}
