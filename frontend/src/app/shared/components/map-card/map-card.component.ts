import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  LocationModel,
  LocationRequestModel,
} from '../../models/location.model';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss'],
})
export class MapCardComponent implements OnInit {
  @Input() location: LocationModel;

  @Input() createView: boolean;

  @Input() saveEdit: boolean;

  @Output() locationToRegisterEmitter = new EventEmitter<
    LocationRequestModel
  >();

  @Output() locationToUpdateEmitter = new EventEmitter<LocationModel>();

  @Output() locationToDeleteEmitter = new EventEmitter<number>();

  @Output() locationToEditEmitter = new EventEmitter<LocationModel>();

  constructor() {}

  ngOnInit(): void {}

  emitToParentEdit() {
    this.locationToEditEmitter.emit(this.location);
  }

  emitToParentCreate() {
    const { adress, name, type, latitude, longitude } = this.location;

    this.locationToRegisterEmitter.emit({
      adress,
      name,
      type,
      latitude,
      longitude,
    });
  }

  emitToParentDelete() {
    this.locationToDeleteEmitter.emit(this.location.id);
  }

  emitToParentUpdate() {
    this.locationToUpdateEmitter.emit(this.location);
  }
}
