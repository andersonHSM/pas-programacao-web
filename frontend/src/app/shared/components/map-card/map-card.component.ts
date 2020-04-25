import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';
import { LocationModel } from '../../models/location.model';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapCardComponent implements OnInit {
  @Input() location: LocationModel;

  constructor() {}

  ngOnInit(): void {}
}
