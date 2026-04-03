"use client"
// khi có lỗi xảy ra khi react render, thay vì để cả trang bị xập next.js sẽ render 1 trang thay thế, đó là trang error.tsx
// Chỉ theo dõi lỗi trong quá trình render
// không theo dõi code khi ui xuất hiện
const Error = ({error,reset}:{
    error:Error, 
    reset:() =>void;
}) => {
  return (
    <div>
        <p>{error.message}</p>
        <button onClick={reset}>Gui lai</button>
    </div>
  )
}

export default Error