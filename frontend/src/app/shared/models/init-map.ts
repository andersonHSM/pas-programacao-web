import { LocationModel, LocationRequestModel } from './location.model';

export const initMap = (
  locations: LocationModel[] | LocationRequestModel[]
) => {
  setTimeout(() => {
    locations.forEach((location) => {
      const coordinates = {
        lat: location.latitude,
        lng: location.longitude,
      };

      const element = document.getElementById(`map-place-${location.id}`);
      if (!element) return;

      const map = new google.maps.Map(element, {
        zoom: 16,
        center: coordinates,
      });

      const marker = new google.maps.Marker({ position: coordinates, map });
    });
  }, 100);
};
