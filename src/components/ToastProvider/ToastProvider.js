import React from 'react'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])
  const [formInput, setFormInput] = React.useState({
    message: '',
    variant: 'notice',
  })

  React.useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setToasts([])
      }
    })

    return () => {
      document.removeEventListener('keydown', () => {})
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormInput({
      ...formInput,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formInput.message || !formInput.variant) {
      return
    }

    const newToast = {
      ...formInput,
      id: crypto.randomUUID(),
    }

    setToasts([...toasts, newToast])
    setFormInput({
      message: '',
      variant: 'notice',
    })
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
        formInput,
        setFormInput,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
