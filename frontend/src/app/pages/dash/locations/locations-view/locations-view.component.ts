import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  NgZone,
} from '@angular/core';
import { tap, map } from 'rxjs/operators';

import { LocationsService } from 'src/app/services/locations.service';
import { LocationModel } from 'src/app/shared/models/location.model';
import { Observable } from 'rxjs';

import { initMap } from '../../../../shared/models/init-map';

@Component({
  selector: 'app-locations-view',
  templateUrl: './locations-view.component.html',
  styleUrls: ['./locations-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsViewComponent implements OnInit {
  @ViewChild('cardsContainer', { static: false })
  cardsContainer: ElementRef;
  locationsList: LocationModel[];

  locationsSubscription$: Observable<LocationModel[]>;

  constructor(private readonly locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsSubscription$ = this.locationsService.getLocations().pipe(
      map((res) => {
        return res.locationsList;
      }),
      tap((list: LocationModel[]) => {
        if (!list || list.length === 0) return;

        // this.initMap(list);
        initMap(list);
      })
    );
  }
}
