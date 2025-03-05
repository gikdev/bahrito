const IRT_PER_HOUR = 80
const IRT_PER_USD = 90
const USD_PER_HOUR = Number.parseFloat((IRT_PER_HOUR / IRT_PER_USD).toFixed(2))

const converter: Record<string, (m: number) => string> = {
  IRT(m) {
    const value = Math.floor((m / 60) * IRT_PER_HOUR)
      .toString()
      .padStart(3, "0")
    return `${value} IRT`
  },

  USD(m) {
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
