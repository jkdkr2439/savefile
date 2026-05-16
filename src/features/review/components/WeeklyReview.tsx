import { FileClock, Wrench } from 'lucide-react'
import type { LogEntry } from '@features/logs/log.types'
import type { Quest } from '@features/quests/quest.types'
import { Badge } from '@shared/ui/Badge'
import { StatBar } from '@shared/ui/StatBar'
import { buildWeeklyPatchNotes } from '../weeklyReview'

type WeeklyReviewProps = {
  logs: LogEntry[]
  quests: Quest[]
}

export function WeeklyReview({ logs, quests }: WeeklyReviewProps) {
  const review = buildWeeklyPatchNotes(logs, quests)

  return (
    <section className="review-grid">
      <div className="panel panel--hero panel--wide">
        <div className="panel__eyebrow">Weekly Patch Notes</div>
        <h2>System review</h2>
        <p>{review.headline}</p>
      </div>

      <div className="panel">
        <div className="panel__title"><FileClock size={17} /> Throughput</div>
        <div className="metric-pair">
          <div><strong>{review.completed}</strong><span>completed</span></div>
          <div><strong>{review.active}</strong><span>active</span></div>
        </div>
        <StatBar label="Average energy" value={review.avgEnergy} tone={review.avgEnergy > 55 ? 'good' : 'warn'} />
        <StatBar label="Average focus" value={review.avgFocus} tone={review.avgFocus > 55 ? 'good' : 'warn'} />
      </div>

      <div className="panel panel--wide">
        <div className="panel__title"><Wrench size={17} /> Suggested Patches</div>
        <div className="patch-stack">
          {review.topDebuffs.map((item) =>
            item.debuff ? (
              <article className="patch-card" key={item.debuff.id}>
                <div>
                  <h3>{item.debuff.name}</h3>
                  <Badge tone="warn">{item.count} signals</Badge>
                </div>
                <p>{item.debuff.patch}</p>
              </article>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
