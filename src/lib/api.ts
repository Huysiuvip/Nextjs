export  function fetchUsers() {
     return fetch("http://localhost:3000/requestmemo/users").then(res => res.json())
}

// bỏ cache dữ liệu
// export  function fetchUsers() {
//     const {signal} = new AbortController();
//      return fetch("http://localhost:3000/requestmemo/users", { signal }).then(res => res.json())
// }