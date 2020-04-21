import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'locations', pathMatch: 'full' },
      {
        path: 'locations',
        loadChildren: () =>
          import('./dash/locations/locations.module').then(
            (module) => module.LocationsModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./auth/login/login.module').then(
            (module) => module.LoginModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
