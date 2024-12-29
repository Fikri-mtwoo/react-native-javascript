import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
    const [status, setstatus] = useState(false);

    function handleChange(e) {
        setstatus(e.target.checked)
    }
    return (
        <>
            {/* <Counter/>
            {status && <Counter/>} */}

            {/* componen sama diposisi sama */}
            {status ? <Counter name={"Javascript"}/> : <Counter name={"React"}/>}
            <input type="checkbox" value={status} onChange={handleChange}/>Tampilkan Counter 2
        </>
    )
}