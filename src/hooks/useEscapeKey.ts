import React from "react";

export function useEscapeKey(callBack) {
  React.useEffect(() => {
    function handleEscapeKeyPress(event) {
      if (event.key === "Escape") {
        callBack();
      }
    }
    window.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [callBack]);
}
