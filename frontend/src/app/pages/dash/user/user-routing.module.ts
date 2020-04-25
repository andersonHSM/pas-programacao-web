import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserLocationViewComponent } from './user-location-view/user-location-view.component';

const routes: Routes = [
  {
    path: ':id',
    component: UserComponent,
    children: [{ path: 'locations', component: UserLocationViewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
