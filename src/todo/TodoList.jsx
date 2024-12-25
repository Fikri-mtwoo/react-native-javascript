import Todo from "./Todo";

export default function TodoList() {
    return (
        <ul>
            <Todo text="Belajar HTML" status={true} delet={true}/>
            <Todo text="Belajar CSS" status={true}/>
            <Todo text="Belajar Javascript" status={true}/>
            <Todo text="Belajar React" status={false}/>
        </ul>
    )
}