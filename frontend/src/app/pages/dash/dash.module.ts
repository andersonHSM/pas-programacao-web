import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';

import { MenusModule } from 'src/app/shared/components/menus/menus.module';

@NgModule({
  declarations: [DashComponent],
  imports: [CommonModule, DashRoutingModule, MenusModule],
})
export class DashModule {}
