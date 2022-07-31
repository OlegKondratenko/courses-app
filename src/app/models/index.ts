import { FormControl } from '@angular/forms';

export interface CourseCard {
  id?: number | string;
  title?: string;
  description?: string;
  creationDate?: Date | string;
  duration?: number;
  authors?: string[];
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

export interface AuthReqBody {
  name: string;
  email: string;
  password: string;
}
export interface AuthResponse {
  successful?: boolean;
  error?: string;
  result?: string;
}

export interface AuthorsResponse {
  successful?: boolean;
  error?: string;
  result: AuthorInterface[];
}
export interface AuthorResponse {
  successful?: boolean;
  error?: string;
  result: AuthorInterface;
}
export interface CoursesResponse {
  successful?: boolean;
  error?: string;
  result: CourseInterface[];
}

export interface AuthorInterface {
  name?: string;
  id?: string;
}

export interface CourseInterface {
  title?: string;
  description?: string;
  creationDate?: Date;
  duration?: number;
  authors: string[];
  id?: string;
}
export interface UserResponse {
  successful?: boolean;
  error?: string;
  result: UserInterface;
}

export interface UserInterface {
  name?: string;
  email?: string;
  password?: string;
  role?: UserRoles;
  id?: string;
}

export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}
