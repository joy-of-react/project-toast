import { useEffect } from "react";

export const useKeydown = (key, callback) => {
  useEffect(() => {
    const escapeKeyListener = (event) => {
      if (event.key === key) {
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener("keydown", escapeKeyListener);

    return () => {
      document.removeEventListener("keydown", escapeKeyListener);
    };
  }, [callback, key]);
};
