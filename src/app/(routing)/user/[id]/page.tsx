import React from "react";
// [id] root động, sẽ hiển thị ui dựa trên tham số truyền vào
// Do đang ở rôt động, React tự động thêm vào 1 tham số là params
// Tên trong thư mục phải khớp với tên trong type params ở đây là "id" +> lỗi khi viết thủ công
// để tránh lỗi trên có thể dùng PageProps, LayoutProp được react định nghĩa khi tạo root
//Nó sẽ tự suy ra type của root tránh lỗi


//cách cũ
// const UserDetailPage = async ({params}:{params:Promise<{id:string}> }) => {
//   const {id} = await params;
//   return <div>UserId: {id}</div>;
// };

// export default UserDetailPage;


// cách mới sẽ báo lỗi nếu đổi tên thư mục

const UserDetailPage = async (props: PageProps<"/user/[id]">) => {
  const params = await props.params;
  const id = params.id;
  return <div>UserId: {id}</div>;
};

export default UserDetailPage;