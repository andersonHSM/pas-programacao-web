import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit, AfterViewInit {
  @ViewChild('myMap', { static: false }) private gmap: ElementRef;

  map: google.maps.Map;
  marker: google.maps.Marker;

  lat = -10.970027;
  long = -37.062117;

  coordinates = new google.maps.LatLng(this.lat, this.long);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 16,
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });
  }
}
