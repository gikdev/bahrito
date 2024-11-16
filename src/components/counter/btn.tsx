import { jn } from "@/helpers"
import type { Icon } from "@phosphor-icons/react"

interface Props {
  onClick: () => void
  icon: Icon
}

function Btn({ icon: Icon, onClick }: Props) {
  const cn = jn(
    "w-16 h-16 flex items-center justify-center transition",
    "hover:bg-neutral-lighter hover:text-neutral-darker",
    "active:scale-95 disabled:cursor-not-allowed",
  )

  return (
    <button {...cn} type="button" onClick={onClick}>
      <Icon size={24} />
    </button>
  )
}

export default Btn
