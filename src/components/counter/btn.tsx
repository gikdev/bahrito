import type { Icon } from "@phosphor-icons/react"

interface Props {
  onClick: () => void
  icon: Icon
}

function Btn({ icon: Icon, onClick }: Props) {
  const cn = jn(
    "w-12 h-16 flex items-center justify-center",
    "hover:bg-zinc-100 hover:text-zinc-900",
    "active:scale-95 disabled:cursor-not-allowed",
  )

  return (
    <button {...cn} type="button" onClick={onClick}>
      <Icon size={24} />
    </button>
  )
}

function jn(...parts: string[]): { className: string } {
  return { className: parts.join(" ") }
}

export default Btn
