import { Navigate, Route, Routes } from "react-router-dom"

import Layout from "@/components/Layout"
import { useAuth } from "@/context/auth"
import Clients from "@/pages/Clients"
import ClientsSelected from "@/pages/ClientsSelected"
import Home from "@/pages/Home"

type PrivateRouteProps = {
  isLogged: boolean
  children: JSX.Element
}

const PrivateRoute = ({ isLogged, children }: PrivateRouteProps) => {
  if (!isLogged) {
    return <Navigate to="/" replace />
  }
  return children
}

export const Router = () => {
  const { username } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/"
        element={
          <PrivateRoute isLogged={!!username}>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="clients" element={<Clients />} />
        <Route path="clients-selected" element={<ClientsSelected />} />
      </Route>
    </Routes>
  )
}
