import { ccn } from "@/lib/cns"
import { type Icon, Question } from "@phosphor-icons/react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: Icon
  iconSize?: number
}

export default function IconBtn({
  icon: Icon = Question,
  onClick,
  disabled = false,
  id,
  iconSize = 24,
  className = "",
  ...rest
}: Props) {
  const styles = ccn("btn", className)

  return (
    <button {...styles} onClick={onClick} disabled={disabled} id={id} {...rest}>
      <Icon size={iconSize} />
    </button>
  )
}
