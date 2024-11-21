import { useReducer } from "react"

type Action =
  | { type: "inc" }
  | { type: "dec" }
  | { type: "reset" }
  | { type: "change"; value: number }
  | { type: "add"; value: number }

function reducer(minutes: number, action: Action) {
  let final = minutes

  if (action.type === "inc") final = minutes + 1
  if (action.type === "dec") final = minutes > 0 ? minutes - 1 : minutes
  if (action.type === "reset") final = 0
  if (action.type === "change") final = action.value
  if (action.type === "add") final += action.value

  localStorage.setItem("COUNT", JSON.stringify(final))
  return final
}

const onload = () => Number(localStorage.getItem("COUNT") ?? 0)

function useCounter() {
  const [minutes, dispatch] = useReducer(reducer, 0, onload)

  const add = (value: number) => dispatch({ type: "add", value: value })
  const inc = () => dispatch({ type: "inc" })
  const dec = () => dispatch({ type: "dec" })
  const reset = () => dispatch({ type: "reset" })
  const change = () => {
    // biome-ignore lint/security/noGlobalEval: <explanation>
    const value = Number(eval(prompt("How much?", minutes.toString()) ?? "0"))

    dispatch({ type: "change", value })
  }

  return { minutes, inc, dec, change, reset, add }
}

export default useCounter
