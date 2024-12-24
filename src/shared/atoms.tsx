import { randomId } from "@/lib/generators"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useCallback } from "react"

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

const counterAtom = atomWithStorage("MINUTES", 0)

export function useCounter() {
  const [minutes, setMinutes] = useAtom(counterAtom)

  const add = useCallback(
    (value: number) => {
      setMinutes(minutes + value)
    },
    [minutes, setMinutes],
  )

  const inc = useCallback(() => {
    setMinutes(minutes + 1)
  }, [minutes, setMinutes])

  const dec = useCallback(() => {
    const result = minutes - 1
    setMinutes(result >= 0 ? result : 0)
  }, [minutes, setMinutes])

  const reset = useCallback(() => {
    setMinutes(0)
  }, [setMinutes])

  const change = useCallback(() => {
    setMinutes(Number(prompt("Change to:") || 0))
  }, [setMinutes])

  return { minutes, inc, dec, change, reset, add }
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export class Task {
  constructor(
    public id: string,
    public name: string,
    public isCompleted: boolean,
  ) {}
}

const INITIAL_TODOS: Task[] = [
  new Task(randomId(), "Learn to use Todoly!", false),
  new Task(randomId(), "Use Todoly!", false),
]

const tasksAtom = atomWithStorage<Task[]>("TASKS", INITIAL_TODOS)

export function useTasksAtom() {
  const [tasks, setTasks] = useAtom(tasksAtom)

  const add = useCallback(
    (name: string) => {
      const newId = randomId()
      setTasks([...tasks, new Task(newId, name, false)])
    },
    [tasks, setTasks],
  )

  const remove = useCallback(
    (id: string) => {
      setTasks(tasks.filter(t => t.id !== id))
    },
    [tasks, setTasks],
  )

  const toggle = useCallback(
    (id: string) => {
      setTasks(tasks.map(t => (t.id === id ? new Task(t.id, t.name, !t.isCompleted) : t)))
    },
    [tasks, setTasks],
  )

  const rename = useCallback(
    (id: string, name: string) => {
      setTasks(tasks.map(t => (t.id === id ? new Task(t.id, name, t.isCompleted) : t)))
    },
    [tasks, setTasks],
  )

  return { tasks, setTasks, add, remove, toggle, rename }
}
