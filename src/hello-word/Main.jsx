import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWord from "./HelloWord";
import Container from "./Container";
import TodoList from "../todo/TodoList";
import Tabel from "../tabel/Tabel";
import Alert from "../button/Alert";
import MyButton from "../button/MyBuutton";
import Toolbar from "../button/Toolbar";
import FormSearch from "../form/FormSearch";
import Counter from "../form/Counter";
import AlertRef from "../button/AlertRef";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Container>
            <HelloWord/>
            <TodoList/>
            <Tabel/>
            <Alert text="Touch Me" pesan="You Touch Me"/>
            <MyButton text="Smash Me" onSamsh={() => alert('You Smash Me')} />
            <Toolbar onClick={(e) => {
                e.stopPropagation()
                alert('klik me')
            }} />
            <Counter/>
            <FormSearch/>
            <AlertRef text="Hit me" pesan="You success hit me"/>
        </Container>
    </StrictMode>
)