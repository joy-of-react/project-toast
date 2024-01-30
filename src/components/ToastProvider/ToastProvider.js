import React from "react";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [toasts, setToasts] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newToasts = [
      ...toasts,
      { id: crypto.randomUUID(), message: message, variant: selectedVariant },
    ];
    setToasts(newToasts);
    setMessage("");
    setSelectedVariant(VARIANT_OPTIONS[0]);
  };

  const handleDismiss = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  };

  return (
    <ToastContext.Provider
      value={{
        message,
        selectedVariant,
        toasts,
        setMessage,
        setSelectedVariant,
        handleDismiss,
        handleSubmit,
        VARIANT_OPTIONS,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
