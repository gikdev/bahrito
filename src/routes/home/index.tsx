import HourlyWatchCard from "./hourly-watch.card"
import TodolyCard from "./todoly.card"

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap gap-5">
      <HourlyWatchCard />
      <TodolyCard />
    </div>
  )
}
