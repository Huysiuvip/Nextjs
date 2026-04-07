"use client"
import { addTodoAction } from '@/actions/todo-actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { title } from 'process';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import z from 'zod';

const schema = z.object({
    title : z.string().min(1,"Không được để trống")
})
type FormValues = z.infer<typeof schema>

const TodoForm = () => {
    const [message, setMessage] = useState("");

    const{register,handleSubmit,reset,formState:{errors, isSubmitting}} = useForm<FormValues>({
        resolver:zodResolver(schema),
        defaultValues:  { 
            title:""}
    })

    const onSubmit = async (data:FormValues) =>{  
    
        try {
          setMessage("");
          const res = await addTodoAction(data.title);  
          setMessage(res.message) 
          if(res.success){
        reset({title:""})
          }
        } catch (error:any) {
            setMessage(error.message)
        }
    }
  return (
  <form onSubmit={handleSubmit(onSubmit, () => setMessage(""))} 
        className='form flex flex-col'
        >
            <input 
            type="text" 
            {...register("title")}
            placeholder='Nhap viec can lam'
            className='input'/>
            {errors.title && (
                <p className='"text-red-500'>{errors.title.message}
                </p>
            )}
            <button type='submit'
            disabled={isSubmitting}>
                
              {isSubmitting ? "dang gui" :"them moi"}
            </button>
            {message&&(
                <p className={`mt-4 text-sm ${message.includes("Thêm thành công")?"text-green-500":"text-red-500"}`}>
                    {message}
                </p>
            )}
         <h3>Danh sách todos:</h3>
        </form>
  )
}

export default TodoForm