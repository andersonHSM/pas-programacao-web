import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserSessionModel } from '../shared/models/user-session.model';
import { LoginModel } from '../shared/models/login.model';

import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private readonly httpClient: HttpClient) {}

  login(data: LoginModel): Observable<UserSessionModel> {
    return this.httpClient.post<UserSessionModel>(`${apiUrl}/login/`, data);
  }
}
