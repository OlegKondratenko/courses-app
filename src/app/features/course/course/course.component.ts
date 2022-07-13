import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
const alphanumericReg = /^(?:[a-zA-Z0-9]+)?$/;
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  courseForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', Validators.required],
    authors: this.fb.array(['some', 'values'], [Validators.required]),
    newAuthor: this.fb.group({
      name: ['', [Validators.required, Validators.pattern(alphanumericReg)]],
    }),
    duration: ['', [Validators.required, Validators.min(0)]],
  });
  couses: any[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get authors() {
    return this.courseForm.get('authors') as FormArray;
  }

  get description() {
    return this.courseForm.get('description');
  }

  get title() {
    return this.courseForm.get('title');
  }

  get duration() {
    return this.courseForm.get('duration');
  }

  get name() {
    return this.courseForm.get('newAuthor')?.get('name');
  }

  addAuthor() {
    this.duration?.value;
    const authorName = this.name?.value;
    this.authors.push(this.fb.control(authorName));
  }

  deleteAuthor(i: number) {
    this.authors.removeAt(i);
  }

  createCourse() {}
}
