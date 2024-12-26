import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWord from "./HelloWord";
import Container from "./Container";
import TodoList from "../todo/TodoList";
import Tabel from "../tabel/Tabel";
import Alert from "../button/Alert";
import MyButton from "../button/MyBuutton";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Container>
            <HelloWord/>
            <TodoList/>
            <Tabel/>
            <Alert text="Touch Me" pesan="You Touch Me"/>
            <MyButton text="Smash Me" onSamsh={() => alert('You Smash Me')} />
        </Container>
    </StrictMode>
)