import { createContext, ReactNode, useContext, useState } from "react"

import { Store } from "@/services/store/type"

interface AuthContextType {
  username: string | null
  onSaveUsername: (username: string) => void
  onLogout: () => void
}

type AuthProviderProps = {
  children: ReactNode
  storage: Store
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children, storage }: AuthProviderProps) {
  const [username, setUsername] = useState<string | null>(() => {
    return storage.get("username")
  })

  const onSaveUsername = (username: string) => {
    setUsername(username)

    storage.save("username", username)
  }

  const onLogout = () => {
    setUsername(null)

    storage.remove("username")
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        onSaveUsername,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider")
  }
  return context
}
