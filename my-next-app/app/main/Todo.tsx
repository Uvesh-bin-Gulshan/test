"use client"
import React, { useState } from 'react'
interface Task{
    id:number;
    text:string;
}

const Todo = () => {
    const [task,setTask]=useState<Task[]>([])
    const [newtask,setNewTask]=useState('')

    const [isEditngtask,setIsEditingTask]=useState()
    const [edittask,setEditask]=useState()

    const handleAddTask=()=>{
        if(newtask.trim()){
            setNewTask('')
        }
    }
    
  return (
 <>
 <div className='p-24'>
 <div className='w-full flex justify-between'>

 <input className='p-1 rounded-lg mr-2 w-full' placeholder='Enter Task' onChange={(e)=>setNewTask(e.target.value)}/>
 <button className='bg-teal-300 p-1 rounded-md w-1/2  ' onClick={handleAddTask}>add</button>
 </div>

 <div className='bg-slate-300 rounded-lg mt-2 w-full p-24'>
  {task.length===0?(

    <p>no task</p>
  ):(
    task.map((task)=>(

<>
<div key={task.id}>

{task.text}
</div>
</>

    ))
  )


  }

 </div>
 </div>
 
 </>
  )
}

export default Todo