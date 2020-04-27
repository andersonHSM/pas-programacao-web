import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { UserLocationViewModule } from './user-location-view/user-location-view.module';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, UserLocationViewModule],
})
export class UserModule {}
