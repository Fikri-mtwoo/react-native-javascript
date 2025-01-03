import { useEffect, useState } from "react"

export default function useOnline() {
    const [status, setStatus] = useState(true)

    useEffect(() => {
        function handleOnline(){
            setStatus(true)
        }
        function handleOffline(){
            setStatus(false)
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return () => {
            window.addEventListener("online", handleOnline)
            window.addEventListener("offline", handleOffline)
        }
    }, [])
    return status
}