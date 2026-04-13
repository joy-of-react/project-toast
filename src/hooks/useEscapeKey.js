import React from "react";

export default function useEscapeKey({ setToasts }) {
  React.useEffect((e) => {
    function handleEscapeKeydown(e) {
      if (e.key === "Escape") {
        setToasts([]);
      }
    }
    window.addEventListener("keydown", handleEscapeKeydown);
    return () => {
      window.removeEventListener("keydown", handleEscapeKeydown);
    };
  }, []);
}
