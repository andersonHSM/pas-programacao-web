export interface LocationRequestModel {
  id?: number | string;
  name: string;
  latitude: number;
  longitude: number;
  type: string;
  adress: string;
}

export interface LocationModel extends LocationRequestModel {
  id: number;
  user_id?: number;
}

export interface LocationsList {
  locationsList: LocationModel[];
  total: string;
  pageSize?: string;
}
