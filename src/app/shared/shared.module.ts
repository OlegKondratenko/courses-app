import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CouseCardComponent } from './components/couse-card/couse-card.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { InfoComponent } from './components/info/info.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';

const COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  CouseCardComponent,
  CoursesListComponent,
  InfoComponent,
  ModalWindowComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FontAwesomeModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
