import { useNotesAtom } from "./atom"

export default function NotehadCore() {
  const [notes, setNotes] = useNotesAtom()

  return (
    <textarea
      dir="auto"
      value={notes}
      onChange={e => setNotes(e.target.value)}
      className="textarea textarea-bordered w-80 h-60 resize"
    />
  )
}
