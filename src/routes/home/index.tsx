import HourlyWatchCard from "./hourly-watch.card"
import TodolyCard from "./todoly.card"

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <HourlyWatchCard />
      <TodolyCard />
    </div>
  )
}
