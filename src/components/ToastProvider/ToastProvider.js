import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext({});

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function handleDismissToast(id) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  function handleAddToast({ variant, message }) {
    setToasts((prev) => [...prev, { variant, message, id: Math.random() }]);
  }

  function handleDismissAll() {
    setToasts([]);
  }

  const contextValue = React.useMemo(() => {
    return { toasts, handleDismissAll, handleDismissToast, handleAddToast };
  }, [toasts, handleDismissAll, handleDismissToast, handleAddToast]);

  useEscapeKey(() => setToasts([]));

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
