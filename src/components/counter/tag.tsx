import GoldLogo from "@/assets/gold-logo.svg"
import IRLogo from "@/assets/ir-logo.svg"
import TRXLogo from "@/assets/trx-logo.svg"
import USLogo from "@/assets/us-logo.svg"

const DOLLARS_PER_HOUR = 1
const TOMANS_PER_HOUR = 80
const TRONS_PER_HOUR = 6
const GRAMS_OF_GOLD_PER_HOUR = 0.02

const config = {
  USD(m: number): [string, string] {
    const dollars = ((m / 60) * DOLLARS_PER_HOUR).toFixed(2)
    return [USLogo, `$${dollars}`]
  },
  IRT(m: number): [string, string] {
    const tomans = Math.floor((m / 60) * TOMANS_PER_HOUR).toString()
    return [IRLogo, `${tomans} ت`]
  },
  TRX(m: number): [string, string] {
    const trons = ((m / 60) * TRONS_PER_HOUR).toFixed(1)
    return [TRXLogo, trons]
  },
  GOLD(m: number): [string, string] {
    const mg = ((m / 60) * GRAMS_OF_GOLD_PER_HOUR).toFixed(3)
    return [GoldLogo, `${mg}g`]
  },
}

interface Props {
  minutes: number
  currency: keyof typeof config
}

function Tag({ minutes, currency }: Props) {
  const [imgUrl, text] = config[currency](minutes)

  return (
    <div className="bg-neutral-dark text-neutral-light rounded-full flex gap-1 items-center pe-2 hover:bg-neutral-lighter hover:text-neutral-darker transition">
      <img className="rounded-full size-4" src={imgUrl} alt="" />
      <span className="text-xs">{text}</span>
    </div>
  )
}

export default Tag
