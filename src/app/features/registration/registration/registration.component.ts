import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RegisterFormModel } from 'src/app/models';
import { emailValidator } from 'src/app/shared/directives/email.directive';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup<RegisterFormModel> = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
}
