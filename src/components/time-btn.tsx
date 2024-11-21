import { jn, secondsToClock } from "@/shared/helpers"
import { PaperPlaneTilt, Pause, Play } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import Btn from "./btn"

function calculateTimeSpanBetween(date1: Date | undefined, date2: Date | undefined): number {
  if (!date1 || !date2) return Number.NaN

  // @ts-ignore
  const diffTimeInMS = Math.abs(date1 - date2)

  const seconds = Math.floor(diffTimeInMS / 1000)

  return seconds
}

interface Props {
  addMinutes: (value: number) => void
}

function TimeBtn({ addMinutes }: Props) {
  const [isPlaying, setPlaying] = useState(false)
  const [startDate, setStartDate] = useState<Date>()
  const [seconds, setSeconds] = useState(0)
  const Icon = isPlaying ? Pause : Play
  const btn = jn(
    "min-w-16 min-h-16 px- gap-2 flex justify-center items-center",
    "hover:text-neutral-darker hover:bg-neutral-lighter grow shrink",
  )
  const btnContainer = jn(
    "flex border-2 divide-x-2 rounded overflow-hidden",
    "border-neutral-light divide-neutral-light min-w-52",
    "hover:border-neutral-lighter hover:divide-neutral-lighter hover:text-neutral-lighter",
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) return

      setSeconds(calculateTimeSpanBetween(startDate, new Date()))
    }, 1000)

    return () => clearInterval(interval)
  }, [startDate, isPlaying])

  function play() {
    setSeconds(0)
    setStartDate(new Date())
    setPlaying(true)
  }

  function pause() {
    const timeSpan = calculateTimeSpanBetween(startDate, new Date())
    setSeconds(timeSpan)
    setPlaying(false)
  }

  function move() {
    addMinutes(Math.floor(seconds / 60))
    setSeconds(0)
  }

  return (
    <div {...btnContainer}>
      <button id="play-pause-btn" {...btn} type="button" onClick={isPlaying ? pause : play}>
        <Icon weight="fill" size={24} />
        <span>{secondsToClock(seconds)}</span>
      </button>
      <Btn id="move-btn" onClick={move} icon={PaperPlaneTilt} disabled={isPlaying} />
    </div>
  )
}

export default TimeBtn
