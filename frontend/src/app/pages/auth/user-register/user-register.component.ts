import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;

  registerError: { error: string; status: number };

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly sessionService: SessionService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.formBuilder.group({
      name: this.formBuilder.control('Anderson Menezes', [Validators.required]),
      email: this.formBuilder.control('anderson@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control('230115Amf', [Validators.required]),
    });
  }

  submitRegister(): void {
    this.sessionService.registerUser(this.registerForm.value).subscribe(
      (res) => {
        const userRegisterStringedResponse = JSON.stringify(res);

        window.sessionStorage.setItem(
          'userRegisterResponse',
          userRegisterStringedResponse
        );

        this.router.navigate(['../login'], { relativeTo: this.activatedRoute });
      },
      (err) => {
        this.registerError = err;
        setTimeout(() => {
          this.registerError = null;
        }, 3000);
      }
    );
  }
}
