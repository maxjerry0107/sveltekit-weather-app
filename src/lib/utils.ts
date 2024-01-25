import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { PUBLIC_TOMORROW_MAP_API_KEY } from '$env/static/public';
import { WEATHER_MAP_TILE_BASE_URL } from "./constants";

let isLoadingLibrary = false


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTileURL(code: string) {
  return `${WEATHER_MAP_TILE_BASE_URL}/${code}/now.png?apikey=${PUBLIC_TOMORROW_MAP_API_KEY}`
}

export function getMapboxStyleURL(theme: string) {
  return `mapbox://styles/mapbox/${theme}-v11`;
}

export function encode(city: string) {
  const bytes = new TextEncoder().encode(city);
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
}
export function decode(base64: string) {
  const binString = atob(base64);
  const buff = Uint8Array.from(binString, (m) => m.codePointAt(0))
  return new TextDecoder().decode(buff);
}


export function loadGooglePlacesLibrary(apiKey: string, callback: () => void) {
  if (window.google && window.google.maps && window.google.maps.places) {
    callback()
    return
  }

  if (isLoadingLibrary) {
    return
  }

  isLoadingLibrary = true

  const element = document.createElement('script')
  element.async = true
  element.defer = true
  element.onload = () => {
    isLoadingLibrary = false
    callback()
  }
  element.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places`
  element.type = 'text/javascript'

  document.head.appendChild(element)
}