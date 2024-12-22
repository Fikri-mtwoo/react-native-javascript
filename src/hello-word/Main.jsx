import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWord from "./HelloWord";
import Container from "./Container";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Container>
            <HelloWord/>
        </Container>
    </StrictMode>
)