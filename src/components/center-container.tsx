import { ccn } from "@/lib/cns"

interface Props {
  children: React.ReactNode
  className?: string
}

export default function CenterContainer({ children, className = "" }: Props) {
  return (
    <div {...ccn("p-2 grow shrink flex flex-col items-center justify-center gap-2", className)}>
      {children}
    </div>
  )
}
