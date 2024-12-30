import { useContext } from "react"
import Note from "./Note"
import { NoteContext } from "./NoteContext"

function NodeList({notes, onChange, onDelet}) {
    return (
        <>
            <h1>Notes List</h1>
            <ul>
                {
                    notes.map((note) => 
                        <li key={note.id}><Note note={note} onChange={onChange} onDelet={onDelet}/></li>
                    )
                }
            </ul>
        </>
    )
}

function NodeListContext() {
    const notes = useContext(NoteContext)
    return (
        <>
            <h4>Node List</h4>
            <ul>
                {
                    notes.map((note) => 
                        <li key={note.id}><Note note={note} /></li>
                    )
                }
            </ul>
        </>
    )
}

export default NodeListContext