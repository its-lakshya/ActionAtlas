import React, { FormEvent } from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { ToDo } from './model';
import List from './components/List';

const App:React.FC = () =>  {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<ToDo[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id:Date.now(), todo:todo, isDone:false}])
      setTodo("");
    }
  }

  return (
    <div className="flex flex-col w-full h-screen items-center my-10 mx-10 max-sm:my-5 max-sm:mx-5 gap-y-10">
      <div className='font-semibold text-3xl'>ActionAtlas</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {todos.map((todo) => {
        console.log(todo)
        return(
        <List key={todo.id} id={todo.id} todo={todo.todo} isDone={todo.isDone}/>        
      )})}
    </div>
  );
}

export default App;


// // let id:any; //this is not recommended
// // let id:unknown; //instead of any we can use unknown
// let name:string; 
// // let name:string | number; // this is union operator now out name can have both string and number 

// let age:number;
// let isStudent:boolean;
// let manyAges:number[]; // this is the array of type number
// let role:[number, string] //this is tupel

// // let handleClick:Function ; //this is not a good way to declare functions
// let handleClick :(name:string, age:number) => void; //this will return unknown;
// let handleClick2 :(name:string, age:number) => never; //this will return nothing;


// //type and interface are called alias
// type Person={
//   name:string, 
//   age?:number, //this ? made the age optional
// }

// type Animal = Person & {   //extending the type animal with the type person
//   color:string, 
//   breed:string,
// }

// let person:Person

// interface Person2{
//   name:string, 
//   age?:number, 
// }

// interface Animal2 extends Person2{   //extending the interface Animal2 with the interface Person2
//   color:string, 
//   breed:string, 
// }

// interface Animal3 extends Person{   //extending the interface Animal2 with the type Person2
//   color:string, 
//   breed:string, 
// }

// type Animal4= Person2 &{   // extending the type Animal4 with the interface Person2
//   color:string, 
//   bree:string,
// }
