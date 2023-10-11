import React, { useEffect, useRef } from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import ToDoList from "./ToDoList";
import { useState } from "react";

interface Props {
  todo: ToDo;
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

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
  
  const handleEdit = (e:React.FormEvent,id:number)=> {
    e.preventDefault();

    setTodos(todos.map((todo)=> (
      todo.id===id?{...todo, todo:editTodo}:todo
    )));
    setEdit(false);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=> {
    inputRef.current?.focus();
  },[edit])

  return (
    <form className="w-96 h-14 overflow-clip bg-[#CD7672] border rounded-3xl flex items-center justify-between px-4 text-lg text-white font-medium"
    onSubmit={(e)=>{handleEdit(e, todo.id)}}
    >
      {
        edit ? (
          <input value={editTodo} ref={inputRef} onChange={(e)=>setEditTodo(e.target.value)}
          className="text-black outline-none"
          />
        )
        :
        (
          todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>
        )
      }

      {/* {todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>} */}
      <div className="flex gap-x-2 [&>*]:cursor-pointer">
        <span
        onClick={() =>
          {if(!edit && !todo.isDone){
            setEdit(!edit)
          }}
        }
        >
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
