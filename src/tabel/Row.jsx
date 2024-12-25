export default function Row({id, text}) {
    //dikatakan sebuah function termasuk dalam pure function ketika memenuhi 2 kriteria
    //function akan mengembalikan nilai yang sama untuk nilai parameter yang sama
    //function tidak memiliki efek samping, tidak ada perubahan pada variable non local (variable yang berada diluar function)
    
    //react mengasumsikan bahwa setiap component yang kita buat adalah pure function
    //ini berarti bahwa react component yang kita buat harus selalu mengembalikan JSX yang sama dengan input yang sama

    return (
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    )
}