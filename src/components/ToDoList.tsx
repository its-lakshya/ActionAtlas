import React from "react";
import { ToDo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props{
    todos:ToDo[], 
    setTodos:React.Dispatch<React.SetStateAction<ToDo[]>>, 
}

const ToDoList = ({todos, setTodos}:Props) => {
    return (
            // <div className='w-72 h-12 bg-[#CD7672] border rounded-3xl flex items-center px-4 text-lg text-white font-medium'>
            <div className='w-4/5 justify-center gap-y-4 flex gap-x-4 flex-wrap'>
                {todos.map((todo)=>(
                    <SingleTodo
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    />
                ))}
            </div>
    )
}

export default ToDoList;