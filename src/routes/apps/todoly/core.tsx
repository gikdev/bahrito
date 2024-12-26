import { ccn } from "@/lib/cns"
import { NewTaskForm } from "./new-task.form"
import { TodoList } from "./todo-list.comp"

interface Props {
  className?: string
}

export default function TodolyCore({ className = "" }: Props) {
  const styles = ccn("flex flex-col items-center gap-2", className)

  return (
    <div {...styles}>
      <NewTaskForm />
      <TodoList />
    </div>
  )
}
