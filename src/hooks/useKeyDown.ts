import React from "react";

export function useKeyDown(key, callback) {
  React.useEffect(() => {
    function handleEscapeKeyPress(event) {
      if (event.key === key) {
        callback(event);
      }
    }
    window.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [key, callback]);
}
