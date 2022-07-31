import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/auth/guards/admin.guard';
import { AuthorizedGuard } from 'src/app/auth/guards/authorized.guard';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    canLoad: [AuthorizedGuard],
  },
  {
    path: 'add',
    component: CoursesComponent,
    canLoad: [AuthorizedGuard, AdminGuard],
  },
  {
    path: ':id',
    component: CoursesComponent,
    canLoad: [AuthorizedGuard],
  },
  {
    path: 'edit/:id',
    component: CoursesComponent,
    canLoad: [AuthorizedGuard, AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
