import { BrowserRouter } from "react-router-dom"

import { AuthProvider } from "./context/auth"
import { Router } from "./routes"
import { store } from "./services/store"

function App() {
  return (
    <AuthProvider storage={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
