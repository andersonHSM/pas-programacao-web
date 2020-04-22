import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LocationsList } from '../shared/models/location.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private readonly httpClient: HttpClient) {}

  getLocations(): Observable<LocationsList> {
    return this.httpClient.get<LocationsList>(`${apiUrl}/locations`);
  }
}
