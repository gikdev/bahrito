import { useCounter } from "@/shared/atoms"
import Counter from "./counter.comp"
import Tag from "./tag.comp"
import TimeBtn from "./time-btn.comp"

export default function HourlyWatchCard() {
  const counter = useCounter()

  return (
    <div className="card card-body card-bordered card-compact bg-base-100 shadow-xl flex flex-col items-center gap-5">
      <Counter />
      <TimeBtn />
      <div className="flex items-center justify-center gap-2">
        <Tag currency="IRT" minutes={counter.minutes} />
        <Tag currency="USD" minutes={counter.minutes} />
      </div>
    </div>
  )
}
