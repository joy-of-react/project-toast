import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [playgroundSelectedOptions, setPlaygroundSelectedOptions] =
    React.useState({
      message: '',
      variant: 'notice',
    });
  const [toastsInShelf, setToastsInShelf] = React.useState([]);
  const value = {
    playgroundSelectedOptions,
    setPlaygroundSelectedOptions,
    toastsInShelf,
    setToastsInShelf,
  };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
