import React, { Children } from 'react';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Please enter the information',
      variant: 'error'
    },
    {
      id: crypto.randomUUID(),
      message: 'Please enter the information',
      variant: 'notice'
    }
  ])

  const createToast = (message,variant) => {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      }
    ]
    setToasts(nextToasts)
  }

  const dismissToast = (id) => {
    const nextToasts = toasts.filter((toast) => { return toast.id !== id })
    setToasts(nextToasts)
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }} >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
