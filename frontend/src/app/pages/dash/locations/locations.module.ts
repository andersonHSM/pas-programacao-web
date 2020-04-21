import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { LocationsViewComponent } from './locations-view/locations-view.component';

import { MenusModule } from '../../../shared/menus/menus.module';

@NgModule({
  declarations: [LocationsViewComponent, LocationsComponent],
  imports: [CommonModule, LocationsRoutingModule, MenusModule],
})
export class LocationsModule {}
