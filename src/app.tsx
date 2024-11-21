import Counter from "@/components/counter"
import TimeBtn from "@/components/time-btn"
import useCounter from "@/shared/counter.reducer"
import Tag from "@/components/tag"
import PowerInput from "@/components/power-input"

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
        ]}
      />
    </div>
  )
}

export default App
