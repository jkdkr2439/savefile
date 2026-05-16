import { Check, Pause, Play, X } from 'lucide-react'
import { debuffCatalog } from '@features/logs/debuff.rules'
import { Badge } from '@shared/ui/Badge'
import type { Quest, QuestStatus } from '../quest.types'

type QuestCardProps = {
  quest: Quest
  onStatusChange: (questId: string, status: QuestStatus) => void
}

export function QuestCard({ quest, onStatusChange }: QuestCardProps) {
  const linkedDebuffs = quest.linkedDebuffIds
    .map((id) => debuffCatalog.find((debuff) => debuff.id === id)?.name)
    .filter(Boolean)

  return (
    <article className={`quest-card quest-card--${quest.type}`}>
      <div className="quest-card__top">
        <div>
          <Badge tone={quest.status === 'done' ? 'good' : quest.status === 'failed' ? 'bad' : 'neutral'}>
            {quest.type}
          </Badge>
          <h3>{quest.title}</h3>
        </div>
        <div className="icon-actions">
          <button title="Set active" onClick={() => onStatusChange(quest.id, 'active')} type="button">
            <Play size={16} />
          </button>
          <button title="Pause" onClick={() => onStatusChange(quest.id, 'paused')} type="button">
            <Pause size={16} />
          </button>
          <button title="Complete" onClick={() => onStatusChange(quest.id, 'done')} type="button">
            <Check size={16} />
          </button>
          <button title="Fail" onClick={() => onStatusChange(quest.id, 'failed')} type="button">
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="ipod-grid">
        <div><span>Input</span>{quest.input}</div>
        <div><span>Process</span>{quest.process}</div>
        <div><span>Output</span>{quest.output}</div>
        <div><span>Data</span>{quest.dataToTrack}</div>
      </div>

      {linkedDebuffs.length > 0 && <p className="linked-line">Linked debuff: {linkedDebuffs.join(', ')}</p>}
    </article>
  )
}
