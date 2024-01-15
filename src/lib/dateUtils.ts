export function convertToDate(
  localtime: string,
  weekdayFormat: "short" | "long"
): string {
  const local_time = new Date(localtime)

  const options = { weekday: weekdayFormat }
  const dateFormatter = new Intl.DateTimeFormat("UTC", options)

  return dateFormatter.format(local_time)
}

export function formatSunTimeWithAMPM(
  timestamp: number,
  timezoneOffset: number
): string {
  const date = new Date((timestamp + timezoneOffset) * 1000)
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date)
  return formattedTime
}
