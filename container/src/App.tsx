import { BrowserRouter } from "react-router-dom"

import { AuthProvider } from "./context/auth"
import { SelectedClientProvider } from "./context/selected-client"
import { Router } from "./routes"
import { store } from "./services/store"

function App() {
  return (
    <AuthProvider storage={store}>
      <SelectedClientProvider storage={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SelectedClientProvider>
    </AuthProvider>
  )
}

export default App
