import { WEATHER_API_KEY } from '$env/static/private';
import { PUBLIC_GOOGLE_MAP_API_KEY } from '$env/static/public';
import { DEFAULT_LOCATION, GOOGLE_GEOCODE_API_URL, WEATHER_10DAYS_FORECAST_API_URL, WEATHER_2DAYS_FORECAST_HOURLY_API_URL, WEATHER_API_URL } from '$lib/constants';
import type { Weather } from '$lib/types';
import { decode } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const city = params.city? decode(params.city): DEFAULT_LOCATION;
  const geocode = await fetch(`${GOOGLE_GEOCODE_API_URL}?address=${city}&key=${PUBLIC_GOOGLE_MAP_API_KEY}`).then(res => res.json());
  const latlng = geocode.results[0].geometry.location;
  const res = await Promise.all([
    fetch(`${WEATHER_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=10&aqi=yes`).then(res => res.json()),
    fetch(`${WEATHER_10DAYS_FORECAST_API_URL}&latitude=${latlng.lat}&longitude=${latlng.lng}`).then(res => res.json()),
    fetch(`${WEATHER_2DAYS_FORECAST_HOURLY_API_URL}&latitude=${latlng.lat}&longitude=${latlng.lng}`).then(res => res.json())
  ])
  const data: Weather = res[0];
  return {
    current: data.current,
    location: data.location,
    forecast: data.forecast,
    dayForecasts: res[1].daily,
    twoDayHourlyForecasts: res[2].hourly
  }
};
