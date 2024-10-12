import { BrowserRouter } from "react-router-dom"

import { ApiProvider } from "./context/api"
import { AuthProvider } from "./context/auth"
import { SelectedClientProvider } from "./context/selected-client"
import { Router } from "./routes"
import { api } from "./services/api"
import { store } from "./services/store"

function App() {
  return (
    <AuthProvider storage={store}>
      <SelectedClientProvider storage={store}>
        <ApiProvider api={api}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ApiProvider>
      </SelectedClientProvider>
    </AuthProvider>
  )
}

export default App
