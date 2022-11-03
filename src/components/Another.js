import { useState } from "react";
// import { Link } from "react-router-dom";
import {useQuery} from 'react-query'
let global = 0;

function Another(){

    const [todo,setTodo]=useState([]);
    const [task,setTask]= useState("");

    const createList = ()=>{
        setTodo((old)=>{
            setTask("");
            return [...old,{todo:task,id:global++}]
        })
        
    }
    const happen = (e)=>{
       if(e.key==='Enter'){
        createList();
       }
    }

    const deleteButton = (id)=>{
          setTodo((prev)=> prev.filter((item)=> item.id !== id));
    }

    return(
        <>
            <div>Todo list</div>
            <button onClick={()=> setVisible(visible=> !visible)} >Click Me</button>
            <input onKeyDown={happen} type='text' value={task} onChange={(e)=> setTask(e.target.value)}/>
            <button onClick={createList}>Create List</button>
            <ul>
               {todo.map((t,index)=>(
                <div style={{display:'flex'}} key={t.id}>
                <li>{t.todo}</li>
                <button onClick={()=>deleteButton(t.id)}>delete</button>
                </div>
               ))}
            </ul>
        </>
    )
}

export default Another;