import { useRef, useState } from "react"

export default function Timer() {
    const [start, setStart] = useState(null)
    const [now, setNow] = useState(null)

    const time = useRef(null)

    function handleStart() {
        setStart(Date.now())
        setNow(Date.now())
        time.current = setInterval(() => {
            setNow(Date.now())
        }, 10);
    }

    function handleStop() {
        clearInterval(time.current)
    }
    
    return (
        <>
            <h2>Timer {now - start} ms</h2>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </>
    )
}