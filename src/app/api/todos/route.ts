import { createTodo, getTodos } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const newTodo = {
      id: Date.now(),
      userId: 1,
      title: data.title,
      completed: false,
    };

    await createTodo(newTodo.title, newTodo.userId);

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi hệ thống" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const todos = await getTodos();

    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách Todo:", error);

    return NextResponse.json(
      { error: "Không thể lấy dữ liệu từ máy chủ" },
      { status: 500 },
    );
  }
}