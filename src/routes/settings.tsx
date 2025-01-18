import AppWindow from "@/components/app-window"
import CenterContainer from "@/components/center-container"
import type { Task } from "@/shared/atoms"
import { Database, Download } from "@phosphor-icons/react"

/** Util to download a file */
function download(content: string, filename: string, _contentType: string) {
  let contentType = _contentType
  if (!contentType) contentType = "text/plain"
  const a = document.createElement("a")
  const blob = new Blob([content], { type: contentType })
  a.href = window.URL.createObjectURL(blob)
  a.download = filename
  a.click()
}

interface AppData {
  MINUTES: number
  TASK_FILTER_QUERY: string
  TASKS: Task[]
  ONE_TASK: string
  NOTES: string
}

/** Backs data up and downloads it! */
function backupAndDownload() {
  const appData: AppData = {
    MINUTES: Number(localStorage.getItem("MINUTES") ?? 0),
    TASKS: JSON.parse(localStorage.getItem("TASKS") ?? "[]") ?? [],
    ONE_TASK: JSON.parse(localStorage.getItem("ONE_TASK") ?? ""),
    NOTES: JSON.parse(localStorage.getItem("NOTES") ?? ""),
    TASK_FILTER_QUERY: JSON.parse(localStorage.getItem("TASK_FILTER_QUERY") ?? ""),
  }

  const stringifiedAppData = JSON.stringify(appData)
  download(stringifiedAppData, "bahrito-data.json", "application/json")
}

/** Restores backed-up data */
function restore(file: File | null) {
  if (!file) return
  const reader = new FileReader()
  reader.readAsText(file)

  reader.addEventListener("error", () => alert("Sth went wrong..."))

  reader.addEventListener("load", () => {
    const result = reader.result as string
    const appData: AppData = JSON.parse(result)
    for (const [key, value] of Object.entries(appData))
      localStorage.setItem(key, JSON.stringify(value))
  })
}

export default function Settings() {
  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if (!e.target.files?.length) return
    const file = e.target.files[0]
    restore(file)
  }

  return (
    <CenterContainer>
      <AppWindow
        title="Data"
        icon={Database}
        contentContainerClassName="flex flex-col items-center gap-5"
      >
        <button type="button" className="btn btn-primary btn-block" onClick={backupAndDownload}>
          <Download size={20} />
          <span>Back data up</span>
        </button>

        <label>
          <p className="mb-1">Restore data:</p>
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary block"
            onChange={handleFileInput}
          />
        </label>
      </AppWindow>
    </CenterContainer>
  )
}
