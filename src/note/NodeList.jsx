import { useContext, useMemo, useRef, useState } from "react"
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
    const [search, setSearch] = useState("");
    const inputSearch = useRef(null)

    const filterNotes = useMemo(() => {
        return notes.filter(note => note.text.includes(search));
    }, [notes, search])
    function handleSearch() {
        setSearch(inputSearch.current.value)
    }
    return (
        <>
            <input ref={inputSearch} type="text" />
            <button onClick={handleSearch}>search</button>
            <h4>Node List</h4>
            <ul>
                {
                    filterNotes.map((note) => 
                        <li key={note.id}><Note note={note} /></li>
                    )
                }
            </ul>
        </>
    )
}

export default NodeListContext