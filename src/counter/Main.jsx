import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";
import CounterApp from "./CounterApp";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <Counter/>
        <Counter/> */}
        <CounterApp/>
    </StrictMode>
)

//react menyimpan state sesuai dengan posisi component

//componen sama diposisi sama
//jika terdapat kasus menampilkan componen yang sama tapi secara struktur UI dia berada diposisi yang sama maka state akan dipertahankan oleh react, yang artinya tidak akan dihapus. kecuali posisinya berubah atau component nya berubah, maka react akan menghapus state nya.