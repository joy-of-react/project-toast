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

function Toast({ formInput, setFormInput }) {
  const { message, variant, preview } = formInput
  const Variant = ICONS_BY_VARIANT[variant]

  return preview ? (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Variant size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton}>
        <X
          size={24}
          onClick={() => {
            setFormInput({
              ...formInput,
              preview: false,
            })
          }}
        />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  ) : null
}

export default Toast
