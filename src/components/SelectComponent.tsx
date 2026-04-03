"use client"
import Select from "react-select"

// sử dụng thư viện gây ra lỗi hydration mismatch
//  vì nó sử dụng window để tính toán vị trí hiển thị 
// của dropdown, nhưng window không tồn tại trên server. 
// Khi React cố gắng render component này trên server, nó sẽ gặp lỗi vì không thể truy cập vào window. Để tránh lỗi này, chúng ta có thể sử dụng một state để theo dõi xem component đã được mount hay chưa, và chỉ render Select khi component đã được mount.
// ==========
// Nhiều thư viện đã hỗ trợ SSR sẽ có một cách tiếp cận tương tự để tránh lỗi hydration mismatch, 
// thường là bằng cách kiểm tra xem component đã được mount hay chưa trước khi render nội dung phụ thuộc vào window hoặc các API trình duyệt khác.
//  Điều này giúp đảm bảo rằng mã của bạn có thể chạy trên cả server và client mà không gặp lỗi.
//==========
// nếu thư viện bạn đang sử dụng không hỗ trợ SSR, bạn có thể cân nhắc sử dụng dynamic import để chỉ tải thư viện trên client, hoặc tìm kiếm một thư viện thay thế đã hỗ trợ SSR.
// Nói với sever không cần render component này nữa, chỉ render trên client thôi
const SelectComponent = () => {
    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'mango', label: 'Mango' },
    ]
  return (
    <div>
        <h1>Trái cây</h1>
        <Select options={options} instanceId={"fruit-select"}/>  {/* giúp server và client có cùng id */}

    </div>
  )
}

export default SelectComponent