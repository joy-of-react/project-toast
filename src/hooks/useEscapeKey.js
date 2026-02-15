import React from 'react';

export default function useEscapeKey(callback) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === 'Escape') {
                callback(event)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [callback])
}