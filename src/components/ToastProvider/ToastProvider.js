import React from 'react';
import useEscapeKey from '../../hooks/use-keydown';
export const ToastMessagesContext = React.createContext();

function ToastProvider({ children }) {
  const [toastMessages, setToastMessages] = React.useState([]);
  const handleClose = (key) => {
    let filteredMessages = toastMessages.filter(message => message.key !== key);
    setToastMessages(filteredMessages);
  }
  const clearToast = React.useCallback(() => setToastMessages([]),[])
  useEscapeKey('Escape', clearToast);
  const createToast = (message, variant) => {
    const newToastMessage = {
      content:message, variantSelected:variant, key: crypto.randomUUID()
    };
    const updateToastMessages = [...toastMessages,newToastMessage];
    setToastMessages(updateToastMessages);
  }
  return (
    <>
      <ToastMessagesContext.Provider value={{toastMessages, createToast, handleClose}}>
        {children}
      </ToastMessagesContext.Provider>
    </>
  )
}

export default ToastProvider;
