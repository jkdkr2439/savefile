import type { BuildType } from './character.types'

export const buildProfiles: Record<
  BuildType,
  { strength: string; risk: string; suggestedPatch: string }
> = {
  Builder: {
    strength: 'Ships projects, systems, and reusable assets.',
    risk: 'Can over-optimize until shipping is delayed.',
    suggestedPatch: 'Keep one weekly public output and one kill list.',
  },
  Explorer: {
    strength: 'Learns fast and samples new environments.',
    risk: 'Can fragment attention before depth compounds.',
    suggestedPatch: 'Use 14-day trials before switching tracks.',
  },
  Strategist: {
    strength: 'Allocates resources under uncertainty.',
    risk: 'Can freeze in analysis paralysis.',
    suggestedPatch: 'Pre-commit decision criteria before research.',
  },
  Support: {
    strength: 'Stabilizes people, teams, and emotional load.',
    risk: 'Can burn out through invisible commitments.',
    suggestedPatch: 'Rate-limit requests and protect recovery blocks.',
  },
  Closer: {
    strength: 'Executes, negotiates, and finishes.',
    risk: 'Can create ethical or technical debt when boundaries slip.',
    suggestedPatch: 'Write red lines before high-pressure pushes.',
  },
  'Signal Maker': {
    strength: 'Turns ideas into narrative, culture, and public signal.',
    risk: 'Can Goodhart on attention metrics.',
    suggestedPatch: 'Pair every signal output with substance evidence.',
  },
}
