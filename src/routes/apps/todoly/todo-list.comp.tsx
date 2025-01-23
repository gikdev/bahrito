import { type Task, useTasksAtom } from "@/shared/atoms"
import { useHideDoneTasksAtom, useTaskFilterQueryAtom } from "./core"
import { TodoItem } from "./todo-item.comp"

function toReversed<T>(arr: T[]): T[] {
  const clone = [...arr]
  clone.reverse()
  return clone
}

export default function TodoList() {
  const tasks = useTasksAtom()
  const [query] = useTaskFilterQueryAtom()
  const [hideDoneTasks] = useHideDoneTasksAtom()
  const queryTaskFilter = (t: Task) => t.name.includes(query)
  const hideTaskFilter = (t: Task) => (hideDoneTasks ? t.isCompleted === false : true)
  const filteredTasks = tasks.tasks.filter(queryTaskFilter).filter(hideTaskFilter)

  return (
    <ul className="flex flex-col gap-3 overflow-y-auto max-h-96 items-center">
      {!filteredTasks.length && <p className="text-center">Nothing to do! 😀</p>}
      {toReversed<Task>(filteredTasks).map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
