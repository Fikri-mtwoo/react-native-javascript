import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NodeApp from "./NoteApp";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NodeApp/>
    </StrictMode>
)