import OneThingCard from "@/routes/apps/one-thing/card"
import SalaryWatchCard from "@/routes/apps/salary-watch/card"
import TodolyCard from "@/routes/apps/todoly/card"

export default function TimeManagementCore() {
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
      <SalaryWatchCard />
      <OneThingCard />
      <TodolyCard />
    </div>
  )
}
