import Todo from "./Todo";

export default function TodoList() {
    const data = [
        {
            "id" : 0,
            "text" : "Belajar HTML",
            "status" : true
        },
        {
            "id" : 1,
            "text" : "Belajar CSS",
            "status" : true
        },
        {
            "id" : 2,
            "text" : "Belajar Javascipt",
            "status" : true
        },
        {
            "id" : 3,
            "text" : "Belajar React",
            "status" : true
        },
    ]

    const todos = data.map((todo) => {
        return (
            <Todo key={todo.id} {... todo}/>
        )
    })
    return (
        <ul>
            {/* <Todo text="Belajar HTML" status={true} delet={true}/>
            <Todo text="Belajar CSS" status={true}/>
            <Todo text="Belajar Javascript" status={true}/>
            <Todo text="Belajar React" status={false}/> */}
            {todos}
        </ul>
    )
}