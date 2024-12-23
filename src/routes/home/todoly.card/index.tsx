import { NewTaskForm } from "./new-task.form"
import { TodoList } from "./todo-list.comp"

export default function TodolyCard() {
  return (
    <div className="card card-body card-bordered card-compact bg-base-100 shadow-xl flex flex-col items-center gap-5">
      <NewTaskForm />
      <TodoList />
    </div>
  )
}
