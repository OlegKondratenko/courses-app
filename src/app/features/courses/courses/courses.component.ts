import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$ = this.coursesStoreService.getAll();
  constructor(private coursesStoreService: CoursesStoreService) {}

  ngOnInit(): void {}
}
