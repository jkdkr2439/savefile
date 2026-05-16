import { useEffect, useMemo, useState } from 'react'
import { CharacterSheet } from '@features/character/components/CharacterSheet'
import { DailyLog } from '@features/logs/components/DailyLog'
import { QuestBoard } from '@features/quests/components/QuestBoard'
import { questCompletionRate } from '@features/quests/questEngine'
import { WeeklyReview } from '@features/review/components/WeeklyReview'
import { SystemView } from '@features/system/components/SystemView'
import { loadAppData, resetAppData, saveAppData } from '@shared/storage/storage'
import { AppShell } from './AppShell'
import type { AppData, PageId } from './app.types'

function App() {
  const [activePage, setActivePage] = useState<PageId>('dashboard')
  const [data, setData] = useState<AppData>(() => loadAppData())

  useEffect(() => {
    saveAppData(data)
  }, [data])

  const completionRate = useMemo(() => questCompletionRate(data.quests), [data.quests])

  const pageTitle = {
    dashboard: 'Character Sheet',
    quests: 'Quest Board',
    log: 'Runtime Log',
    review: 'Weekly Review',
    system: 'System Map',
  }[activePage]

  function handleReset() {
    setData(resetAppData())
    setActivePage('dashboard')
  }

  return (
    <AppShell activePage={activePage} onPageChange={setActivePage} onReset={handleReset}>
      <header className="topbar">
        <div>
          <span className="system-label">Runtime sandbox - local-first</span>
          <h1>{pageTitle}</h1>
        </div>
        <div className="topbar__status">
          <span>Season progress</span>
          <strong>{completionRate}%</strong>
        </div>
      </header>

      {activePage === 'dashboard' && <CharacterSheet character={data.character} quests={data.quests} />}
      {activePage === 'quests' && (
        <QuestBoard quests={data.quests} onQuestsChange={(quests) => setData({ ...data, quests })} />
      )}
      {activePage === 'log' && (
        <DailyLog logs={data.logs} onLogsChange={(logs) => setData({ ...data, logs })} />
      )}
      {activePage === 'review' && <WeeklyReview logs={data.logs} quests={data.quests} />}
      {activePage === 'system' && <SystemView />}
    </AppShell>
  )
}

export default App
