import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  LocationsList,
  LocationModel,
  LocationRequestModel,
} from '../shared/models/location.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private readonly httpClient: HttpClient) {}

  createLocation(data: LocationRequestModel): Observable<LocationModel> {
    return this.httpClient.post<LocationModel>(`${apiUrl}/locations/`, data);
  }

  getLocations(page?: string, pageSize?: string): Observable<LocationsList> {
    return this.httpClient.get<LocationsList>(`${apiUrl}/locations`, {
      params: { page, limit: pageSize },
    });
  }

  getUserLocations(
    id: number,
    page: string,
    pageSize: string
  ): Observable<LocationsList> {
    return this.httpClient.get<LocationsList>(
      `${apiUrl}/user/${id}/locations`,
      {
        params: { page, limit: pageSize },
      }
    );
  }

  update(id: number | string, data: LocationRequestModel) {
    return this.httpClient.patch(`${apiUrl}/locations/${id}`, data);
  }

  delete(id: number) {
    return this.httpClient.delete(`${apiUrl}/locations/${id}`);
  }
}
