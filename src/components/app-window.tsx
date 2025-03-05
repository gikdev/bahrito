import { CCNStyleSheet, ccn } from "@/lib/cns"
import { CornersOut, type Icon, Question } from "@phosphor-icons/react"
import { useRef } from "react"

interface Props {
  title: string
  children: React.ReactNode
  contentContainerClassName?: string
  contentContainerContainerClassName?: string
  icon?: Icon
  cardClassName?: string
  navEndChildren?: React.ReactNode
}

export default function AppWindow({
  title,
  children,
  icon: Icon = Question,
  cardClassName = "",
  contentContainerClassName = "",
  contentContainerContainerClassName = "",
  navEndChildren,
}: Props) {
  const styles = new CCNStyleSheet({
    card: ["card card-bordered card-compact bg-base-100 shadow-xl", cardClassName],
  })
  const contentDivRef = useRef<HTMLDivElement>(null)

  function handleFullscreen() {
    if (!contentDivRef.current) return
    if (document.fullscreenElement) document.exitFullscreen()
    else contentDivRef.current.requestFullscreen()
  }

  return (
    <div {...styles.card}>
      <div className="border-b text-sm border-secondary p-2 flex gap-1 items-center">
        <Icon size={16} />
        <p>{title}</p>

        <button type="button" className="btn btn-xs btn-square ms-auto" onClick={handleFullscreen}>
          <CornersOut size={16} />
        </button>
        {navEndChildren}
      </div>
      <div
        {...ccn(
          "bg-base-100 card-body flex justify-center items-center",
          contentContainerContainerClassName,
        )}
        ref={contentDivRef}
      >
        <div className={contentContainerClassName}>{children}</div>
      </div>
    </div>
  )
}
