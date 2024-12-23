import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Home from "./routes/home"
import "./shared/styles.css"

const container = document.getElementById("root") as HTMLDivElement
const root = createRoot(container)
root.render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
