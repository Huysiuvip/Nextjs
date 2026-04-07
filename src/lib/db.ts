import { cache } from "react";
import { delay } from ".";
import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "src/lib/db.json");
console.log(DB_PATH);

async function readFullDb() {
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
}

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
// users
export const getUsers = cache(async () => {
  await delay(2000);
  return users;
});

export async function getUserById(id: number) {
  return users.find((user) => user.id === id);
}

// posts
export async function getPosts() {
  await delay(2000);
  return posts;
}

export async function getPostsByUser(userId: number) {
  return posts.filter((post) => post.userId === userId);
}

// todos
export async function getTodos(): Promise<Todo[]> {
  const db = await readFullDb();
  return db.todos;
}

export async function createTodo(title: string, userId: number = 1) {
  await delay(2000);
  const db = await readFullDb();

  const newTodo = {
    id: Date.now(),
    userId,
    title,
    completed: false,
  };

  db.todos.push(newTodo);
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));

  return newTodo;
}

export async function updateTodoStatus(id: number, completed: boolean) {
  const db = await readFullDb();

  db.todos = db.todos.map((todo: any) =>
    todo.id === id ? { ...todo, completed } : todo,
  );

  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));

  return true;
}
