import { getUsers } from "@/lib/db";

export async function GET() {
  const users = await getUsers();

  return Response.json(users);
}