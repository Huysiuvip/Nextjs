
// import { useParams } from "next/navigation"

import TodoInfo from "@/components/TodoInfo"

const TodoDetailPage = () => {
    // const params = useParams() // useParams() là 1 hook cho phép lấy params từ client component
  return (
    <>
    <h1>TodoDetail</h1>
    <TodoInfo/>
    </>
  )
}

export default TodoDetailPage