import { cn } from "@/lib/cns"
import { MagnifyingGlass } from "@phosphor-icons/react"
import type { FormEventHandler } from "react"

interface App {
  name: string
  url: string
  newWindow?: boolean
}

const APPS: App[] = [
  { name: "Aval AI", url: "https://chat.avalai.ir/chat", newWindow: true },
  { name: "Bahrami85", url: "https://bahrami85.liara.run" },
  { name: "BestOfJS", url: "https://bestofjs.org/" },
  { name: "Box Breathing", url: "https://lassebomh.github.io/box-breathing/" },
  { name: "Cobalt", url: "https://cobalt.tools/" },
  { name: "Code Wars", url: "https://www.codewars.com/", newWindow: true },
  { name: "DeepSeek", url: "https://chat.deepseek.com", newWindow: true },
  { name: "DevDocs", url: "https://devdocs.io/" },
  { name: "Expo Icons", url: "https://icons.expo.fyi/Index" },
  { name: "Expo", url: "https://docs.expo.dev/" },
  { name: "Figma", url: "https://figma.com/", newWindow: true },
  { name: "IT Tools", url: "https://it-tools.tech/" },
  { name: "Kashoob", url: "https://kashoob.com/" },
  { name: "KeyBr", url: "https://www.keybr.com/" },
  { name: "Milli Gold", url: "https://milli.gold/" },
  { name: "Monkey Type", url: "https://monkeytype.com/", newWindow: true },
  { name: "Phosphor Icons", url: "https://phosphoricons.com/" },
  { name: "Pomofocus", url: "https://pomofocus.io/" },
  { name: "Porsanesh", url: "https://www.porsanesh.com/" },
  { name: "Programmer Humor", url: "https://programmerhumor.io/", newWindow: true },
  { name: "QuickRef", url: "https://quickref.me/" },
  { name: "Radio Madza", url: "https://radio.madza.dev/" },
  { name: "React Native", url: "https://reactnative.dev/docs/getting-started" },
  { name: "React", url: "https://react.dev/reference/react" },
  { name: "RN Directory", url: "https://reactnative.directory/" },
  { name: "RN Shadow", url: "https://ethercreative.github.io/react-native-shadow-generator/" },
  { name: "Roadmap.sh", url: "https://roadmap.sh/", newWindow: true },
  { name: "Slow Roads", url: "https://slowroads.io/" },
  { name: "Space Typing", url: "https://zty.pe/" },
  { name: "Speed Typer", url: "https://speedtyper.dev/" },
  { name: "Syntax.fm", url: "https://syntax.fm/" },
  { name: "TailwindCSS", url: "https://tailwindcss.com/docs" },
  { name: "Time", url: "https://new.time.ir/" },
  { name: "TMIS", url: "http://njweb:8686/" },
  { name: "UI Patterns", url: "https://ui-patterns.com/patterns", newWindow: true },
  { name: "Wallex", url: "https://wallex.ir/" },
  { name: "Web Skills", url: "https://andreasbm.github.io/web-skills/" },
  {
    name: "XAUUSD",
    url: "https://www.tradingview.com/chart/?symbol=OANDA%3AXAUUSD",
    newWindow: true,
  },
  { name: "YouTube", url: "https://www.youtube.com/", newWindow: true },
]

interface Props {
  className?: string
  selectedUrl: string
  setSelectedUrl: (val: string) => void
}

export default function MiniBrowserCore({ className = "", selectedUrl, setSelectedUrl }: Props) {
  const styles = cn("w-full h-full", className)

  return selectedUrl ? (
    <iframe className={styles} title="Mini Browser App!" src={selectedUrl} />
  ) : (
    <div className={cn(styles, "flex flex-col gap-4 items-center p-3")}>
      <div className="flex gap-2 flex-wrap justify-center items-center">
        {APPS.map(app =>
          app.newWindow ? (
            <a
              target="_blank"
              rel="noreferrer"
              key={app.url}
              className="btn btn-xs btn-ghost"
              href={app.url}
            >
              {/* @{app.name.replaceAll(" ", "-").toLowerCase()} */}
              {app.name}
            </a>
          ) : (
            <button
              key={app.url}
              type="button"
              className="btn btn-xs btn-secondary"
              onClick={() => setSelectedUrl(app.url)}
            >
              {/* @{app.name.replaceAll(" ", "-").toLowerCase()} */}
              {app.name}
            </button>
          ),
        )}
      </div>
    </div>
  )
}
