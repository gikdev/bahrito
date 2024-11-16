import { useReducer } from "react"

type Action = { type: "inc" } | { type: "dec" } | { type: "change"; value: number }

function reducer(minutes: number, action: Action) {
  let final = minutes

  if (action.type === "inc") final = minutes + 1
  if (action.type === "dec") final = minutes > 0 ? minutes - 1 : minutes
  if (action.type === "change") final = action.value

  localStorage.setItem("COUNT", JSON.stringify(final))
  return final
}

const onload = () => Number(localStorage.getItem("COUNT") ?? 0)

function useMinutes() {
  const [minutes, dispatch] = useReducer(reducer, 0, onload)

  const inc = () => dispatch({ type: "inc" })
  const dec = () => dispatch({ type: "dec" })
  const change = () => {
    // biome-ignore lint/security/noGlobalEval: <explanation>
    const value = Number(eval(prompt("How much?", minutes.toString()) ?? "0"))

    dispatch({ type: "change", value })
  }

  return { minutes, inc, dec, change }
}

export default useMinutes
