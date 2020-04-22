export interface LocationModel {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  type: string;
  adress: string;
  user_id: number;
}

export interface LocationsList {
  locationsList: LocationModel[];
}
