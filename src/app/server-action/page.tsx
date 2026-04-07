"use client"
import React, { useEffect, useState } from 'react'

const ServerActionPage = () => {
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () =>{
        try {
            const res = await fetch("http://localhost:3000/api/todos");
            const data = await res.json();
            setTodos(data)
        } catch (error) {
            console.error("Loi khi lay todos",error)
        }
    }

    useEffect(() =>{
        fetchTodos();
    },[])

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();
        setIsLoading(true);
        setMessage("");
        try {
            const res = await fetch("http://localhost:3000/api/todos",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({title})

            })
            const result = await res.json();
            console.log(result)
            if(!res.ok){
                throw new Error(result.error || "co loi xay ra")
            }
            setTitle("");
            setMessage("Them cong viec thanh cong")

            fetchTodos();
            
        } catch (error:any) {
            setMessage(error.message)
        }finally{
            setIsLoading(false)
        }
    }
  return (
    <main className='container'>
        <form action="" 
        onSubmit={handleSubmit} 
        className='form flex flex-col'
        >
            <input 
            type="text" 
            name='title'
            placeholder='Nhap viec can lam'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}
            className='input'/>
            <button type='submit'
            disabled={isLoading}>
              {isLoading ? "dang gui" :"themmoi"}
            </button>


        </form>
         <h3>Danh sách todos:</h3>
      <ul>
        {todos.map((todo :any) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>

    </main>
  )
}

export default ServerActionPage