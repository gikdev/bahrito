import { jn, minutesToClock } from "@/shared/helpers"
import { ArrowsClockwise, Minus, Plus } from "@phosphor-icons/react"
import Btn from "./btn"
import Tag from "./tag"
import useMinutes from "./use-minutes"
import PowerInput from "./power-input"

function Counter() {
  const { minutes, inc, dec, change } = useMinutes()

  const btnContainer = jn(
    "flex border-2 divide-x-2 rounded overflow-hidden",
    "border-neutral-light divide-neutral-light",
    "hover:border-neutral-lighter hover:divide-neutral-lighter hover:text-neutral-lighter",
  )

  return (
    <div className="flex gap-5 justify-center items-center flex-col">
      <p className="font-black text-7xl w-full text-center text-neutral-lighter">
        {minutesToClock(minutes)}
      </p>
      <div {...btnContainer}>
        <Btn onClick={dec} icon={Minus} />
        <Btn onClick={change} icon={ArrowsClockwise} />
        <Btn onClick={inc} icon={Plus} />
      </div>
      <PowerInput
        eventMap={{
          Enter: () => change(),
          "+": () => inc(),
          "-": () => dec(),
        }}
      />
      <div className="items-center justify-center flex flex-wrap gap-2">
        <Tag currency="IRT" minutes={minutes} />
      </div>
    </div>
  )
}

export default Counter
