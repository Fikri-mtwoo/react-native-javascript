import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWord from "./HelloWord";
import Container from "./Container";
import TodoList from "../todo/TodoList";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Container>
            <HelloWord/>
            <TodoList/>
        </Container>
    </StrictMode>
)