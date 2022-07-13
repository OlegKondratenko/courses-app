import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';
import { RegistrationModule } from './features/registration/registration.module';
import { CoursesModule } from './features/courses/courses.module';
import { CourseModule } from './features/course/course.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FontAwesomeModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    CoursesModule,
    CourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee, faEye);
  }
}
