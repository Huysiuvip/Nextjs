import { revalidateTag } from "next/cache";

export async function POST() {
  revalidateTag("number", "max");

  return Response.json({
    message: "Xoá cache của number",
  });
}