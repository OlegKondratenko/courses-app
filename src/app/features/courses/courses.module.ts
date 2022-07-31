import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseModule } from '../course/course.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CourseModule, CoursesRoutingModule, SharedModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
