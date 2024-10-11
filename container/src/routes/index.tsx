import { Route, Routes } from "react-router-dom"

import Layout from "@/components/Layout"
import Clients from "@/pages/Clients"
import ClientsSelected from "@/pages/ClientsSelected"
import Home from "@/pages/Home"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients-selected" element={<ClientsSelected />} />
      </Route>
    </Routes>
  )
}
