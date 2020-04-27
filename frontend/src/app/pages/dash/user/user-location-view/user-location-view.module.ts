import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { UserLocationViewComponent } from './user-location-view.component';

import { MapCardModule } from 'src/app/shared/components/map-card/map-card.module';
import { UserLocationCreateComponent } from '../user-location-create/user-location-create.component';
import { UserLocationEditComponent } from '../user-location-edit/user-location-edit.component';

@NgModule({
  declarations: [
    UserLocationCreateComponent,
    UserLocationEditComponent,
    UserLocationViewComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MapCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
  exports: [UserLocationViewComponent],
})
export class UserLocationViewModule {}
