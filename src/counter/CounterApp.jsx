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
            {/* {status ? <Counter name={"Javascript"}/> : <Counter name={"React"}/>} */}

            {/* mengubah posisi component */}
            {/* {
                status ? (<div><Counter name={"Javascript"}/></div>) : (<section><Counter name={"React"}/></section>)
            } */}

            {/* posisi component berbeda */}
            {/* {!status && <Counter name={"Javascript"}/>}
            {status && <Counter name={"React"}/>} */}

            {/* menggunakan key */}
            {status ? <Counter name={"Javascript"} key={"1"}/> : <Counter name={"React"} key={"2"}/>}
            <input type="checkbox" value={status} onChange={handleChange}/>Tampilkan Counter 2
        </>
    )
}