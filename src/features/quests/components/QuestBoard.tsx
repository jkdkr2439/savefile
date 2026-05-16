import { Plus } from 'lucide-react'
import { createQuest } from '../questEngine'
import type { Quest, QuestStatus, QuestType } from '../quest.types'
import { QuestCard } from './QuestCard'

type QuestBoardProps = {
  quests: Quest[]
  onQuestsChange: (quests: Quest[]) => void
}

const types: QuestType[] = ['daily', 'side', 'main', 'boss']

export function QuestBoard({ quests, onQuestsChange }: QuestBoardProps) {
  function addQuest(type: QuestType) {
    const titles = {
      daily: 'New daily stabilizer',
      side: 'New side patch',
      main: 'New main quest',
      boss: 'New boss fight',
    }
    onQuestsChange([createQuest(type, titles[type]), ...quests])
  }

  function updateStatus(questId: string, status: QuestStatus) {
    onQuestsChange(
      quests.map((quest) =>
        quest.id === questId
          ? { ...quest, status, completedAt: status === 'done' ? new Date().toISOString() : quest.completedAt }
          : quest,
      ),
    )
  }

  return (
    <section className="quest-board">
      {types.map((type) => (
        <div className="quest-lane" key={type}>
          <div className="quest-lane__head">
            <h2>{type}</h2>
            <button title={`Add ${type} quest`} onClick={() => addQuest(type)} type="button">
              <Plus size={16} />
            </button>
          </div>
          <div className="quest-lane__cards">
            {quests
              .filter((quest) => quest.type === type)
              .map((quest) => (
                <QuestCard key={quest.id} quest={quest} onStatusChange={updateStatus} />
              ))}
          </div>
        </div>
      ))}
    </section>
  )
}
