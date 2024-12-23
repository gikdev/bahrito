import { jn } from "@/shared/lib"
import type { Icon } from "@phosphor-icons/react"

interface Props {
  onClick: () => void
  icon: Icon
  disabled?: boolean
  id?: string
  className?: string
}

export default function IconBtn({
  icon: Icon,
  onClick,
  disabled = false,
  id,
  className = "",
}: Props) {
  const styles = jn("btn btn-neutral", className)

  return (
    <button {...styles} type="button" onClick={onClick} disabled={disabled} id={id}>
      <Icon size={24} />
    </button>
  )
}
