import { debuffCatalog } from './debuff.rules'
import type { LogEntry } from './log.types'

const rules: Array<{ id: string; terms: string[] }> = [
  { id: 'sleep-debt', terms: ['sleep', 'tired', 'late night', 'bed', 'energy', 'mệt', 'ngủ'] },
  { id: 'memory-leak', terms: ['scroll', 'doom', 'rumination', 'loop', 'overthinking', 'lặp'] },
  { id: 'deadlock', terms: ['perfect', 'waiting', 'stuck', 'blocked', 'đợi', 'kẹt'] },
  { id: 'livelock', terms: ['busy', 'switching', 'movement', 'no progress', 'bận', 'lan man'] },
  { id: 'permission-creep', terms: ['yes', 'request', 'meeting', 'interrupt', 'commitment', 'nhận thêm'] },
  { id: 'goodhart', terms: ['likes', 'views', 'metric', 'score', 'attention', 'chỉ số'] },
]

export function detectDebuffsFromText(text: string, energy: number, focus: number): string[] {
  const normalized = text.toLowerCase()
  const detected = new Set<string>()

  rules.forEach((rule) => {
    if (rule.terms.some((term) => normalized.includes(term))) {
      detected.add(rule.id)
    }
  })

  if (energy < 45) detected.add('sleep-debt')
  if (focus < 45) detected.add('memory-leak')

  return Array.from(detected)
}

export function summarizeDebuffFrequency(logs: LogEntry[]) {
  const counts = new Map<string, number>()

  logs.forEach((log) => {
    log.detectedDebuffs.forEach((id) => counts.set(id, (counts.get(id) ?? 0) + 1))
  })

  return Array.from(counts.entries())
    .map(([id, count]) => ({
      debuff: debuffCatalog.find((item) => item.id === id),
      count,
    }))
    .filter((item) => item.debuff)
    .sort((a, b) => b.count - a.count)
}
