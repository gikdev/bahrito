import { CornersOut, type Icon, Question } from "@phosphor-icons/react"
import { useRef } from "react"

interface Props {
  title: string
  children: React.ReactNode
  contentContainerClassName?: string
  icon?: Icon
}

export default function AppWindow({
  title,
  children,
  icon: Icon = Question,
  contentContainerClassName = "",
}: Props) {
  const contentDivRef = useRef<HTMLDivElement>(null)

  function handleFullscreen() {
    if (!contentDivRef.current) return
    if (document.fullscreenElement) document.exitFullscreen()
    else contentDivRef.current.requestFullscreen()
  }

  return (
    <div className="card card-bordered card-compact bg-base-100 shadow-xl">
      <div className="border-b text-sm border-secondary p-2 flex gap-1 items-center">
        <Icon size={16} />
        <p>{title}</p>

        <button type="button" className="btn btn-xs ms-auto" onClick={handleFullscreen}>
          <CornersOut size={16} />
        </button>
      </div>
      <div className="bg-base-100 card-body flex justify-center items-center" ref={contentDivRef}>
        <div className={contentContainerClassName}>{children}</div>
      </div>
    </div>
  )
}
