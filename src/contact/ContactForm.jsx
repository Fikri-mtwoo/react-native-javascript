import { useState } from "react"
import { useImmer } from "use-immer"
export default function ContactForm() {
    const [contact, setContact] = useState({
        name : "",
        message : ""
    })

    const [contac, setContac] = useImmer({
        name : "",
        message : ""
    })

    function handleNameChange(e) {
        setContact({
            ...contact,
            name:e.target.value
        })

        setContac(contac => {
            contac.name = e.target.value
        })
    }
    function handleMessageChange(e) {
        setContact({
            ...contact,
            message:e.target.value
        })

        setContac(contac => {
            contac.message = e.target.value
        })
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Name" onChange={handleNameChange}/><br />
                <input type="text" placeholder="Message" onChange={handleMessageChange}/>
            </form>
            <h1>Contact Detail</h1>
            <p>Contact Name : {contact.name}</p>
            <p>Contact Message : {contact.message}</p>
            <h1>Contact Detail *use immer</h1>
            <p>Contact Name : {contac.name}</p>
            <p>Contact Message : {contac.message}</p>
        </div>
    )
}