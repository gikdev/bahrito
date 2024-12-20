function minutesToClock(minutes: number): string {
  const addZero = (num: number) => num.toString().padStart(2, "0")
  // const d = Math.floor(minutes / 60 / 24)
  // const h = addZero(Math.floor(minutes / 60 - d * 24))
  const h = addZero(Math.floor(minutes / 60))
  const m = addZero(minutes % 60)

  return `${h}:${m}`
}

function secondsToClock(seconds: number): string {
  const addZero = (num: number) => num.toString().padStart(2, "0")
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  return `${addZero(h)}:${addZero(m)}:${addZero(s)}`
}

function jn(...parts: string[]): { className: string } {
  return { className: parts.join(" ") }
}

export { minutesToClock, secondsToClock, jn }
