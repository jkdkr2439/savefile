import type { Debuff } from './debuff.types'

export const debuffCatalog: Debuff[] = [
  {
    id: 'sleep-debt',
    name: 'Sleep Debt',
    severity: 'high',
    signal: 'Low energy, unstable mood, high latency.',
    description: 'Deep recovery is behind schedule, causing cascading performance bugs.',
    patch: 'Move decision-heavy work out of today and run a 2-night sleep recovery block.',
  },
  {
    id: 'memory-leak',
    name: 'Memory Leak',
    severity: 'medium',
    signal: 'Rumination, doomscrolling, repeated thought loops.',
    description: 'Attention is draining into loops that do not produce useful output.',
    patch: 'Set a hard app cutoff, write a 3-line unload log, and leave the device outside bed.',
  },
  {
    id: 'deadlock',
    name: 'Deadlock',
    severity: 'medium',
    signal: 'Waiting for perfect conditions before acting.',
    description: 'The system is blocked by an impossible precondition.',
    patch: 'Timebox 40 minutes and ship the smallest imperfect artifact.',
  },
  {
    id: 'livelock',
    name: 'Livelock',
    severity: 'medium',
    signal: 'Lots of movement, little progress.',
    description: 'Activity is high, but outputs are not moving the main quest forward.',
    patch: 'Choose 1-2 weekly objectives and explicitly kill low-value tasks.',
  },
  {
    id: 'permission-creep',
    name: 'Permission Creep',
    severity: 'high',
    signal: 'Too many yeses, too little protected capacity.',
    description: 'External calls are gaining write access to your time and attention.',
    patch: 'Default-deny new commitments for one week unless they match the whitelist.',
  },
  {
    id: 'goodhart',
    name: 'Goodhart',
    severity: 'medium',
    signal: 'Optimizing visible metrics while the real goal decays.',
    description: 'The score has detached from the objective.',
    patch: 'Keep one quantitative metric and one qualitative review note per week.',
  },
]
