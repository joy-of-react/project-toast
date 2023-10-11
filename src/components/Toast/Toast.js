import React from "react"
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from "react-feather"
import VisuallyHidden from "../VisuallyHidden"
import styles from "./Toast.module.css"

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon
}

function Toast({ message, variant, setShowToast }) {
  const Icon = variant ? ICONS_BY_VARIANT[variant] : Info
  const stylesForVariant = variant ? styles[variant] : styles.notice

  return (
    <div className={`${styles.toast} ${stylesForVariant}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button
        className={styles.closeButton}
        onClick={() => setShowToast(false)}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast
