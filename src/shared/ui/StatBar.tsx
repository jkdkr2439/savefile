type StatBarProps = {
  label: string
  value: number
  tone?: 'good' | 'warn' | 'bad'
}

export function StatBar({ label, value, tone = 'good' }: StatBarProps) {
  return (
    <div className="stat-bar">
      <div className="stat-bar__meta">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <div className="stat-bar__track">
        <span className={`stat-bar__fill stat-bar__fill--${tone}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
