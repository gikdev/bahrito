import AppWindow from "@/components/app-window"
import { Notepad } from "@phosphor-icons/react"
import NotehadCore from "./core"

export default function NotehadCard() {
  return (
    <AppWindow title="Notehad" icon={Notepad}>
      <NotehadCore />
    </AppWindow>
  )
}
