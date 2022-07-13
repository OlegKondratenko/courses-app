import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value?: string | null): string | null {
    if (!value) {
      return '00:00';
    }
    return new DatePipe('en-us').transform(value, 'hh:mm');
  }
}
