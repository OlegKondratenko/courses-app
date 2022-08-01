import { Component, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { LofinFormModel } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: LofinFormModel = { password: '', email: '' };
  email!: ValidationErrors;
  password!: ValidationErrors;

  submitted = false;

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    this.submitted = true;
  }
}
