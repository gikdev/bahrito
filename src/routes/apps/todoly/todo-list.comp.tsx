import { type Task, useTasksAtom } from "@/shared/atoms"
import { useTaskFilterQueryAtom } from "./core"
import { TodoItem } from "./todo-item.comp"

function toReversed<T>(arr: T[]): T[] {
  const clone = [...arr]
  clone.reverse()
  return clone
}

export default function TodoList() {
  const tasks = useTasksAtom()
  const [query] = useTaskFilterQueryAtom()
  const filteredTasks = tasks.tasks.filter(t => t.name.includes(query))

  return (
    <ul className="flex flex-col gap-3 overflow-y-auto max-h-96 items-center">
      {!filteredTasks.length && <p className="text-center">Nothing to do! 😀</p>}
      {toReversed<Task>(filteredTasks).map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
