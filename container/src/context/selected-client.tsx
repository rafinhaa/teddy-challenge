import { createContext, ReactNode, useContext, useState } from "react"

import { Client } from "@/@types/client"
import { Store } from "@/services/store/type"

interface SelectedClientContextType {
  selectedClients: Client[]
  onSelectClient: (client: Client) => void
  onRemoveSelectedClient: (client: Client) => void
  onClearAllSelectedClients: () => void
}

type SelectedClientProviderProps = {
  children: ReactNode
  storage: Store
}

const SelectedClientContext = createContext<
  SelectedClientContextType | undefined
>(undefined)

export function SelectedClientProvider({
  children,
  storage,
}: SelectedClientProviderProps) {
  const [selectedClients, setSelectedClients] = useState<Client[]>(() => {
    return storage.get("selectedClients") || []
  })

  const onSelectClient = (client: Client) => {
    const alreadySelected = selectedClients.find(
      (selectedClient) => selectedClient.id === client.id,
    )

    if (alreadySelected) throw new Error("Esse cliente já foi selecionado")

    setSelectedClients([...selectedClients, client])

    storage.save("selectedClients", [...selectedClients, client])
  }

  const onRemoveSelectedClient = (client: Client) => {
    const newSelectedClients = selectedClients.filter(
      (selectedClient) => selectedClient.id !== client.id,
    )

    setSelectedClients(newSelectedClients)

    storage.save("selectedClients", newSelectedClients)
  }

  const onClearAllSelectedClients = () => {
    setSelectedClients([])

    storage.remove("selectedClients")
  }

  return (
    <SelectedClientContext.Provider
      value={{
        selectedClients,
        onSelectClient,
        onRemoveSelectedClient,
        onClearAllSelectedClients,
      }}
    >
      {children}
    </SelectedClientContext.Provider>
  )
}

export function useSelectedClient() {
  const context = useContext(SelectedClientContext)
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider")
  }
  return context
}
