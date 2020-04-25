import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { checkUserLoginOnStorage } from '../../shared/methods/check-user-login-on-storage';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = checkUserLoginOnStorage();

    if (currentUser) {
      const { token } = currentUser;
      const authRequest = request.clone({
        // headers: request.headers.set('Authorization', `Bearer ${token}`),
        setHeaders: { Authorization: `Bearer ${token}` },
      });

      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
