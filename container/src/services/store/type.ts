export interface Store {
  save: <T>(key: string, data: T) => void
  get: <T>(key: string) => T | null
  remove: (key: string) => void
}
