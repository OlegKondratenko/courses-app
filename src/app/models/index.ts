export interface CourseCard {
  id?: number | string;
  title: string;
  description: string;
  creationDate: Date | string;
  duration: number;
  authors: string[];
}
