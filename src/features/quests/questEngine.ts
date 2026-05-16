import type { Quest, QuestType } from './quest.types'

export function createQuest(type: QuestType, title: string): Quest {
  return {
    id: crypto.randomUUID(),
    title,
    type,
    status: 'active',
    input: 'What pressure, opportunity, or resource makes this quest matter?',
    process: 'What small mechanism will you run?',
    output: 'What observable result should exist when it is done?',
    dataToTrack: 'What should the save file remember?',
    linkedDebuffIds: [],
    createdAt: new Date().toISOString(),
  }
}

export function questCompletionRate(quests: Quest[]) {
  if (quests.length === 0) return 0
  return Math.round((quests.filter((quest) => quest.status === 'done').length / quests.length) * 100)
}
