import { minutesToClock } from "@/helpers"
import { ArrowCounterClockwise, ArrowsClockwise, Minus, Plus } from "@phosphor-icons/react"
import Btn from "./btn"
import Tag from "./tag"
import useMinutes from "./use-minutes"

function Counter() {
  const { minutes, inc, dec, reset, change } = useMinutes()

  return (
    <div className="flex gap-5 justify-center items-center flex-col">
      <p className="font-black text-7xl w-full text-center">{minutesToClock(minutes)}</p>
      <div className="flex border-2 border-zinc-100 divide-x-2 divide-zinc-100 rounded overflow-hidden">
        <Btn onClick={reset} icon={ArrowCounterClockwise} />
        <Btn onClick={dec} icon={Minus} />
        <Btn onClick={inc} icon={Plus} />
        <Btn onClick={change} icon={ArrowsClockwise} />
      </div>
      <p className="items-center justify-center flex flex-wrap gap-2">
        <Tag currency="IRT" minutes={minutes} />
        <Tag currency="USD" minutes={minutes} />
        <Tag currency="TRX" minutes={minutes} />
        <Tag currency="GOLD" minutes={minutes} />
      </p>
    </div>
  )
}

export default Counter
