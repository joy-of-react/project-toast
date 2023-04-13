import React from "react";

export default function useEscapeKey(callbackFunc) {
  React.useEffect(() => {
    function handleESC(event) {
      if (event.code === "Escape") {
        callbackFunc();
      }
    }

    window.addEventListener("keydown", handleESC);

    return () => window.removeEventListener("keydown", handleESC);
  }, [callbackFunc]);
}
