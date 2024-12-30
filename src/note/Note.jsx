import { useState } from "react";

export default function Note({note, onChange, onDelet}) {

    function handleOnChange(e) {
        const newNote = {...note, text: e.target.value}
        onChange(newNote)
    }

    function handleClickSave(){
        const newNote = {...note, status: false}
        onChange(newNote)
    }

    function handleClickEdit(){
        const newNote = {...note, status: true}
        onChange(newNote)
    }

    let componen = "";
    if(note.status){
        componen = (
            <>
                <input type="text" value={note.text} onChange={handleOnChange}/>
                <button onClick={handleClickSave}>save</button>
            </>
        )
    }else{
        if(note.done){
            componen = (
                <>
                    <del>{note.text}</del>
                </>
            )
        }else{
            componen = (
                <>
                    {note.text}
                    <button onClick={handleClickEdit}>edit</button>
                </>
            )
        }
    }

    function handleOnChangeDone(e) {
        const newNote = {...note, done: e.target.checked}
        onChange(newNote)
    }

    function handleDelete(){
        onDelet(note)
    }

    return (
        <label>
            {!note.status && <input type="checkbox" checked={note.done} onChange={handleOnChangeDone}/>}
            {componen}
            <button onClick={handleDelete}>delet</button>
        </label>
    )
}