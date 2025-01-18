import { ccn } from "@/lib/cns"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import FilterTaskForm from "./filter-task.form"
import NewTaskForm from "./new-task.form"
import TodoList from "./todo-list.comp"

const taskFilterQueryAtom = atomWithStorage("TASK_FILTER_QUERY", "")
export const useTaskFilterQueryAtom = () => useAtom(taskFilterQueryAtom)

interface Props {
  className?: string
}

export default function TodolyCore({ className = "" }: Props) {
  const styles = ccn("flex flex-col items-center gap-2", className)

  return (
    <div {...styles}>
      <FilterTaskForm />
      <NewTaskForm />
      <TodoList />
    </div>
  )
}
