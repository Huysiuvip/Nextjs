import { getUserById, getUsers } from "@/lib/db";
import { cookies } from "next/headers";

// export async function GET(_:Request,{params}:{params:Promise<{id:string}>} ) {
//     const {id} = await params;
//     const user = await getUserById(parseInt(id));
//     return Response.json(user,{status:200})
// }
export async function GET(_:Request,ctx:RouteContext<"/api/users/[id]"> ) {
    const {id} = await ctx.params;
    const user = await getUserById(parseInt(id));
    return Response.json(user,{status:200})
}


export async function PUT(req:Request,ctx:RouteContext<"/api/users/[id]"> ) {
    const {id} = await ctx.params;
    const {name, username, email} = await req.json()
    const user = await getUserById(parseInt(id));
    if(!user){
        return Response.json(new Error("user not found"),{status:404})
    }
    if(name){
        user.name = name;
    }
    if(name){
        user.username = username;
    }
    if(name){
        user.email = email;
    }
    return Response.json(user,{status:200})
}

export async function DELETE(_:Request,ctx:RouteContext<"/api/users/[id]"> ) {
    const {id} = await ctx.params;
    const cookieStore = cookies();
    const token = (await cookieStore).get("user_token")
    if(!token){
      return  Response.json({message:"Chua dang nhap"},{status:401})
    }
    const user = await getUserById(parseInt(id));
    if(!user){
        return Response.json({message:"User not found"},{status:404})
    }
    let users = await getUsers();
    users = users.filter(u  => u.id !== parseInt(id))
       return  Response.json({
        message:"xoa thanh cong",
        users : users,
        deleteUser:user
    },{status:200})
}