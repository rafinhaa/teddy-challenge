import { forwardRef, useImperativeHandle, useState } from "react"
import { MdClose } from "react-icons/md"

import styles from "./styles.module.css"

export type ModalProps = {
  title: string

  children?: React.ReactNode
}

export type ModalRef = {
  open: () => void
  close: () => void
}

const Modal = forwardRef<ModalRef, ModalProps>(({ title, children }, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true)
    },
    close: () => {
      setIsOpen(false)
    },
  }))

  return (
    isOpen && (
      <div>
        <div className={styles.overlay} />

        <div className={styles.modal}>
          <header>
            <h3>{title}</h3>
            <button onClick={() => setIsOpen(false)}>
              <MdClose size={24} />
            </button>
          </header>

          {children}
        </div>
      </div>
    )
  )
})

export default Modal
