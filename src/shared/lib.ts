export function randomId() {
  const timestamp = Date.now().toString(36)
  const randomPart = Math.random().toString(36).substring(2, 5)
  const result = `id-${timestamp}-${randomPart}`
  console.log(result)
  return result
}

export function minutesToClock(minutes: number): string {
  const addZero = (num: number) => num.toString().padStart(2, "0")
  // const d = Math.floor(minutes / 60 / 24)
  // const h = addZero(Math.floor(minutes / 60 - d * 24))
  const h = addZero(Math.floor(minutes / 60))
  const m = addZero(minutes % 60)

  return `${h}:${m}`
}

export function secondsToClock(seconds: number): string {
  const addZero = (num: number) => num.toString().padStart(2, "0")
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  return `${addZero(h)}:${addZero(m)}:${addZero(s)}`
}

export function jn(...parts: string[]): { className: string } {
  return { className: parts.join(" ") }
}
