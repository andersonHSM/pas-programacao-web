import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from '../../../services/session.service';
import { LoginModel } from 'src/app/shared/models/login.model';
import { UserSessionModel } from 'src/app/shared/models/user-session.model';
import { Router } from '@angular/router';
import { UserRegisterReturnModel } from 'src/app/shared/models/user-register.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  loginError: { error: string; status: number };

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.checkForUserRegisterInfo();
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

  checkForUserRegisterInfo(): void {
    try {
      const userRegisterInfo: UserRegisterReturnModel = JSON.parse(
        sessionStorage.getItem('userRegisterResponse')
      );

      this.loginForm.get('email').setValue(userRegisterInfo.user.email);
    } catch (error) {}
  }

  submitLogin() {
    const data: LoginModel = this.loginForm.value;
    this.sessionService.login(data).subscribe(
      (res: UserSessionModel) => {
        const loginStringedResponse = JSON.stringify(res);

        window.localStorage.setItem(
          'userLoginResponseInfo',
          loginStringedResponse
        );

        window.sessionStorage.removeItem('userRegisterResponse');

        this.router.navigate(['']);
      },
      (err) => {
        this.loginError = err;
        setTimeout(() => {
          this.loginError = null;
        }, 3000);
      }
    );
  }
}
