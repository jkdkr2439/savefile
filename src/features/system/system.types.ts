export type Skill = {
  id: string
  name: string
  branch: string
  unlocked: boolean
  requirement: string
}

export type InventoryItem = {
  id: string
  name: string
  type: string
  description: string
}

export type DomainState = {
  id: string
  name: string
  state: 'stable' | 'watch' | 'critical'
  note: string
}
