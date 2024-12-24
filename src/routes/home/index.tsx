import HourlyWatch from "./hourly-watch"
import TodolyCard from "./todoly"

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap gap-5">
      <HourlyWatch />
      <TodolyCard />
    </div>
  )
}
