import { useState } from "react"
import {
  MdAccountBox,
  MdClose,
  MdHome,
  MdMenu,
  MdMoveToInbox,
} from "react-icons/md"

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
              <a href="#">Clientes</a>
            </li>
            <li>
              <a href="#">Clientes selecionados</a>
            </li>
            <li>
              <a href="#">Sair</a>
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
                <a href="#" onClick={toggleMenu}>
                  <MdHome /> Home
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleMenu}>
                  <MdAccountBox /> Clientes
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleMenu}>
                  <MdMoveToInbox /> Produtos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
