import React from 'react'

export function useKeyDown(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === key) {
        callback(event)
      }
    }

    console.log('useKeyDown')
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, callback])
}
