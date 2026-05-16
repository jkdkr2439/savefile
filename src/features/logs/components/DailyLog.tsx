import { Save } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@shared/ui/Badge'
import { detectDebuffsFromText } from '../diagnostics'
import type { LogEntry } from '../log.types'

type DailyLogProps = {
  logs: LogEntry[]
  onLogsChange: (logs: LogEntry[]) => void
}

export function DailyLog({ logs, onLogsChange }: DailyLogProps) {
  const [whatHappened, setWhatHappened] = useState('')
  const [whatIDid, setWhatIDid] = useState('')
  const [whatChanged, setWhatChanged] = useState('')
  const [energy, setEnergy] = useState(55)
  const [focus, setFocus] = useState(55)
  const [mood, setMood] = useState(6)

  function submitLog() {
    const text = `${whatHappened} ${whatIDid} ${whatChanged}`
    const detectedDebuffs = detectDebuffsFromText(text, energy, focus)
    const entry: LogEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      whatHappened,
      whatIDid,
      whatChanged,
      mood,
      energy,
      focus,
      detectedDebuffs,
    }

    onLogsChange([entry, ...logs])
    setWhatHappened('')
    setWhatIDid('')
    setWhatChanged('')
  }

  return (
    <section className="log-layout">
      <div className="panel">
        <div className="panel__title">3-line Runtime Log</div>
        <label>
          What happened
          <textarea value={whatHappened} onChange={(event) => setWhatHappened(event.target.value)} />
        </label>
        <label>
          What I did
          <textarea value={whatIDid} onChange={(event) => setWhatIDid(event.target.value)} />
        </label>
        <label>
          What changed
          <textarea value={whatChanged} onChange={(event) => setWhatChanged(event.target.value)} />
        </label>
        <div className="slider-row">
          <label>Energy <input type="range" min="0" max="100" value={energy} onChange={(event) => setEnergy(Number(event.target.value))} /> {energy}</label>
          <label>Focus <input type="range" min="0" max="100" value={focus} onChange={(event) => setFocus(Number(event.target.value))} /> {focus}</label>
          <label>Mood <input type="range" min="1" max="10" value={mood} onChange={(event) => setMood(Number(event.target.value))} /> {mood}</label>
        </div>
        <button className="primary-button" onClick={submitLog} type="button">
          <Save size={17} />
          Save log
        </button>
      </div>

      <div className="log-stack">
        {logs.map((log) => (
          <article className="log-card" key={log.id}>
            <div className="log-card__head">
              <strong>{new Date(log.date).toLocaleDateString()}</strong>
              <span>Energy {log.energy} - Focus {log.focus}</span>
            </div>
            <p>{log.whatHappened}</p>
            <p>{log.whatIDid}</p>
            <p>{log.whatChanged}</p>
            <div className="hero-row">
              {log.detectedDebuffs.map((id) => (
                <Badge key={id} tone="warn">{id}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
