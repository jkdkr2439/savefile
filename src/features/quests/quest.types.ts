export type QuestType = 'daily' | 'side' | 'main' | 'boss'
export type QuestStatus = 'active' | 'done' | 'paused' | 'failed'

export type Quest = {
  id: string
  title: string
  type: QuestType
  status: QuestStatus
  input: string
  process: string
  output: string
  dataToTrack: string
  linkedDebuffIds: string[]
  createdAt: string
  completedAt?: string
}
