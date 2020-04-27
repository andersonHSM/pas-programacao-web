import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { LocationsViewComponent } from './locations-view/locations-view.component';

import { MenusModule } from '../../../shared/components/menus/menus.module';
import { MapCardModule } from '../../../shared/components/map-card/map-card.module';

@NgModule({
  declarations: [LocationsViewComponent, LocationsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LocationsRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MenusModule,
    MapCardModule,
  ],
})
export class LocationsModule {}
