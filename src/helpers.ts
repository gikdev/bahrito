function minutesToClock(minutes: number): string {
  const addZero = (num: number) => num.toString().padStart(2, "0")
  const h = addZero(Math.floor(minutes / 60))
  const m = addZero(minutes % 60)

  return `${h}:${m}`
}

function jn(...parts: string[]): { className: string } {
  return { className: parts.join(" ") }
}

export { minutesToClock, jn }
