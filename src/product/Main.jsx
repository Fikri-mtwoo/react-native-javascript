import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductList from "./ProductList";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ProductList/>
    </StrictMode>    
)

// effect merupakan salah satu hook react yang berfungsi untuk berkomunikasi dengan external system dan lain-lain. external system seprti mengkonsum API
// effect berjalan setelah proses render selesai
// untuk menggunakan hook effect menggunakan function useEffect()
// effect memiliki infinite loop karena effect akan dijalankan seletah proses render componen selesai
// effect juga memmiliki effect clean up yang akan dieksekusi ketika effect akan menjalankan effect lain nya layak nya  finnaly pada try catch
// untuk menggunakan effect clean up dengan me return closure function
// effect dependencies merupakan paramater ke dua pada function useEffect()
// dependencies bisa diisi dengan array dari state. jadi ketika state tersebut berubah makan effect akan dijalankan tapi jika state tidak berubaha makan effect tidak akan dijalankan sehingga bida menjadi alternatif untuk pengecekan pada effect.
// dependencies juga bisa diisi array kosong, yang mana effect akan dijalankan sekali setelah proses render selesai
