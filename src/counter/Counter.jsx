import { useState } from "react";

export default function Counter({name}) {
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(counter + 1)
    }
    return (
        <>
            <button onClick={handleClick}>Increment</button>
            <p>Counter {name} : {counter}</p>
        </>
    )
}