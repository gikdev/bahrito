import AppWindow from "@/components/app-window"
import { useCounter } from "@/shared/atoms"
import { Clock } from "@phosphor-icons/react"
import Counter from "./counter.comp"
import Tag from "./tag.comp"
import TimeBtn from "./time-btn.comp"

export default function HourlyWatch() {
  const counter = useCounter()

  return (
    <AppWindow
      title="SalaryWatch"
      icon={Clock}
      contentContainerClassName="flex flex-col items-center gap-5"
    >
      <Counter />
      <TimeBtn />
      <div className="flex items-center justify-center gap-2">
        <Tag currency="IRT" minutes={counter.minutes} />
        <Tag currency="USD" minutes={counter.minutes} />
      </div>
    </AppWindow>
  )
}
