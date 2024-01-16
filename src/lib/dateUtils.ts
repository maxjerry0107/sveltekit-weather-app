export function convertToDate(
  localTime: string,
  weekdayFormat: "short" | "long"
): string {
  return new Date(localTime).toLocaleString('en', {
    weekday: weekdayFormat,
    timeZone: 'UTC'
  })
}

export function formatSunTimeWithAMPM(
  localTime: string
): string {
  return new Date(localTime).toLocaleString('en', {
    timeZone: "UTC",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}
