import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfileApp from "./ProfileApp";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ProfileApp/>
    </StrictMode>
)

//context itu salah satu hook react yang berfungsi untuk mengirim informasi dari parent ke banyak child tanpa menggunakan state.
// cara menggunakan hook context pertama kita harus membuat context dengan menggunakan function createContext()
// untuk menggunakan atau mendapatkan data context menggunakan function useContext()
// untuk mengubah data dalam context menggunakan provider