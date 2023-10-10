import React from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import ToDoList from "./ToDoList";

interface Props {
  todo: ToDo;
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    ); 
  };
  
  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todo) =>
        todo.id !== id 
      )
    ); 
  }   

  return (
    <form className="w-96 h-14 overflow-clip bg-[#CD7672] border rounded-3xl flex items-center justify-between px-4 text-lg text-white font-medium">
      {todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}
      <div className="flex gap-x-2 [&>*]:cursor-pointer">
        <span>
          <AiFillEdit />
        </span>
        <span
        onClick={()=> handleDelete(todo.id)}
        >
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(todo.id)}>
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
