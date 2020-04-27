import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators';

import { LocationsService } from 'src/app/services/locations.service';
import { LocationModel } from 'src/app/shared/models/location.model';
import { Observable } from 'rxjs';

import { initMap } from '../../../../shared/models/init-map';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-locations-view',
  templateUrl: './locations-view.component.html',
  styleUrls: ['./locations-view.component.scss'],
})
export class LocationsViewComponent implements OnInit {
  locationsList: LocationModel[];

  locationsSubscription$: Observable<LocationModel[]>;

  locationsLength: string;
  pageSize: string = '10';
  page: string = '1';
  pageIndex: number;

  constructor(private readonly locationsService: LocationsService) {}

  ngOnInit(): void {
    this.assingSubscribe(this.page, this.pageSize);
  }

  assingSubscribe(page: string, pageSize?: string) {
    this.locationsSubscription$ = this.locationsService
      .getLocations(page, pageSize)
      .pipe(
        map((res) => {
          this.locationsLength = res.total;

          return res.locationsList;
        }),
        tap((list: LocationModel[]) => {
          if (!list || list.length === 0) return;
          initMap(list);
        })
      );
  }

  paginate(event: PageEvent) {
    const { pageIndex, pageSize } = event;

    this.pageIndex = pageIndex;
    this.pageSize = pageSize.toString();
    this.page = (pageIndex + 1).toString();

    this.assingSubscribe(this.page, this.pageSize);
  }
}
