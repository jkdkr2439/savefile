export type Debuff = {
  id: string
  name: string
  severity: 'low' | 'medium' | 'high'
  description: string
  patch: string
  signal: string
}
