import { FormControl } from '@angular/forms';

export interface CourseCard {
  id?: number | string;
  title: string;
  description: string;
  creationDate: Date | string;
  duration: number;
  authors: string[];
}

export interface LofinFormModel {
  password: string;
  email: string;
}

export interface RegisterFormModel {
  password: FormControl<string | null>;
  email: FormControl<string | null>;
  name: FormControl<string | null>;
}
