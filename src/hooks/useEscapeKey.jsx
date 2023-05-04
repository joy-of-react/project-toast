import React from 'react';

export const useEscapeKey = (handleDismiss) => {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        handleDismiss();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismiss]);
};
