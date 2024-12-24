import AppWindow from "@/components/app-window"
import HourlyWatchCard from "./hourly-watch.card"
import TodolyCard from "./todoly.card"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <HourlyWatchCard />
      <TodolyCard />
      <AppWindow title="Hello to EveryBODY!">
        <p>laksdjfalksjdflaskjdf</p>
      </AppWindow>
    </div>
  )
}
