import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GuesBook from "./GuesBook";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GuesBook/>
    </StrictMode>
)

// ref untuk menyimpan data dalam react yang tidak dapat melakukan render ulang.
// ref bisa digunakan untuk memanipulasi DOM pada elament, tapi tidak bisa digunakan pada manipulasi DOM pada componen.
// jika ingin menggunakan ref untuk componen, maka lakukan pengiriman ref ke componen melalui props selanjutnya props ref bisa digunakan pada DOM element didalam componen tersebut. 