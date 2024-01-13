import React from "react";

export default function useEscapeKey(key,callback) {
    
    React.useEffect(() => {
        console.log('here')
        const handleKeyPress = (event) => {
            if(event.code===key) {
                callback()
            }
        }
        document.addEventListener('keydown',handleKeyPress);
        return () => {
            document.removeEventListener('keydown',handleKeyPress);
        };
    },[key, callback]);
}