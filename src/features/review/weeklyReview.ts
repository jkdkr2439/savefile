import { summarizeDebuffFrequency } from '@features/logs/diagnostics'
import type { LogEntry } from '@features/logs/log.types'
import type { Quest } from '@features/quests/quest.types'

export function buildWeeklyPatchNotes(logs: LogEntry[], quests: Quest[]) {
  const latestLogs = logs.slice(-7)
  const completed = quests.filter((quest) => quest.status === 'done').length
  const active = quests.filter((quest) => quest.status === 'active').length
  const topDebuffs = summarizeDebuffFrequency(latestLogs)
  const avgEnergy = average(latestLogs.map((log) => log.energy))
  const avgFocus = average(latestLogs.map((log) => log.focus))
  const mainBlocker = topDebuffs[0]?.debuff

  return {
    completed,
    active,
    avgEnergy,
    avgFocus,
    topDebuffs,
    headline: mainBlocker
      ? `Main blocker: ${mainBlocker.name}. Suggested patch: ${mainBlocker.patch}`
      : 'System stable enough. Keep the quest load small and protect the gold slot.',
  }
}

function average(values: number[]) {
  if (!values.length) return 0
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length)
}
