import GoldLogo from "@/assets/gold-logo.png"
import IRLogo from "@/assets/ir-logo.svg"

const TOMANS_PER_HOUR = 80

const config = {
  IRT(m: number): [string, string] {
    const tomans = Math.floor((m / 60) * TOMANS_PER_HOUR).toString()
    return [IRLogo, `${tomans} ت`]
  },
}

interface Props {
  minutes: number
  currency: keyof typeof config
}

function Tag({ minutes, currency }: Props) {
  const [imgUrl, text] = config[currency](minutes)

  return (
    <div className="bg-neutral-dark text-neutral-light rounded-full flex gap-1 items-center pe-2 hover:bg-neutral-lighter hover:text-neutral-darker">
      <img className="rounded-full size-4" src={imgUrl} alt="" />
      <span className="text-xs">{text}</span>
    </div>
  )
}

export default Tag
