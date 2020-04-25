import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLocationViewComponent } from './user-location-view/user-location-view.component';
import { UserLocationCreateComponent } from './user-location-create/user-location-create.component';


@NgModule({
  declarations: [UserComponent, UserLocationViewComponent, UserLocationCreateComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
