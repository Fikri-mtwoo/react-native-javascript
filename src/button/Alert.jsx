export default function Alert({text, pesan}) {
    //Event Handler
    //referensi
    //https://react.dev/reference/react-dom/components/common

    function halleClick() {
        alert (pesan)
    }

    return (
        <>
            <button onClick={halleClick}>{text}</button>
        </>
    )
}