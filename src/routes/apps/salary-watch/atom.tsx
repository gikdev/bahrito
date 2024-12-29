import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useCallback } from "react"

const counterAtom = atomWithStorage("MINUTES", 0)

export function useCounterAtom() {
  const [minutes, setMinutes] = useAtom(counterAtom)

  const add = useCallback(
    (value: number) => {
      setMinutes(minutes + value)
    },
    [minutes, setMinutes],
  )

  const inc = useCallback(() => {
    setMinutes(minutes + 1)
  }, [minutes, setMinutes])

  const dec = useCallback(() => {
    const result = minutes - 1
    setMinutes(result >= 0 ? result : 0)
  }, [minutes, setMinutes])

  const reset = useCallback(() => {
    setMinutes(0)
  }, [setMinutes])

  const change = useCallback(() => {
    setMinutes(Number(prompt("Change to:") || 0))
  }, [setMinutes])

  return { minutes, inc, dec, change, reset, add }
}
