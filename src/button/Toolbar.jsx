export default function Toolbar({onClick}) {
    //event propagation merupakan salah satu cara untuk menghentikan default action saat membuat event handler
    //cara lain selain event propagation untuk menghentikan default action ada preventDefault()
    return (
        <div onClick={onClick} style={{backgroundColor:"orange"}}>
            <button onClick={onClick}>Button Pertama</button>
            <button onClick={onClick}>Button Kedua</button>
        </div>
    )
}