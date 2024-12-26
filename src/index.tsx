import "./shared/styles.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Routes from "./routes"

const container = document.getElementById("root") as HTMLDivElement
const root = createRoot(container)
root.render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
