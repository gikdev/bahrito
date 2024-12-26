import AppWindow from "@/components/app-window"
import { CheckSquare } from "@phosphor-icons/react"
import TodolyCore from "./core"

export default function TodolyCard() {
  return (
    <AppWindow title="Todoly" icon={CheckSquare}>
      <TodolyCore />
    </AppWindow>
  )
}
