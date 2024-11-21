import { jn, minutesToClock } from "@/shared/helpers"
import { ArrowsClockwise, Minus, Plus } from "@phosphor-icons/react"
import Btn from "./btn"
import type useCounter from "@/shared/counter.reducer"

interface Props {
  counter: ReturnType<typeof useCounter>
}

function Counter({ counter }: Props) {
  const { minutes, inc, dec, change } = counter

  const btnContainer = jn(
    "flex border-2 divide-x-2 rounded overflow-hidden",
    "border-neutral-light divide-neutral-light min-w-52",
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
    </div>
  )
}

export default Counter
