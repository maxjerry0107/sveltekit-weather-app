import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


let isLoadingLibrary = false

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