import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWord from "./HelloWord";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HelloWord/>
    </StrictMode>
)