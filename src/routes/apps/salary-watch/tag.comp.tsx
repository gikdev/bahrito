const converter: Record<string, (m: number) => string> = {
  IRT(m) {
    const IRT_PER_HOUR = 80
    const value = Math.floor((m / 60) * IRT_PER_HOUR)
      .toString()
      .padStart(3, "0")
    return `${value} IRT`
  },

  USD(m) {
    const USD_PER_HOUR = 1
    const value = ((m / 60) * USD_PER_HOUR).toFixed(2).padStart(2, "0")
    return `$${value}`
  },
}

interface Props {
  minutes: number
  currency: keyof typeof converter
}

export default function Tag({ minutes, currency }: Props) {
  const text = converter[currency](minutes)

  return <span className="badge badge-neutral hover:badge-info">{text}</span>
}
