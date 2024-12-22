export default function HelloWord(){
    return (
        <>
            <HeadingHelloWord/>
            <ParagrafHelloWord/>
        </>
    )
}

function HeadingHelloWord() {
    return (
        <>
            <h1>Hello Word</h1>
        </>
    )
}

function ParagrafHelloWord() {
    return (
        <>
            <p>Belajar React JS Native</p>
        </>
    )
}

//componen return dari function jsx
//dalam function idealnya atau best practices memiliki satu function yang sesuai dengan nama file
//tapi bisa juga dalam satu file mempunya banyak function yang mengembalikan tampilan