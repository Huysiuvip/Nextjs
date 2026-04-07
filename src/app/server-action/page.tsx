import TodoForm from '@/components/TodoForm';
import { getTodos } from '@/lib/db';


const  ServerActionPage =async () => {
const todos = await getTodos();
  return (
    <main className='container'>
        <TodoForm/>
      <ul>
        {todos.map((todo :any) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>

    </main>
  )
}

export default ServerActionPage