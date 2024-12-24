import { CornersOut, Question } from "@phosphor-icons/react"

interface Props {
  title: string
  children: React.ReactNode
}

export default function AppWindow({ title, children }: Props) {
  return (
    <div className="card card-bordered card-compact bg-base-100 w-96 shadow-xl">
      <div className="border-b text-sm border-secondary p-2 flex gap-1 items-center">
        <Question size={16} />
        <p>{title}</p>

        <button type="button" className="btn btn-xs ms-auto">
          <CornersOut size={16} />
        </button>
      </div>
      <div className="card-body">{children}</div>
    </div>
  )
}

// TODO
// const divRef = useRef(null);

// const handleFullscreen = () => {
//   if (divRef.current) {
//     if (document.fullscreenElement) {
//       document.exitFullscreen();
//     } else {
//       divRef.current.requestFullscreen();
//     }
//   }
// };
