import React from "react";

export function useEscapeKey(setterFunction) {
  React.useEffect(() => {
    function handleEscapeKeyPress(event) {
      if (event.key === "Escape") {
        setterFunction([]);
      }
    }
    window.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [setterFunction]);
}
