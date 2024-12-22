export default function HelloWord(){
    //spread syntax
    const props = {
        text : "Hello Word React JS"
    }
    return (
        <>
            <HeadingHelloWord {... props}/>
            <ParagrafHelloWord/>
        </>
    )
}

function HeadingHelloWord(props) {
    return (
        <>
            <h1 style={{
                color : "orange",
                backgroundColor : "black"
            }}>{props.text.toUpperCase()}</h1>
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

//kenapa menggunakan jsx dalam react
//karena tampilan web sekarang lebih interaktif dan sering nya konten HTML ditampilkan berdasarkan logika aplikasi
//website dibangun menggunakan HTML, CSS, Javascript
// HTML sebagai kerangka
// CSS sebagai tampilan
// javascript sebagai behavior atau logic

//aturan dalama jsx
// - component hanya dapat mengembalikan satu element jika ingin mengembalikan element lebih dari satu makan harus dibungkus dalam parent element atau fragment kosong
// wajib menutup semua tag element
// attribut dalam element menggunakan aturan penulisan variable dalam javascript seperti camel case

//kurung kurawal dalam JSX
//javascript dalam JSX ditulis dalam tanga kurung kurawal {}
//atau untuk nilai atribut pada tag element misal <img src={location}/>

//kurung kurawal double dalam JSX
//java script object sebagai nilai attribut element
