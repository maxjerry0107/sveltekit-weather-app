import { WEATHER_API_KEY } from '$env/static/private';
import { DEFAULT_LOCATION, WEATHER_API_URL } from '$lib/constants';
import type { Weather } from '$lib/types';
import { decode, encode } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
  const city = params.city || encode(DEFAULT_LOCATION);
  const res = await fetch(`${WEATHER_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${decode(city)}&days=10&aqi=yes`);
  const data: Weather = await res.json();
  return {
    current: data.current,
    location: data.location,
    forecast: data.forecast
  }
};
