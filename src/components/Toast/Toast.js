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
import { ToastContext } from '../ToastProvider'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ id, variant, children }) {
  const { toasts, setToasts } = React.useContext(ToastContext)
  const Variant = ICONS_BY_VARIANT[variant]

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Variant size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => {
          const updatedToasts = toasts.filter((toast) => toast.id !== id)
          setToasts(updatedToasts)
        }}
        aria-label='Dismiss message'
        aria-live='off'
      >
        <X size={24} />
      </button>
    </div>
  )
}

export default Toast
