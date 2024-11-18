type Props = {
  eventMap: { [x: string]: () => void }
}

function PowerInput({ eventMap }: Props) {
  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    ;(e.target as HTMLInputElement).value = ""
    e.preventDefault()

    for (const event in eventMap) if (e.key === event) eventMap[event]()
  }

  return <input className="powerball" onKeyDown={handleKeyUp} />
}

export default PowerInput
