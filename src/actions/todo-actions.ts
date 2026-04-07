"use server"
import { createTodo } from "@/lib/db";
import { revalidatePath } from "next/cache";

  // use server action 


export async function addTodoAction(title :string)  {

   
   if(!title || title.trim() === ""){  // kiểm tra dữ liệu
    return {message:"Tiêu đề không được để trống"}
   }

   try {
    await createTodo(title);
    revalidatePath("/server-action") // xóa cach của route này
    return{success:true,message:"Thêm thành công"}
    
   } catch (error) {
    return {success:false,message:"Lỗi hệ thống"}
    
   }
    
}