import React from "react";

export const ToastContext = React.createContext({});

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function handleDismissToast(id) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  function handleAddToast({ variant, message }) {
    setToasts((prev) => [...prev, { variant, message, id: Math.random() }]);
  }

  function handleDismissAll(event) {
    if (event.key === "Escape") {
      setToasts([]);
    }
  }

  const contextValue = React.useMemo(() => {
    return { toasts, handleDismissAll, handleDismissToast, handleAddToast };
  }, [toasts, handleDismissAll, handleDismissToast, handleAddToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
