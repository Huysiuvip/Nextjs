import React from 'react'
// Dấu "..." nói với root có thể nhận nhiều đoạn trong đường dẫn
// Cái này được dùng khi không biết đường dẫn sẽ dài bao nhiêu
// PageProps sẽ phát huy tác dụng khi đường dẫn phức tạp
// với kiểu root này slug là 1 mảng
const BlogInfo = async (props: PageProps<"/blog/[[...slug]]">) => {
    const params = await props.params;
    const slug = params.slug?.join("/");
  return (
    <div>BlogInfo {slug }</div>
  )
}

export default BlogInfo

// có thể thấy root blog chưa có UI page.tsx
// thay vì thêm mới ta có thêm 1 dấu ngoặc vuông nữa cho root động này
// khi tuy cập /blog  sẽ hiển thị trang này  [[...slug]]
// không cần tạo nhiều trang page.tsx