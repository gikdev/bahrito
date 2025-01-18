import IconBtn from "@/components/icon-btn"
import { Trash } from "@phosphor-icons/react"
import { useTaskFilterQueryAtom } from "./core"

export default function FilterTaskForm() {
  const [query, setQuery] = useTaskFilterQueryAtom()

  return (
    <div className="flex gap-2 w-full">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="input input-bordered grow input-sm"
      />
      <IconBtn
        icon={Trash}
        onClick={() => setQuery("")}
        className="btn-error btn-sm btn-outline btn-square"
      />
    </div>
  )
}
