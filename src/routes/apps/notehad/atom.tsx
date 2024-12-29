import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const notesAtom = atomWithStorage("NOTES", "")

export function useNotesAtom() {
  const [notes, setNotes] = useAtom(notesAtom)

  return [notes, setNotes] as const
}
