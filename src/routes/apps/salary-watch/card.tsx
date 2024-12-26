import AppWindow from "@/components/app-window"
import { Clock } from "@phosphor-icons/react"
import SalaryWatchCore from "./core"

export default function SalaryWatchCard() {
  return (
    <AppWindow title="Salary Watch" icon={Clock}>
      <SalaryWatchCore />
    </AppWindow>
  )
}
