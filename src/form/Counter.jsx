import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button onClick={
                () => {
                    setCounter(counter+1)
                }
            }>
                Increment
            </button>
            <h1>Counter : {counter}</h1>
        </div>
    )

    //state salah satu hook dalam react untuk perubahan data dalam componen
    //perubahan data itu dilakukan dengan cara merender ulang componen yang state nya berubah
    //render itu terbagi menjadi 3 fase
    //pertama triger proses render {initial render dan perubahan state}
    //kedua melakukan proses render componen
    //ketiga menampilkan hasil render componen ke DOM
    //snapshot mirip seperti state

}

//contoh snapshot
function ContohSnapshot() {
    const [conter, setConter] = useState(0)
    function handlerClick(){
        setConter(conter + 1) //setCounter(0 + 1)
        setConter(conter + 1) //setCounter(0 + 1)
        setConter(conter + 1) //setCounter(0 + 1)
    }
    return (
        <>
            <button onClick={handlerClick}>Increment +3 </button>
            <h1>Conter : {conter}</h1>
        </>
    )
}

//contoh update state
function ContohUpdateState() {
    const [conter, setConter] = useState(0)
    function handlerClick(){
        setConter((c) => c+1) //setCounter(0 + 1)
        setConter((c) => c+1) //setCounter(1 + 1)
        setConter((c) => c+1) //setCounter(2 + 1)
    }
    return (
        <>
            <button onClick={handlerClick}>Increment +3 </button>
            <h1>Conter : {conter}</h1>
        </>
    )
}

export default Counter;