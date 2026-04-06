import { cache } from "react";
import { delay } from ".";
import { NextResponse } from "next/server";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: "Nguyễn Văn An", username: "an.nguyen", email: "an@gmail.com" },
  { id: 2, name: "Trần Thị Bích", username: "bich.tran", email: "bich@gmail.com" },
  { id: 3, name: "Lê Minh Châu", username: "chau.le", email: "chau@gmail.com" },
  { id: 4, name: "Phạm Quốc Dũng", username: "dung.pham", email: "dung@gmail.com" },
  { id: 5, name: "Hoàng Thu Hà", username: "ha.hoang", email: "ha@gmail.com" },
  { id: 6, name: "Vũ Đức Long", username: "long.vu", email: "long@gmail.com" },
  { id: 7, name: "Đặng Mỹ Linh", username: "linh.dang", email: "linh@gmail.com" },
  { id: 8, name: "Bùi Anh Tuấn", username: "tuan.bui", email: "tuan@gmail.com" },
  { id: 9, name: "Phan Ngọc Mai", username: "mai.phan", email: "mai@gmail.com" },
  { id: 10, name: "Đỗ Khánh Vy", username: "vy.do", email: "vy@gmail.com" },
];
export async function GET() {
  return NextResponse.json(users);
}

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const posts: Post[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  userId: (i % 5) + 1,
  title: `Bài viết số ${i + 1}`,
  body: `Đây là nội dung của bài viết số ${i + 1}.`,
}));

export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const todos: Todo[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  userId: (i % 5) + 1,
  title: `Công việc cần làm số ${i + 1}`,
  completed: i % 2 === 0,
}));

// --------------------
// Database functions
// --------------------
export const getUsers = cache(async () => {
  await delay(2000);
  return users;
});

export async function getUserById(id: number) {
  return users.find((user) => user.id === id);
}

export async function getPosts() {
  await delay(2000);
  return posts;
}

export async function getPostsByUser(userId: number) {
  return posts.filter((post) => post.userId === userId);
}

export async function getTodos() {
  await delay(2000);
  return todos;
}

export async function getTodosByUser(userId: number) {
  return todos.filter((todo) => todo.userId === userId);
}
