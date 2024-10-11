import { BrowserRouter } from "react-router-dom"

import { AuthProvider } from "./context/auth"
import { Router } from "./routes"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
