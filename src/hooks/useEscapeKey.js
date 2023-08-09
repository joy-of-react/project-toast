import React from "react";

export function useEscapeKey(callbackFunction) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === 'Escape') {
                callbackFunction();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [callbackFunction]);
}