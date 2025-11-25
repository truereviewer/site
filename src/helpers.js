export function isDateAhead(dateStr) {
  const input = new Date(dateStr)
  const today = new Date()

  // Normalize both dates to ignore time components
  today.setHours(0, 0, 0, 0)
  input.setHours(0, 0, 0, 0)

  return input > today
}
