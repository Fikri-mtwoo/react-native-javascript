import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Online from "./Online";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Online/>
    </StrictMode>
)

//custome hook, untuk membuat hook sendiri dengan syarat menggunakan keyword use