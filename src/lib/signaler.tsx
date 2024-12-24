import { createContext, useContext, useEffect, useState } from "react"

export class Signal {
  constructor(
    public name: string,
    public action: () => void,
  ) {}
}

export class Signaler {
  private signals: Signal[] = []

  listen = (name: string, action: () => void) => {
    this.signals.push(new Signal(name, action))
  }

  run = (signalName: string) => {
    const filteredSingals = this.signals.filter(s => s.name === signalName)
    if (!filteredSingals.length)
      throw new Error(`The \`signalName\` specified (${signalName}) is not registered`)

    for (const signal of filteredSingals) signal.action()
  }

  isThere = (name: string): boolean => {
    return this.signals.findIndex(s => s.name === name) !== -1
  }
}

export function useSignaler() {
  const [signaler] = useState(new Signaler())

  return signaler
}

export function useListenSignaler(signaler: Signaler, name: string, action: () => void) {
  useEffect(() => signaler.listen(name, action), [signaler, name, action])
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

interface SignalerContext {
  signaler: Signaler
}

const SignalerContext = createContext<SignalerContext>({ signaler: new Signaler() })

interface Props {
  children: React.ReactNode
}

export function SignalerProvider({ children }: Props) {
  const [signaler] = useState(new Signaler())

  const value = { signaler }

  return <SignalerContext.Provider value={value}>{children}</SignalerContext.Provider>
}

export function useSignalerListen(name: string, action: () => void) {
  const { signaler } = useContext(SignalerContext)
  useEffect(() => signaler.listen(name, action), [signaler, name, action])
}

export function useSignalerRun() {
  const { signaler } = useContext(SignalerContext)
  return signaler.run
}
