import IconBtn from "@/components/icon-btn"
import { secondsToClock } from "@/lib/date-time"
import { useCounter } from "@/shared/atoms"
import { PaperPlaneTilt, Pause, Play } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

function calculateTimeSpanBetween(date1: Date | undefined, date2: Date | undefined): number {
  if (!date1 || !date2) return Number.NaN

  // @ts-ignore
  const diffTimeInMS = Math.abs(date1 - date2)

  const seconds = Math.floor(diffTimeInMS / 1000)

  return seconds
}

export default function TimeBtn() {
  const addMinutes = useCounter().add
  const [isPlaying, setPlaying] = useState(false)
  const [startDate, setStartDate] = useState<Date>()
  const [seconds, setSeconds] = useState(0)
  const Icon = isPlaying ? Pause : Play

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
    <div className="join">
      <button
        id="play-pause-btn"
        className="btn btn-neutral join-item"
        type="button"
        onClick={isPlaying ? pause : play}
      >
        <Icon weight="fill" size={24} />
        <span>{secondsToClock(seconds)}</span>
      </button>

      <IconBtn
        className="join-item btn-primary"
        id="move-btn"
        onClick={move}
        icon={PaperPlaneTilt}
        disabled={isPlaying}
      />
    </div>
  )
}
