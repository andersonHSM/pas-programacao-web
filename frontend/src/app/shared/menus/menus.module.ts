import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MenusComponent } from './menus.component';

@NgModule({
  declarations: [MenusComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [MenusComponent],
})
export class MenusModule {}
