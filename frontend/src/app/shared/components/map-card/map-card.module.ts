import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { MapCardComponent } from './map-card.component';

@NgModule({
  declarations: [MapCardComponent],
  imports: [CommonModule, FlexLayoutModule, MatCardModule],
  exports: [MapCardComponent],
})
export class MapCardModule {}
