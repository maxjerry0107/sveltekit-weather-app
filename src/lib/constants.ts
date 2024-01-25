import type { MapTileDescriptionType } from "./types";

export const WEATHER_API_URL = 'http://api.weatherapi.com/v1';
export const WEATHER_MAP_TILE_BASE_URL = 'https://api.tomorrow.io/v4/map/tile/{z}/{x}/{y}';

export const WEATHER_TILES: MapTileDescriptionType[] = [
  {
    label: 'Precipitation', code: 'precipitationIntensity', unit: "mm/hr", data: [
      {
        label: 'Rain',
        imagePath: 'rain',
        values: [0, 0.36, 2, 7, 50]
      },
      {
        label: 'Sleet',
        imagePath: 'sleet',
        values: [0, 0.36, 2, 7, 50]
      },
      {
        label: 'Snow',
        imagePath: 'snow',
        values: [0, 0.36, 2, 7, 50]
      },
      {
        label: 'Freezing Rain',
        imagePath: 'freezing-rain',
        values: [0, 0.36, 2, 7, 50]
      }
    ]
  },
  {
    label: 'Temperature', code: 'temperature', unit: "℃", data: [
      {
        label: 'Temperature',
        imagePath: 'temperature',
        values: [-34, -30, -23, -17, -12, -7, -1, 4, 10, 16, 21, 27, 32, 38, 43, 49]
      }
    ]
  },
  {
    label: 'Humidity', code: 'humidity', unit: "%", data: [
      {
        label: 'Humidity',
        imagePath: 'humidity',
        values: [10, 20, 30, 40, 50, 60, 70, 80, 100]
      }
    ]
  },
  {
    label: 'Wind Speed', code: 'windSpeed', unit: "mph", data: [
      {
        label: 'Wind Speed',
        imagePath: 'windSpeed',
        values: [0, 5, 10, 20, 35, 45, 60, 70, 80]
      }
    ]
  },
  {
    label: 'Wind Direction', code: 'windDirection', unit: "mph", data: [
      {
        label: 'Wind Direction',
        imagePath: 'windDirection',
        values: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
      }
    ]
  },
  {
    label: 'Pressure', code: 'pressureSurfaceLevel', unit: "hPa", data: [
      {
        label: 'Pressure',
        imagePath: 'pressureSurfaceLevel',
        values: [935, 950, 965, 980, 995, 1010, 1025, 1040, 1055]
      }
    ]
  },
  {
    label: 'Visibility', code: 'visibility', unit: "mi", data: [
      {
        label: 'Visibility',
        imagePath: 'visibility',
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    ]
  },
  {
    label: 'Clouds', code: 'cloudCover', unit: "%", data: [
      {
        label: 'Clouds',
        imagePath: 'cloudCover',
        values: [10, 20, 30, 40, 50, 60, 70, 80, 100]
      }
    ]
  },
];

export const DEFAULT_SUGGESTIONS = [
  'New York, NY, USA',
  'London, United Kingdom',
  'Paris, France',
  'Sydney NSW, Australia',
  'Tokyo, Japan'
];

export const DEFAULT_LOCATION = 'Worthington, OH, USA';
