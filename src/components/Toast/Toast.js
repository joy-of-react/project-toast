import React from 'react'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'
import VisuallyHidden from '../VisuallyHidden'
import styles from './Toast.module.css'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ toasts, setToasts, id, variant, children }) {
  const Variant = ICONS_BY_VARIANT[variant]

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Variant size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton}>
        <X
          size={24}
          onClick={() => {
            const updatedToasts = toasts.filter((toast) => toast.id !== id)
            setToasts(updatedToasts)
          }}
        />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast
