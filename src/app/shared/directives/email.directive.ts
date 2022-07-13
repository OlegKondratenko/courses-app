import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
const simpleEmailRegex = /^\S+@\S+\.\S+$/;

export function emailValidator(nameRe?: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('REG EXP', nameRe, !!nameRe)
    nameRe = nameRe ? nameRe : simpleEmailRegex;
    const forbidden = !nameRe.test(control.value);
    return forbidden ? { email: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator(simpleEmailRegex)(control);
  }
}
