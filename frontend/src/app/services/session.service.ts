import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { UserSessionModel } from '../shared/models/user-session.model';
import { LoginModel } from '../shared/models/login.model';

import { environment } from 'src/environments/environment';
import {
  UserRegisterModel,
  UserRegisterReturnModel,
} from '../shared/models/user-register.model';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private readonly httpClient: HttpClient) {}

  registerUser(data: UserRegisterModel): Observable<UserRegisterReturnModel> {
    return this.httpClient
      .post<UserRegisterReturnModel>(`${apiUrl}/users/`, data)
      .pipe(
        catchError<any, any>((err: HttpErrorResponse) => {
          const { error, status } = err;
          if (error && error.error) {
            const message = {
              error: error.error,
              status,
            };

            return throwError(message);
          }
          return throwError({
            error: 'An error has ocurred, please try again.',
            status: 422,
          });
        })
      );
  }

  login(data: LoginModel): Observable<UserSessionModel> {
    return this.httpClient
      .post<UserSessionModel>(`${apiUrl}/login/`, data)
      .pipe(
        catchError<any, any>((err: HttpErrorResponse) => {
          const { error, status } = err;
          const errorInfo = {
            error: error.error,
            status,
          };

          return throwError(errorInfo);
        })
      );
  }

  logout(): Observable<void> {
    return this.httpClient.post<void>(`${apiUrl}/logout/`, '').pipe(
      catchError<any, any>((err: HttpErrorResponse) => {
        const { error } = err;
        if (error.error === 'Provided token is no longer valid.') {
          return throwError({ error: 'User already logged out.' });
        }

        return throwError(err);
      })
    );
  }
}
