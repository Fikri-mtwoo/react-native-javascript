import { useRef, useState } from "react"
import GuesBookForm from "./GuesBookForm"

export default function GuesBook() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const inputName = useRef(null)

    function handleClick(e){
        e.preventDefault()
        setName("")
        setMessage("")

        alert(`Name : ${name}, Message : ${message}`)

        //manipulasi DOM dengan ref
        // document.getElementById('nama').focus()
        inputName.current.focus()
    }

    return (
        <>
            <h1>GuestBook</h1>
            <form>
                <GuesBookForm refs={inputName} name={name} setName={setName}/>
                <label htmlFor="pesan">Pesan</label><br />
                <textarea name="pesan" id="pesan" value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br />
                <button type="button" onClick={handleClick}>Kirim</button>
            </form>
        </>
    )
}