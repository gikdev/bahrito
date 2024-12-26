import AppWindow from "@/components/app-window"
import { CheckSquare } from "@phosphor-icons/react"
import { NewTaskForm } from "./new-task.form"
import { TodoList } from "./todo-list.comp"

export default function Todoly() {
  return (
    <AppWindow
      icon={CheckSquare}
      title="Todoly"
      contentContainerClassName="flex flex-col items-center gap-5"
    >
      <NewTaskForm />
      <TodoList />
    </AppWindow>
  )
}
