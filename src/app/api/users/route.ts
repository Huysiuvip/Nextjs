import { getUsers } from "@/lib/db";

export async function GET() {
    const users = await getUsers(); // lấy danh sách users
    return Response.json(users)// chuyển sang json
}


export async function POST(request:Request) {
    // const {id} = await request.json();// lấy id từ request body
    // return Response.json(id);// trả về id
    const user = await request.json();
    const users = await getUsers();
    // add new user --> [] users
    users.push({id: users.length +1,...user } )
    return Response.json(users)
    
}