import React from "react";
import Toast from "../Toast/Toast";

const ToastContext = React.createContext([]);

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
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          background: "transparent",
        }}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            handleDismiss={() => clearToast(toast.id)}
          >
            {toast.message}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
