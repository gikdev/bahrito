interface Props {
  title: string
  children: React.ReactNode
}

export default function AppWindow({ title, children }: Props) {
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <div>{children}</div>
    </div>
  )
}
