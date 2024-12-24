import AppWindow from "@/components/app-window"
import { useOneTask, useTasksAtom } from "@/shared/atoms"
import { NumberCircleOne } from "@phosphor-icons/react"

export default function OneThing() {
  const { tasks, toggle } = useTasksAtom()
  const { oneTask, setOneTask } = useOneTask()
  const theTask = tasks.find(t => t.id === oneTask)

  const doIt = () => {
    toggle(oneTask)
    setOneTask("")
  }

  return (
    <AppWindow
      icon={NumberCircleOne}
      title="1-thing"
      contentContainerClassName="flex flex-col items-center gap-5"
      cardClassName="max-w-96"
    >
      {oneTask ? (
        <>
          <p className="break-all">
            <strong>TASK:</strong> <span>{theTask?.name}</span>
          </p>
          <button type="button" className="btn btn-sm btn-success" onClick={doIt}>
            Did it!
          </button>
        </>
      ) : (
        <p>
          Add a <strong>ONE TASK</strong> to start!
        </p>
      )}
    </AppWindow>
  )
}
