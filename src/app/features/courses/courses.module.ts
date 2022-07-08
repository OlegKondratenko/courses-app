import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
