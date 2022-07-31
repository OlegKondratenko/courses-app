import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringJoiner' })
export class stringJoinerPipe implements PipeTransform {
  transform(values: string[], separator: string): string {
    return values.join(separator);
  }
}
