import { Store } from "../type"

export class LocalStorage implements Store {
  save = <T>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  get = <T>(key: string) => {
    return (JSON.parse(localStorage.getItem(key) as string) as T) || null
  }

  remove = (key: string) => {
    localStorage.removeItem(key)
  }
}
