import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  LocationRequestModel,
  LocationModel,
} from 'src/app/shared/models/location.model';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { LocationsService } from 'src/app/services/locations.service';
import { initMap } from 'src/app/shared/models/init-map';

@Component({
  selector: 'app-user-location-edit',
  templateUrl: './user-location-edit.component.html',
  styleUrls: ['./user-location-edit.component.scss'],
})
export class UserLocationEditComponent implements OnInit {
  locationForm: FormGroup;

  locations: LocationRequestModel[];

  locationId: number | string;

  constructor(
    public dialogRef: MatDialogRef<UserLocationEditComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly matDialog: MatDialog,
    private locationService: LocationsService,
    @Inject(MAT_DIALOG_DATA) private location: LocationModel
  ) {}

  ngOnInit(): void {
    this.changeDetectorRef.detach();
    this.initForm();
    this.locations = [];

    if (this.location.name && this.location.adress) {
      this.locationForm.setValue({
        name: this.location.name,
        adressRaw: this.location.adress,
      });
      this.locationId = this.location.id;
    }

    this.changeDetectorRef.detectChanges();
  }

  initForm(): void {
    this.locationForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      adressRaw: this.formBuilder.control('', [Validators.required]),
    });
  }

  geolocateMap() {
    const geocoderService = new google.maps.Geocoder();

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

  update(location: LocationRequestModel) {
    const { id, ...data } = location;
    this.locationService.update(this.locationId, data).subscribe((res) => {
      this.matDialog.closeAll();
    });
  }
}
