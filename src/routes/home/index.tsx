import HourlyWatch from "./hourly-watch"
import OneThing from "./one-thing"
import Todoly from "./todoly"

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap gap-5">
      <HourlyWatch />
      <Todoly />
      <OneThing />
    </div>
  )
}
