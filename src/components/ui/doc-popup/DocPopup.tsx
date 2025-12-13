import { FC } from 'react'
import { IoClose } from 'react-icons/io5'
import styles from './DocPopup.module.scss'

interface DocPopupProps {
  url: string
  isOpen: boolean
  onClose: () => void
}

const DocPopup: FC<DocPopupProps> = ({ url, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close">
        <IoClose />
      </button>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <iframe
          src={url}
          className={styles.iframe}
          title="Documentation"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default DocPopup
