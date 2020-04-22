import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  Renderer2,
} from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { LocationModel } from 'src/app/shared/models/location.model';

@Component({
  selector: 'app-locations-view',
  templateUrl: './locations-view.component.html',
  styleUrls: ['./locations-view.component.scss'],
})
export class LocationsViewComponent implements OnInit, AfterViewInit {
  @ViewChild('cardsContainer', { static: false })
  cardsContainer: ElementRef;
  locationsList: LocationModel[];

  constructor(
    private readonly locationsService: LocationsService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe((list) => {
      this.locationsList = list.locationsList;
      this.changeDetectorRef.detectChanges();
      this.initMap(this.locationsList);
    });
  }

  ngAfterViewInit(): void {
    // console.log(this.cardsContainer);
  }

  initMap(locations: LocationModel[]) {
    // console.log(locations);
    locations.forEach((location) => {
      const coordinates = {
        lat: location.latitude,
        lng: location.longitude,
      };

      const element = document.getElementById(`map-place-${location.id}`);

      const map = new google.maps.Map(element, {
        zoom: 16,
        center: coordinates,
      });

      const marker = new google.maps.Marker({ position: coordinates, map });
    });
  }
}
