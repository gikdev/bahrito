import Counter from "@/components/counter"
import PowerInput from "@/components/power-input"
import Tag from "@/components/tag"
import TimeBtn from "@/components/time-btn"
import useCounter from "@/shared/counter.reducer"

function App() {
  const counter = useCounter()

  return (
    <div className="flex flex-col gap-5">
      <Counter counter={counter} />
      <TimeBtn addMinutes={counter.add} />
      <Tag currency="IRT" minutes={counter.minutes} />
      <PowerInput
        events={[
          [counter.change, "Enter"],
          [counter.inc, "+", "="],
          [counter.dec, "-"],
          [counter.reset, "0"],
          [pressMoveBtn, "Tab"],
          [pressPlayPauseBtn, " "],
        ]}
      />
    </div>
  )
}

function pressMoveBtn() {
  const target = document.querySelector("#move-btn") as HTMLButtonElement
  target.click()
}

function pressPlayPauseBtn() {
  const target = document.querySelector("#play-pause-btn") as HTMLButtonElement
  target.click()
}

export default App
