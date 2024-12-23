import { type Task, useTasksAtom } from "@/shared/atoms"
import { TodoItem } from "./todo-item.comp"

function toReversed<T>(arr: T[]): T[] {
  const clone = [...arr]
  clone.reverse()
  return clone
}

export function TodoList() {
  const tasks = useTasksAtom()

  return (
    <ul className="flex flex-col gap-3 overflow-y-auto max-h-96 items-center">
      {!tasks.tasks.length && <p className="text-center">Nothing to do! 😀</p>}
      {toReversed<Task>(tasks.tasks).map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
