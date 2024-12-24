import IconBtn from "@/components/icon-btn"
import { type Task, useTasksAtom } from "@/shared/atoms"
import { Check, Pen, Trash } from "@phosphor-icons/react"
import { useId, useState } from "react"

const containerStyles = "flex items-center gap-2 w-96"

export function TodoItem({ id, name, isCompleted }: Task) {
  const tasks = useTasksAtom()
  const [taskName, setTaskName] = useState(name)
  const [isEditing, setIsEditing] = useState(false)
  const inputID = `task-${id}-${useId()}`

  const toggleIsEditing = () => setIsEditing(curr => !curr)
  const handleTodoToggle = () => tasks.toggle(id)
  const handleItemDeletion = () => tasks.remove(id)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Update name only if necessary
    if (taskName !== name) tasks.rename(id, taskName)

    // Toggle editing mode...
    toggleIsEditing()
  }

  if (isEditing)
    return (
      <li className={containerStyles}>
        <form className={containerStyles} onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
            className="input input-bordered grow shrink"
          />
          <IconBtn
            icon={Check}
            type="submit"
            className="btn-square btn-sm btn-outline btn-success"
          />
        </form>
      </li>
    )

  return (
    <li className={containerStyles}>
      <input
        onChange={handleTodoToggle}
        checked={isCompleted}
        id={inputID}
        className="checkbox checkbox-primary checkbox-lg"
        type="checkbox"
      />
      <label
        htmlFor={inputID}
        className={`grow cursor-pointer w-52 break-words ${isCompleted ? "text-gray-500 line-through" : ""}`}
      >
        {name}
      </label>
      <IconBtn
        icon={Pen}
        className="btn-square btn-outline btn-warning btn-sm"
        onClick={toggleIsEditing}
      />
      <IconBtn
        icon={Trash}
        className="btn-square btn-outline btn-error btn-sm"
        onClick={handleItemDeletion}
      />
    </li>
  )
}
