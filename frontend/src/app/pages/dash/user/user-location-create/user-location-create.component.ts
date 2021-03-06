import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';

import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  LocationModel,
  LocationRequestModel,
} from 'src/app/shared/models/location.model';
import { initMap } from 'src/app/shared/models/init-map';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-user-location-create',
  templateUrl: './user-location-create.component.html',
  styleUrls: ['./user-location-create.component.scss'],
})
export class UserLocationCreateComponent implements OnInit {
  locationForm: FormGroup;

  locations: LocationRequestModel[];

  constructor(
    public dialogRef: MatDialogRef<UserLocationCreateComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly matDialog: MatDialog,
    private locationService: LocationsService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.locations = [];
  }

  initForm(): void {
    this.locationForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      adressRaw: this.formBuilder.control('', [Validators.required]),
    });
  }

  geolocateMap() {
    const geocoderService = new google.maps.Geocoder();
    let id = 0;

    geocoderService.geocode(
      { address: this.locationForm.get('adressRaw').value },
      (results) => {
        this.locations = [];
        for (const result of results) {
          this.locations.push({
            id: result.place_id,
            adress: result.formatted_address,
            latitude: result.geometry.location.lat(),
            longitude: result.geometry.location.lng(),
            name: this.locationForm.get('name').value,
            type: result.types[0],
          });
        }
        this.changeDetectorRef.detectChanges();
        if (this.locations.length > 0) {
          initMap(this.locations);
        }
      }
    );
  }

  getLocationToRegister(location: LocationRequestModel) {
    this.locationService.createLocation(location).subscribe((res) => {
      this.matDialog.closeAll();
    });
  }
}
