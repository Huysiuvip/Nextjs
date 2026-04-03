// trang page.tsx là trang render giao diện cho root(lưu ý phải đặt tên là "page")
// truy cập trang bằng cách /todo
// các thư mục bên trong thư mục app đều sẽ coi là 1 root



export default async function TodoPage() {
    const user = await getUser()
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {user.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}


const getUser = async () =>{
  await delay(3000)
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
}
const delay = (duration: number) =>{
  return new Promise((resolve) => setTimeout(resolve, duration)) 

}

