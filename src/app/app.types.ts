import type { CharacterState } from '@features/character/character.types'
import type { LogEntry } from '@features/logs/log.types'
import type { Quest } from '@features/quests/quest.types'

export type PageId = 'dashboard' | 'quests' | 'log' | 'review' | 'system'

export type AppData = {
  character: CharacterState
  quests: Quest[]
  logs: LogEntry[]
}
