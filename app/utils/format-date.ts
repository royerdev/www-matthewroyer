import { DateTime } from 'luxon'

export default function (value: string, format: string = 'MMM yyyy'): string {
  if (['Today', 'Now'].includes(value)) {
    return value
  }

  try {
    const date = DateTime.fromFormat(value, 'M/d/yyyy')
    return date.toFormat(format)
  }
  catch (error) {
    console.error(`Error parsing value ${value} as date`, error)
  }

  return ''
};
