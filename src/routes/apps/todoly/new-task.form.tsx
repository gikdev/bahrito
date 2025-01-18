import IconBtn from "@/components/icon-btn"
import { useTasksAtom } from "@/shared/atoms"
import { PaperPlaneTilt } from "@phosphor-icons/react"
import { useRef } from "react"

export default function NewTaskForm() {
  const tasks = useTasksAtom()
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!inputRef.current?.value) return

    const taskName = inputRef.current.value
    tasks.add(taskName)

    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input ref={inputRef} type="text" name="taskName" className="input input-bordered grow" />
      <IconBtn type="submit" icon={PaperPlaneTilt} className="btn-primary btn-square" />
    </form>
  )
}
