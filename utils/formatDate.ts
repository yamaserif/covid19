import dayjs from 'dayjs'

/**
 * Get datetime string formatted ISO8601(YYYY-MM-DDTHH:mm:ss)
 *
 * @param dateString - Parsable string by dayjs
 */
export const convertDatetimeToISO8601Format = (dateString: string): string => {
  return dayjs(dateString).format('YYYY-MM-DDTHH:mm:ss')
}

/**
 * Get date string formatted ISO8601(YYYY-MM-DD)
 *
 * @param dateString- Parsable string by dayjs
 */
export const convertDateToISO8601Format = (dateString: string): string => {
  return dayjs(dateString).format('YYYY-MM-DD')
}

/**
 * Get date string complemented year
 *
 * @param dateString- Parsable string by dayjs
 */
export const getComplementedDate = (dateString: string): Date => {
  const dates = dateString.split('/')
  if (dates.length !== 2) {
    return new Date(dateString)
  }
  const month = Number(dates[0])
  const date = Number(dates[1])
  const today = new Date()
  const currentMonth = today.getMonth() + 1
  const currentDate = today.getDate()
  let targetYear = today.getFullYear()

  if (currentMonth < month || (currentMonth === month && currentDate < date)) {
    targetYear -= 1
  }

  return new Date(targetYear, month - 1, date)
}

/**
 * Get dayjs object from date string
 *
 * @param dateString- Parsable string by dayjs
 */
export const getDayjsObject = (dateString: string): dayjs.Dayjs => {
  return dayjs(getComplementedDate(dateString))
}
