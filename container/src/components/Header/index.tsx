import { useState } from "react"
import {
  MdAccountBox,
  MdClose,
  MdHome,
  MdMenu,
  MdMoveToInbox,
} from "react-icons/md"
import { NavLink } from "react-router-dom"

import styles from "./styles.module.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.leftSide}>
          <button className={styles.hamburgerMenu} onClick={toggleMenu}>
            <MdMenu size={32} />
          </button>
          <img src="logo.svg" alt="Logo" className="logo" />
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : ""
                }
              >
                Clientes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clients-selected"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : ""
                }
              >
                Clientes selecionados
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout">Sair</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.rightSide}>
          Olá, <strong>Usuário</strong>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileLogoContainer}>
            <img src="logo.svg" alt="Logo" className={styles.mobileLogo} />
            <button className={styles.mobileMenuClose} onClick={toggleMenu}>
              <MdClose />
            </button>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/clients"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLinkMobile : ""
                  }
                  onClick={toggleMenu}
                >
                  <MdHome />
                  Clientes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/clients-selected"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLinkMobile : ""
                  }
                  onClick={toggleMenu}
                >
                  <MdAccountBox />
                  Clientes selecionados
                </NavLink>
              </li>
              <li>
                <NavLink to="/logout" onClick={toggleMenu}>
                  <MdMoveToInbox />
                  Sair
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
