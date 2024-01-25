import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { PUBLIC_TOMORROW_MAP_API_KEY } from '$env/static/public';
import { WEATHER_MAP_TILE_BASE_URL } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTileURL(code: string) {
  return `${WEATHER_MAP_TILE_BASE_URL}/${code}/now.png?apikey=${PUBLIC_TOMORROW_MAP_API_KEY}`
}

export function getMapboxStyleURL(theme: string) {
  return `mapbox://styles/mapbox/${theme}-v11`;
}