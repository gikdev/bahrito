import { List } from "@phosphor-icons/react"

export default function Nav() {
  return (
    <nav className="navbar bg-base-100">
      <a href="/" className="btn btn-ghost text-xl">
        Bahrito
      </a>
      <label
        htmlFor="drawer-n2lxn2ld"
        className="btn btn-neutral ms-auto btn-square drawer-button lg:hidden"
      >
        <List size={24} />
      </label>
    </nav>
  )
}
