const formatter = new Intl.DateTimeFormat('de-DE', { calendar: 'gregory' })

export function formatDate(date: Date) {
  return formatter.format(date)
}
