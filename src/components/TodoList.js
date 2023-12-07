import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

const TodoList = ({ isRefresh, setRefresh }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (setRefresh) {
            fetch("http://localhost:8000/todos")
                .then((res) => {
                    return res.json();
                }).then((data) => {
                    setRefresh(false);
                    setTodos(data);
                }).catch((err) => {
                    setRefresh(false);
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    }
                })
        }
    }, [isRefresh, setRefresh]);

    return (
        <ul id="todo-list">
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} setRefresh={setRefresh}/>
            ))}
        </ul>
    );
}

export default TodoList;