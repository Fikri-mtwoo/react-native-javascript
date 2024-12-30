import { useContext, useState } from "react"
import { DispatchContext } from "./NoteContext"

function NodeForm({onAdd}) {
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

function NodeFormContext() {
    const [note, setNote] = useState("");
    const dispatch = useContext(DispatchContext);

    function handleOnChange(e){
        setNote(e.target.value)
    }

    function handleOnClick(e) {
        e.preventDefault()
        setNote("")
        dispatch({
            type:"ADD_NOTE",
            text:note
        })
    }
    return (
        <form>
            <input type="text" value={note} onChange={handleOnChange} />
            <button onClick={handleOnClick}>add</button>
        </form>
    )
}

export default NodeFormContext