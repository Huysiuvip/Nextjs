import React from 'react'
// vì là trang layout nên phải render children nếu không toàn bộ các trang trong todo sẽ không hiển thị
const LayoutTodo = ({children} :{children:React.ReactNode}) => {
  return (
   <div>
        <h1>LayoutTodo</h1>
        {children}
   </div>
  )
}

export default LayoutTodo