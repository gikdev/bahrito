import { ArrowCounterClockwise, CornersOut, Globe, MagnifyingGlass } from "@phosphor-icons/react"
import { type FormEvent, useRef } from "react"
import { useState } from "react"
import MiniBrowserCore from "./core"

export default function MiniBrowserCard() {
  const [selectedUrl, setSelectedUrl] = useState("")
  const contentDivRef = useRef<HTMLDivElement>(null)

  function handleFullscreen() {
    if (!contentDivRef.current) return
    if (document.fullscreenElement) document.exitFullscreen()
    else contentDivRef.current.requestFullscreen()
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const url = (e.target as HTMLFormElement).url.value
    setSelectedUrl(url)
  }

  return (
    <div className="card card-bordered card-compact bg-base-100 shadow-xl w-[30rem] h-[50rem]">
      <div className="border-b text-sm border-secondary p-2 flex gap-2 items-center justify-between">
        <Globe size={24} />

        <form onSubmit={handleFormSubmit} className="flex items-center grow shrink">
          <input
            name="url"
            defaultValue="https://"
            className="input input-bordered input-sm grow shrink"
            id="url-search"
          />
          <button type="submit" className="btn btn-primary btn-sm btn-square">
            <MagnifyingGlass size={16} />
          </button>
        </form>

        <button type="button" className="btn btn-xs btn-square" onClick={handleFullscreen}>
          <CornersOut size={16} />
        </button>

        <button type="button" className="btn btn-xs btn-square" onClick={() => setSelectedUrl("")}>
          <ArrowCounterClockwise size={16} />
        </button>
      </div>

      <div
        className="bg-base-100 card-body flex justify-center items-center p-[0!important]"
        ref={contentDivRef}
      >
        <MiniBrowserCore selectedUrl={selectedUrl} setSelectedUrl={setSelectedUrl} />
      </div>
    </div>
  )
}
