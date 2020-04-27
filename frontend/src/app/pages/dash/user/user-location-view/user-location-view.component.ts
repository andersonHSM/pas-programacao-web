import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { LocationModel } from 'src/app/shared/models/location.model';
import { LocationsService } from 'src/app/services/locations.service';
import { initMap } from 'src/app/shared/models/init-map';

import { UserLocationCreateComponent } from '../user-location-create/user-location-create.component';
import { PageEvent } from '@angular/material/paginator';
import { UserLocationEditComponent } from '../user-location-edit/user-location-edit.component';

@Component({
  selector: 'app-user-location-view',
  templateUrl: './user-location-view.component.html',
  styleUrls: ['./user-location-view.component.scss'],
})
export class UserLocationViewComponent implements OnInit {
  locations$: Observable<LocationModel[]>;
  locations: LocationModel;

  userId: number;

  constructor(
    private readonly locationsService: LocationsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly matDialog: MatDialog
  ) {}

  locationsLength: string;
  pageSize: string = '10';
  page: string = '1';
  pageIndex: number;

  ngOnInit(): void {
    this.userId = this.activatedRoute.parent.snapshot.params?.['id'];
    this.loadLocations(this?.userId, this.page, this.pageSize);
  }

  loadLocations(id: number, page: string, pageSize: string) {
    this.locations$ = this.locationsService
      .getUserLocations(id, page, pageSize)
      .pipe(
        map((res) => {
          this.locationsLength = res.total;
          return res.locationsList;
        }),
        tap((res) => {
          initMap(res);
        }),
        catchError<any, any>((err) => {
          return throwError(err);
        })
      );
  }

  openLocationCreateDialog() {
    const dialog = this.matDialog.open(UserLocationCreateComponent, {
      width: '500px',
      maxHeight: '700px',
    });

    dialog.afterClosed().subscribe((res) => {
      this.loadLocations(this.userId, this.page, this.pageSize);
    });
  }

  paginate(event: PageEvent) {
    const { pageIndex, pageSize } = event;

    this.pageIndex = pageIndex;
    this.pageSize = pageSize.toString();
    this.page = (pageIndex + 1).toString();

    this.loadLocations(this.userId, this.page, this.pageSize);
  }

  deleteLocation(id: number) {
    this.locationsService.delete(id).subscribe((res) => {
      this.loadLocations(this.userId, this.page, this.pageSize);
    });
  }

  openLocationEditDialog(location: LocationModel) {
    const dialog = this.matDialog.open(UserLocationEditComponent, {
      width: '500px',
      maxHeight: '700px',
      data: location,
    });

    dialog.afterClosed().subscribe((res) => {
      this.loadLocations(this.userId, this.page, this.pageSize);
    });
  }
}
