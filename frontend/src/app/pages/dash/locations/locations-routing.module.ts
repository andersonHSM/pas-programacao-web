import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsComponent } from './locations.component';
import { LocationsViewComponent } from './locations-view/locations-view.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsComponent,
    children: [{ path: '', component: LocationsViewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
