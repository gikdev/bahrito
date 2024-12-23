interface Props {
  events: Array<[() => void, ...events: string[]]>
}

export default function PowerInput({ events }: Props) {
  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    target.value = ""

    if (import.meta.env.DEV) console.log(e.key)

    events.map(([action, ...keys]) => {
      if (keys.includes(e.key)) action()
    })
  }

  return <input className="powerball" onKeyDown={handleKeyUp} />
}
