import { Outlet } from "react-router-dom"

import { useAuth } from "@/context/auth"

import Header from "../Header"

const Layout = () => {
  const { username, onLogout } = useAuth()

  return (
    <main>
      <Header userName={username} onPressLogout={onLogout} />
      <Outlet />
    </main>
  )
}

export default Layout
