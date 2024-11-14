import { ArrowCounterClockwise, ArrowsClockwise, Minus, Plus } from "@phosphor-icons/react"
import { useReducer } from "react"

function minutesToClock(minutes: number): string {
  const addZero = (num: number) => num.toString().padStart(2, "0")
  const h = addZero(Math.floor(minutes / 60))
  const m = addZero(minutes % 60)

  return `${h}:${m}`
}

type Action =
  | { type: "inc" }
  | { type: "dec" }
  | { type: "reset" }
  | { type: "change"; value: number }

function reducer(minutes: number, action: Action) {
  let final = minutes

  if (action.type === "inc") final = minutes + 1
  if (action.type === "dec") final = minutes > 0 ? minutes - 1 : minutes
  if (action.type === "reset") final = 0
  if (action.type === "change") final = action.value

  localStorage.setItem("COUNT", JSON.stringify(final))
  return final
}

function Counter() {
  const [minutes, dispatch] = useReducer(reducer, 0, () =>
    Number(localStorage.getItem("COUNT") ?? 0),
  )
  const btn = [
    "w-12 h-16 flex items-center justify-center",
    "hover:bg-zinc-100 hover:text-zinc-900 ",
    "active:scale-95 disabled:cursor-not-allowed",
  ].join(" ")

  const inc = () => dispatch({ type: "inc" })
  const dec = () => dispatch({ type: "dec" })
  const reset = () => dispatch({ type: "reset" })
  const change = () =>
    dispatch({
      type: "change",
      // biome-ignore lint/security/noGlobalEval: <explanation>
      value: Number(eval(prompt("How much?", minutes.toString()) ?? "0")),
    })

  return (
    <div className="flex gap-5 justify-center items-center flex-wrap">
      <p className="font-black text-7xl w-full text-center">{minutesToClock(minutes)}</p>
      <div className="flex border-2 border-zinc-100 divide-x-2 divide-zinc-100 rounded overflow-hidden">
        <button className={btn} type="button" onClick={reset}>
          <ArrowCounterClockwise size={24} />
        </button>
        <button className={btn} type="button" onClick={dec}>
          <Minus size={24} />
        </button>
        <button className={btn} type="button" onClick={inc}>
          <Plus size={24} />
        </button>
        <button className={btn} type="button" onClick={change}>
          <ArrowsClockwise size={24} />
        </button>
      </div>
    </div>
  )
}

export default Counter
