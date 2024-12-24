import IconBtn from "@/components/icon-btn"
import { useCounter } from "@/shared/atoms"
import { minutesToClock } from "@/shared/lib"
import { ArrowsClockwise, Minus, Plus } from "@phosphor-icons/react"

export default function Counter() {
  const { minutes, inc, dec, change } = useCounter()

  return (
    <div className="flex gap-5 justify-center items-center flex-col w-full">
      <p className="font-black text-7xl w-full text-center">{minutesToClock(minutes)}</p>
      <div className="join">
        <IconBtn className="join-item" onClick={dec} icon={Minus} />
        <IconBtn className="join-item" onClick={change} icon={ArrowsClockwise} />
        <IconBtn className="join-item" onClick={inc} icon={Plus} />
      </div>
    </div>
  )
}
