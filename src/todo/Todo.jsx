export default function Todo({text, status, delet=false}){
    if(delet){
        return null
        //return null
    }else{
        return (
            <li>
                {/* {status ? <del>{text}</del> : text} */}
                {text} {status && '✅'}
            </li>
        )
    }

    //cara menambahkan kondisi pada JSX 
    //pengkondisian if
    //pengkondisian if else
    //pengkondisian ternary
    //pengkondisina AND
}