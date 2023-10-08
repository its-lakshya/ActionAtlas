import React from "react";
import { ToDo } from "../model";

// interface text{
//     id:number, 
//     todo:string, 
//     isDone:boolean,
// }

const List = ({id , todo, isDone}:ToDo) => {
    return (
        <div className='w-44 h-16 bg-blue-300 border border-blue-600'>
            {todo}
        </div>
    )
}

export default List;