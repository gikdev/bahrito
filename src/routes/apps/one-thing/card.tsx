import AppWindow from "@/components/app-window"
import { NumberCircleOne } from "@phosphor-icons/react"
import OneThingCore from "./core"

export default function OneThingCard() {
  return (
    <AppWindow title="One Thing" icon={NumberCircleOne}>
      <OneThingCore />
    </AppWindow>
  )
}
