import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
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
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((module) => module.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
