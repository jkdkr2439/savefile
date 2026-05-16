import { Activity, ClipboardList, FileClock, LayoutDashboard, Map, RotateCcw } from 'lucide-react'
import type { ReactNode } from 'react'
import type { PageId } from './app.types'

const navItems = [
  { id: 'dashboard', label: 'Sheet', icon: LayoutDashboard },
  { id: 'quests', label: 'Quests', icon: ClipboardList },
  { id: 'log', label: 'Log', icon: Activity },
  { id: 'review', label: 'Review', icon: FileClock },
  { id: 'system', label: 'System', icon: Map },
] as const

type AppShellProps = {
  activePage: PageId
  onPageChange: (page: PageId) => void
  onReset: () => void
  children: ReactNode
}

export function AppShell({ activePage, onPageChange, onReset, children }: AppShellProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand__mark">SF</div>
          <div>
            <h1>Savefile</h1>
            <p>Real-life RPG OS</p>
          </div>
        </div>

        <nav className="nav">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                className={`nav__item ${activePage === item.id ? 'nav__item--active' : ''}`}
                key={item.id}
                onClick={() => onPageChange(item.id)}
                title={item.label}
                type="button"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <button className="reset-button" onClick={onReset} type="button" title="Reset demo save file">
          <RotateCcw size={17} />
          <span>Reset save</span>
        </button>
      </aside>

      <main className="main-panel">{children}</main>
    </div>
  )
}
