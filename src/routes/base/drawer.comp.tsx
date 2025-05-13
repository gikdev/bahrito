import { ccn } from "@/lib/cns"
import { randomId } from "@/lib/generators"
import {
  CheckSquare,
  Clock,
  Desk,
  Gear,
  House,
  type Icon,
  Notepad,
  NumberCircleOne,
} from "@phosphor-icons/react"
import { Link, useLocation } from "wouter"
import Nav from "./nav.comp"

interface Common {
  id: string
  title: string
  disabled?: true
  isNew?: true
}

interface MenuItemParent extends Common {
  icon: null
  href: null
  subItems: MenuItem[]
}

interface MenuItemChild extends Common {
  icon: Icon
  href: string
  subItems: null
}

type MenuItem = MenuItemParent | MenuItemChild

const menuConfig: MenuItem[] = [
  {
    id: randomId(),
    title: "Home",
    href: "/",
    icon: House,
    subItems: null,
  },
  {
    id: randomId(),
    title: "Settings",
    href: "/settings",
    icon: Gear,
    subItems: null,
  },
  {
    id: randomId(),
    title: "WORKSPACES",
    href: null,
    icon: null,
    subItems: [
      {
        id: randomId(),
        icon: Desk,
        title: "Work",
        href: "/workspaces/work",
        subItems: null,
      },
    ],
  },
  {
    id: randomId(),
    title: "APPS",
    href: null,
    icon: null,
    subItems: [
      {
        id: randomId(),
        icon: Clock,
        title: "Salary Watch",
        href: "/apps/salary-watch",
        subItems: null,
      },
      {
        id: randomId(),
        icon: CheckSquare,
        title: "Todoly",
        href: "/apps/todoly",
        subItems: null,
      },
      {
        id: randomId(),
        icon: NumberCircleOne,
        title: "One Thing",
        href: "/apps/one-thing",
        subItems: null,
      },
      {
        id: randomId(),
        icon: Notepad,
        title: "Notehad",
        href: "/apps/notehad",
        subItems: null,
      },
    ],
  },
]

interface Props {
  className?: string
  children: React.ReactNode
}

export default function Drawer({ children, className }: Props) {
  const [location] = useLocation()
  const styles = ccn("drawer-content grow shrink flex flex-col", className)

  return (
    <>
      <Nav />
      <div className="drawer grow shrink lg:drawer-open">
        <input id="drawer-n2lxn2ld" type="checkbox" className="drawer-toggle" />
        <div {...styles}>{children}</div>

        <div className="drawer-side">
          <label htmlFor="drawer-n2lxn2ld" aria-label="close sidebar" className="drawer-overlay" />
          <ul className="menu bg-base-200 text-base-content min-h-full grow shrink w-80 p-4">
            {menuConfig.map(renderItems)}
          </ul>
        </div>
      </div>
    </>
  )

  function renderItems(item: MenuItem): JSX.Element {
    const isCateg = !!item.subItems
    const IconToRender = item.icon as Icon
    const FinalLink = item.disabled ? "span" : Link

    return isCateg ? (
      <li key={item.id} {...ccn({ disabled: !!item.disabled })}>
        <details open>
          <summary>{item.title.toUpperCase()}</summary>
          <ul>{item.subItems?.map(renderItems)}</ul>
        </details>
      </li>
    ) : (
      <li key={item.id} {...ccn({ disabled: !!item.disabled })}>
        <FinalLink href={item.href} {...ccn({ active: item.href === location })}>
          <IconToRender size={20} />
          <span>{item.title}</span>
          {item.isNew && <div className="badge badge-secondary badge-sm">NEW</div>}
        </FinalLink>
      </li>
    )
  }
}
