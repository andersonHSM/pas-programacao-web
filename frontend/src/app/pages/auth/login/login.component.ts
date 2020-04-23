import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SessionService } from '../../../services/session.service';
import { LoginModel } from 'src/app/shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control('', [Validators.required]),
    });
  }

  submitLogin() {
    const data: LoginModel = this.loginForm.value;
    this.sessionService.login(data).subscribe(console.log);
  }
}
