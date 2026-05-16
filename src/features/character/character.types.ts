export type BuildType =
  | 'Builder'
  | 'Explorer'
  | 'Strategist'
  | 'Support'
  | 'Closer'
  | 'Signal Maker'

export type ResourceKey =
  | 'energy'
  | 'focus'
  | 'stress'
  | 'moneyBuffer'
  | 'socialBandwidth'
  | 'healthBaseline'

export type ResourceState = Record<ResourceKey, number>

export type CharacterState = {
  name: string
  currentBuild: BuildType
  season: string
  resources: ResourceState
  activeDebuffIds: string[]
}
