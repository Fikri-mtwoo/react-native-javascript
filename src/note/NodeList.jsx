import Note from "./Note"

export default function NodeList({notes, onChange, onDelet}) {
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