import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"

import { ApiProvider } from "./context/api"
import { AuthProvider } from "./context/auth"
import { SelectedClientProvider } from "./context/selected-client"
import { Router } from "./routes"
import { api } from "./services/api"
import { store } from "./services/store"

const queryClient = new QueryClient()

function App() {
  return (
    <AuthProvider storage={store}>
      <QueryClientProvider client={queryClient}>
        <SelectedClientProvider storage={store}>
          <ApiProvider api={api}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ApiProvider>
        </SelectedClientProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
