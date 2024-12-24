interface Props {
  title: string
  children: React.ReactNode
}

export default function AppWindow({ title, children }: Props) {
  return (
    <div className="card card-bordered card-compact bg-base-100 w-96 shadow-xl">
      <div className="border-b border-secondary">
        <p>{title}</p>
      </div>
      <div className="card-body">{children}</div>
    </div>
  )
}
