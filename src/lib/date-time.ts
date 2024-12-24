export class PersianDate extends Date {
  toLocaleDateString = () => super.toLocaleDateString("fa-IR")
  getParts = () => super.toLocaleDateString().split("/")
  getDay = () => (super.getDay() === 6 ? 0 : super.getDay() + 1)
  getYear = () => this.getParts()[0]
  getMonthName = () => super.toLocaleDateString("fa-IR", { month: "long" })
  getDayName = () => super.toLocaleDateString("fa-IR", { weekday: "long" })
}

export function sumTimes(...times: (string | null)[]): string {
  let th = 0
  let tm = 0
  let ts = 0

  for (const time of times) {
    if (!time) continue
    const [h, m, s] = time.split(":").map(item => Number(item))

    th += h
    tm += m
    ts += s
  }

  const [remainingS, minutedS] = [ts % 60, Math.floor(ts / 60)]
  ts = remainingS
  tm += minutedS

  const [remainingM, minutedM] = [tm % 60, Math.floor(tm / 60)]
  tm = remainingM
  th += minutedM

  const addZero = (num: number) => `${num < 10 ? "0" : ""}${num}`

  return [addZero(th), addZero(tm), addZero(ts)].join(":")
}

// Generated by `GPT-4o mini`: DON'T TOUCH IT!!!
export function convertHoursToTimeFormat(hours: number): string {
  // Extract the integer part (whole hours)
  const wholeHours = Math.floor(hours)

  // Extract the decimal part and convert it to minutes
  const decimalPart = hours - wholeHours
  const minutes = Math.round(decimalPart * 60)

  // Format hours and minutes with leading zeros
  const formattedHours = String(wholeHours).padStart(2, "0")
  const formattedMinutes = String(minutes).padStart(2, "0")

  // Return the formatted time string
  return `${formattedHours}:${formattedMinutes}:00`
}

export interface UsefulTime {
  d: number
  h: number
  m: number
  s: number
}

// Generated by ChatGPT, DON'T TOUCH IT!
/** Converts a time string `"D.HH:MM:SS"` to an object `{ d, h, m, s }` */
export function parseDHHMMSSString(timeStr: string): UsefulTime {
  const [daysAndHours, minutes, seconds] = timeStr.split(":")
  const [days, hours] = daysAndHours.split(".").map(Number)

  return {
    d: days || 0,
    h: hours || 0,
    m: Number(minutes) || 0,
    s: Number(seconds) || 0,
  }
}

// Generated by ChatGPT, DON'T TOUCH IT!
/** Converts a time object `{ d, h, m, s }` to a string `"D.HH:MM:SS"` */
export function formatDHMSObject(timeObj: UsefulTime): string {
  const { d, h, m, s } = timeObj
  const dayPart = d > 0 ? `${d}.` : ""
  const hourPart = d > 0 ? String(h).padStart(2, "0") : h

  return `${dayPart}${hourPart}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

/** @example minutesToClock(135) // "02:15:00" */
export function minutesToClock(minutes: number): string {
  const addZero = (num: number) => num.toString().padStart(2, "0")
  // const d = Math.floor(minutes / 60 / 24)
  // const h = addZero(Math.floor(minutes / 60 - d * 24))
  const h = addZero(Math.floor(minutes / 60))
  const m = addZero(minutes % 60)

  return `${h}:${m}`
}

/** @example secondsToClock(640) // "00:10:40" */
export function secondsToClock(seconds: number): string {
  const addZero = (num: number) => num.toString().padStart(2, "0")
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  return `${addZero(h)}:${addZero(m)}:${addZero(s)}`
}
