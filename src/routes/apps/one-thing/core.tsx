import { ccn } from "@/lib/cns"
import { useOneTask, useTasksAtom } from "@/shared/atoms"

interface Props {
  className?: string
}

export default function OneThingCore({ className = "" }: Props) {
  const { tasks, toggle } = useTasksAtom()
  const { oneTask, setOneTask } = useOneTask()
  const theTask = tasks.find(t => t.id === oneTask)
  const styles = ccn("flex flex-col items-center gap-5", className)

  const doIt = () => {
    toggle(oneTask)
    setOneTask("")
  }

  return (
    <div {...styles}>
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
    </div>
  )
}
