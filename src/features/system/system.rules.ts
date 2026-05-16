import type { DomainState, InventoryItem, Skill } from './system.types'

export const skills: Skill[] = [
  { id: 'weekly-review', name: 'Weekly Review', branch: 'Recovery', unlocked: true, requirement: 'Log 7 days.' },
  { id: 'calendar-firewall', name: 'Calendar Firewall', branch: 'Focus', unlocked: true, requirement: 'Protect 5 deep work blocks.' },
  { id: 'rollback', name: 'Rollback', branch: 'Recovery', unlocked: false, requirement: 'Fail a habit and write a retrospective.' },
  { id: 'decision-policy', name: 'Decision Policy', branch: 'Strategy', unlocked: false, requirement: 'Write one page of principles.' },
  { id: 'public-shipping', name: 'Public Shipping', branch: 'Craft', unlocked: true, requirement: 'Publish 3 small outputs.' },
  { id: 'source-whitelist', name: 'Source Whitelist', branch: 'Boundary', unlocked: false, requirement: 'Cut one noisy source for 14 days.' },
]

export const inventory: InventoryItem[] = [
  { id: 'launch-template', name: 'Launch Post Template', type: 'Template', description: 'Reusable structure for shipping a small product.' },
  { id: 'trusted-call', name: 'Trusted Decision Call', type: 'Person', description: 'Consult before decisions with high downside.' },
  { id: 'walk-route', name: 'Morning Walk Route', type: 'Routine', description: 'A low-friction route for pressure release.' },
  { id: 'sleep-protocol', name: 'Sleep Recovery Protocol', type: 'Protocol', description: 'Two-night rollback for unstable energy.' },
]

export const domains: DomainState[] = [
  { id: 'health', name: 'Health', state: 'watch', note: 'Energy is usable but sleep debt can create cascading bugs.' },
  { id: 'work', name: 'Work', state: 'stable', note: 'Main quest has a clear shipping target.' },
  { id: 'money', name: 'Money', state: 'watch', note: 'Track buffer before entering aggressive PvP mode.' },
  { id: 'relationships', name: 'Relationships', state: 'stable', note: 'Weekly contact keeps the social cache fresh.' },
  { id: 'learning', name: 'Learning', state: 'stable', note: 'Avoid opening too many skill branches at once.' },
]
