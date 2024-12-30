import { useImmer, useImmerReducer } from "use-immer";
import NodeForm from "./NodeForm";
import NodeList from "./NodeList";
import { useReducer } from "react";
import { DispatchContext, NoteContext } from "./NoteContext";
import NodeListContext from "./NodeList";
import NodeFormContext from "./NodeForm";

let id=0;
const data = [
    {id:id++, text:"belajar html", status:false, done:false}
]
//reduce merupakan function terpusat untuk mengelola logic seperti add,edit,delet


//deklarasi reducer
function noteReducer(notes, action){
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...notes,
                {
                    id:id++,
                    text:action.text,
                    status:false,
                    done:false

                }
            ]
        case 'CHANGE_NOTE':
            return notes.map((note) => 
                note.id === action.id ? {...note, text:action.text, status:action.status, done:action.done} :note
            )
        case 'DELET_NOTE':
            return notes.filter(note => note.id !== action.id)
    
        default:
            notes;
    }
}

//deklarasi reducer + library 
function notesReducerImmer(notes, action){
    if(action.type == "ADD_NOTE"){
        notes.push({
            id:id++,
            text:action.text,
            status:false,
            done:false

        })
    }else if(action.type == "CHANGE_NOTE"){
        const index = notes.findIndex(note => note.id === action.id)
        notes[index].text = action.text,
        notes[index].status = action.status,
        notes[index].done = action.done
         
    }else if(action.type == "DELET_NOTE"){
        const index = notes.findIndex(note => note.id === action.id)
        notes.splice(index, 1)
    }
}

export default function NodeApp() {
    //logic tanpa menggunakan reducer
    const [notes, setNotes] = useImmer(data)

    function handleAddNote(text) {
        setNotes((draf) => {
            draf.push({
                id:id++,
                text:text,
                status:false,
                done:false
            })
        })
    }

    function handleChangeNote(note){
        setNotes((draf) => {
            const indexNote = draf.findIndex(i => i.id === note.id)
            draf[indexNote] = note
        })
    }

    function handleDeleteNote(note) {
        setNotes((draf) => {
            const indexNote = draf.findIndex(i => i.id === note.id)
            draf.splice(indexNote, 1)
        })
    }

    //logic menggunakan reducer
    const [notesReducer, dispatch] = useReducer(noteReducer, data)

    function handleAddNoteReducer(text) {
        dispatch({
            type:"ADD_NOTE",
            text:text
        })
    }

    function handleChangeNoteReducer(note){
        dispatch({
            type:"CHANGE_NOTE",
            ...note
        })
    }

    function handleDeleteNoteReducer(note) {
        dispatch({
            type:"DELET_NOTE",
            id:note.id
        })        
    }

    
    // logic menggunakan reducer + library immer
    const [noteReducerImmer, dispatchReduceImmer] = useImmerReducer(notesReducerImmer, data)

    function handleAddNoteReducerImmer(text) {
        dispatchReduceImmer({
            type:"ADD_NOTE",
            text:text
        })
    }

    function handleChangeNoteReducerImmer(note){
        dispatchReduceImmer({
            type:"CHANGE_NOTE",
            ...note
        })
    }

    function handleDeleteNoteReducerImmer(note) {
        dispatchReduceImmer({
            type:"DELET_NOTE",
            id:note.id
        })        
    }

    return (
        <>
            {/* <h1>Note App</h1> */}
            {/* <NodeForm onAdd={handleAddNoteReducerImmer}/> */}
            {/* tanpa menggunakan reduce */}
            {/* <NodeList notes={notes} onChange={handleChangeNoteReducer} onDelet={handleDeleteNoteReducer}/> */}

            {/* menggunakan reduce */}
            {/* <NodeList notes={notesReducer} onChange={handleChangeNoteReducer} onDelet={handleDeleteNoteReducer}/> */}

            {/* menggunakan reduce + immer*/}
            {/* <NodeList notes={noteReducerImmer} onChange={handleChangeNoteReducerImmer} onDelet={handleDeleteNoteReducerImmer}/> */}

            {/* pengaplikasian reduce di context */}
            <NoteContext.Provider value={noteReducerImmer}>
                <DispatchContext.Provider value={dispatchReduceImmer}>
                    <h1>Note App</h1>
                    <NodeFormContext/>
                    <NodeListContext/>
                </DispatchContext.Provider>
            </NoteContext.Provider>
        </>
    )
}