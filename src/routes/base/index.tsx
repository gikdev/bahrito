import Drawer from "./drawer.comp"

interface Props {
  children: React.ReactNode
}

export default function Base({ children }: Props) {
  return <Drawer>{children}</Drawer>
}
