import React from 'react';

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

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        setToasts([]);
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ToastsContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
