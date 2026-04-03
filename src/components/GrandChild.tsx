import "server-only"
// chỉ được phép chạy ở server
// nếu bạn cố gắng import một server component vào một client component, hoặc ngược lại, bạn sẽ gặp lỗi vì chúng không thể chạy trong môi trường không phù hợp.

const GrandChild = () => {
    console.log("Toi la chau")
  return (
    <h3>GrandChild</h3>
  )
}

export default GrandChild