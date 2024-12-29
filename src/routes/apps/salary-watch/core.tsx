import { ccn } from "@/lib/cns"
import { useCounterAtom } from "./atom"
import Counter from "./counter.comp"
import Tag from "./tag.comp"
import TimeBtn from "./time-btn.comp"

interface Props {
  className?: string
}

export default function SalaryWatchCore({ className = "" }: Props) {
  const counter = useCounterAtom()
  const styles = ccn("flex flex-col items-center gap-2", className)

  return (
    <div {...styles}>
      <Counter />
      <TimeBtn />
      <div className="flex items-center justify-center gap-2">
        <Tag currency="IRT" minutes={counter.minutes} />
        <Tag currency="USD" minutes={counter.minutes} />
      </div>
    </div>
  )
}
