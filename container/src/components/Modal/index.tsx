import { MdClose } from "react-icons/md"

import styles from "./styles.module.css"

export type ModalProps = {
  title: string
  isOpen: boolean

  onClose: () => void

  children?: React.ReactNode
}

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  return (
    isOpen && (
      <div>
        <div className={styles.overlay} />

        <div className={styles.modal}>
          <header>
            <h3>{title}</h3>
            <button onClick={onClose}>
              <MdClose size={24} />
            </button>
          </header>

          {children}
        </div>
      </div>
    )
  )
}

export default Modal
