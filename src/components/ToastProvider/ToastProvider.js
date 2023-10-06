import React from 'react';
import useKeydown from '../../hooks/use-keydown';

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      variant: 'success',
      message: 'this is a success message',
    },
    {
      id: crypto.randomUUID(),
      variant: 'warning',
      message: 'this is a warning message',
    },
    {
      id: crypto.randomUUID(),
      variant: 'error',
      message: 'this is an error message',
    },
  ]);

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

  const removeAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown('Escape', removeAllToasts);

  return (
    <ToastsContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
