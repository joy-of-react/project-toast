import React from 'react'
import Toast from '../Toast'
import { ToastContext } from '../ToastProvider'
import styles from './ToastShelf.module.css'

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        const { id, message, variant } = toast
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              toasts={toasts}
              setToasts={setToasts}
              id={id}
              variant={variant}
            >
              {message}
            </Toast>
          </li>
        )
      })}
    </ol>
  )
}

export default ToastShelf
