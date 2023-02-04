import React from "react";
import ToastShelf from "../ToastShelf/ToastShelf";

const ToastContext = React.createContext({});

export function useToasts() {
  return React.useContext(ToastContext);
}

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const showToast = React.useCallback((variant, message) => {
    const newToast = { id: crypto.randomUUID(), variant, message };
    setToasts((t) => [...t, newToast]);
  }, []);

  const clearToast = React.useCallback((id) => {
    setToasts((t) => t.filter((v) => v.id !== id));
  }, []);

  const value = React.useMemo(() => {
    return { clearToast, showToast };
  }, [clearToast, showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastShelf handleDismiss={clearToast} toasts={toasts} />
    </ToastContext.Provider>
  );
}

export default ToastProvider;
