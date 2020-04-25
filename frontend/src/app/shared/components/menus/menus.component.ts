import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { checkUserLoginOnStorage } from '../../methods/check-user-login-on-storage';
import { UserSessionModel } from '../../models/user-session.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})
export class MenusComponent implements OnInit {
  loggedUserInfo: UserSessionModel;

  constructor(
    private sessionService: SessionService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loggedUserInfo = checkUserLoginOnStorage();
  }

  logout() {
    this.sessionService.logout().subscribe(
      () => {
        window.localStorage.removeItem('userLoginResponseInfo');
        this.loggedUserInfo = checkUserLoginOnStorage();
      },
      () => {
        window.localStorage.removeItem('userLoginResponseInfo');
        this.loggedUserInfo = checkUserLoginOnStorage();
      }
    );
  }
}
