import { useState } from "react"

export default function NodeForm({onAdd}) {
    const [note, setNote] = useState("")

    function handleOnChange(e){
        setNote(e.target.value)
    }

    function handleOnClick(e) {
        e.preventDefault()
        setNote("")
        onAdd(note)
    }
    return (
        <form>
            <input type="text" value={note} onChange={handleOnChange} />
            <button onClick={handleOnClick}>add</button>
        </form>
    )
}