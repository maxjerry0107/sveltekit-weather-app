

import { PUBLIC_MAPBOX_API_KEY } from '$env/static/public';
import { MAPBOX_GEOCODING_API_URL } from '$lib/constants.js';
import { json } from '@sveltejs/kit';

export async function GET({ fetch, url }) {
  const query = url.searchParams.get("query") || "";
  const path = `${MAPBOX_GEOCODING_API_URL}/${query}.json?access_token=${PUBLIC_MAPBOX_API_KEY}&types=place`;
  const res = await fetch(path, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  const queryResults = await res.json();
  return json(queryResults.features)
}