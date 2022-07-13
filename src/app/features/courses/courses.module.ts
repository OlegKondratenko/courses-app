import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseModule } from '../course/course.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CourseModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
