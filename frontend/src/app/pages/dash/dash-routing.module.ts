import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    children: [
      { path: '', redirectTo: 'locations', pathMatch: 'full' },
      {
        path: 'locations',
        loadChildren: () =>
          import('./locations/locations.module').then(
            (module) => module.LocationsModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((module) => module.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashRoutingModule {}
