import React from 'react';

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast({ message, variant }) {
    const newToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        variant,
        message,
      },
    ];

    setToasts(newToasts);
  }

  function removeToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastsContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
