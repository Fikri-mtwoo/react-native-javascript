import { useRef } from "react"

export default function AlertRef({text, pesan}) {
    const counter = useRef(0);

    function halleClick() {
        alert (`${pesan} ${counter.current++}`)
    }

    return (
        <>
            <button onClick={halleClick}>{text}</button>
        </>
    )
}