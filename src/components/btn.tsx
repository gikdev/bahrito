import { jn } from "@/shared/helpers"
import type { Icon } from "@phosphor-icons/react"

interface Props {
  onClick: () => void
  icon: Icon
  disabled?: boolean
}

function Btn({ icon: Icon, onClick, disabled = false }: Props) {
  const cn = jn(
    "min-w-16 min-h-16 flex items-center justify-center grow shrink",
    "hover:bg-neutral-lighter hover:text-neutral-darker",
    "active:scale-95 disabled:cursor-not-allowed",
  )

  return (
    <button {...cn} type="button" onClick={onClick} disabled={disabled}>
      <Icon size={24} />
    </button>
  )
}

export default Btn
