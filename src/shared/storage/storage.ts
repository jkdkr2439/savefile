import type { AppData } from '@app/app.types'
import { seedData } from '@data/seed'

const STORAGE_KEY = 'savefile-data'

export function loadAppData(): AppData {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return seedData

  try {
    return JSON.parse(raw) as AppData
  } catch {
    return seedData
  }
}

export function saveAppData(data: AppData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function resetAppData() {
  localStorage.removeItem(STORAGE_KEY)
  return seedData
}
