import { ccn } from "@/lib/cns"
import { randomId } from "@/lib/generators"
import { CheckSquare, Clock, House, type Icon, NumberCircleOne } from "@phosphor-icons/react"
import { Link, useLocation } from "wouter"
import Nav from "./nav"

interface MenuItemParent {
  id: string
  title: string
  icon: null
  href: null
  subItems: MenuItem[]
}

interface MenuItemChild {
  id: string
  title: string
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
    title: "WORKSPACES",
    href: null,
    icon: null,
    subItems: [
      {
        id: randomId(),
        icon: Clock,
        title: "Time Management",
        href: "/workspaces/time-management",
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

    return isCateg ? (
      <li key={item.id}>
        <details open>
          <summary>{item.title.toUpperCase()}</summary>
          <ul>{item.subItems?.map(renderItems)}</ul>
        </details>
      </li>
    ) : (
      <li key={item.id}>
        <Link href={item.href} className={item.href === location ? "active" : undefined}>
          <IconToRender size={20} />
          <span>{item.title}</span>
        </Link>
      </li>
    )
  }
}
