
import { writable, type Writable } from 'svelte/store';
import { DEFAULT_LOCATION } from './constants';
interface SelectedCityType {
  lat: string
  lng: string
  city: string
}
export const selectedCity: Writable<SelectedCityType> = writable(DEFAULT_LOCATION);
