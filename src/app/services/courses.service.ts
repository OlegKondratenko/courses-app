import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseInterface, CoursesResponse } from '../models';

const apiUrl = 'http://localhost:4000/';
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
}); // this should be implemented inside adapter

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<CoursesResponse>(apiUrl + 'courses/all', {
      headers,
    });
  }

  createCourse(course: CourseInterface) {
    return this.http.post<CoursesResponse>(
      apiUrl + 'courses/add',
      { ...course },
      {
        headers,
      }
    );
  }

  getCourse(id: string) {
    return this.http.get<CoursesResponse>(apiUrl + `courses/${id}`, {
      headers,
    });
  }

  editCourse(id: string, course: CourseInterface) {
    return this.http.put<CoursesResponse>(
      apiUrl + `courses/${id}`,
      { ...course },
      {
        headers,
      }
    );
  }

  deleteCourse(id: string) {
    return this.http.delete<CoursesResponse>(apiUrl + `courses/${id}`, {
      headers,
    });
  }
}
