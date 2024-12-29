import { useState } from "react";
import { useImmer } from "use-immer";

export default function TaskForm({setItems}) {
    const [item, setItem] = useState("");

    function handleChange(e){
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault()
        setItems((draf) => {
            draf.push(item);
        })
        setItem("")
    }

    return (
        <>
            <h1>Form Task</h1>
            <form>
                <input type="text" value={item} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </form>
        </>
    )
}