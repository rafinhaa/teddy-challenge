import { createContext, ReactNode, useContext, useState } from "react"

interface AuthContextType {
  username: string
  onSaveUsername: (username: string) => void
  onLogout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string>("")

  const onSaveUsername = (username: string) => {
    setUsername(username)
  }

  const onLogout = () => {
    setUsername("")
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
