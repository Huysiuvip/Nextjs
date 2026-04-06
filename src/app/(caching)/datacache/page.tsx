import { updateTag } from 'next/cache';
import { cookies } from 'next/headers';
import React, { cache } from 'react'
// để dùng datacache phải dùng hàm fetch với method get
// dùng ở sever component or route handler
// không có render dộng
//===> tự động kích hoạt datacache
// export const revalidate = 5 // sau 5s có request mới sẽ tự động gọi lại tất cả api để lấy dữ liệu mới nhất
const DataCachePage = async  () => {
    // biến thành render động
    // const cookiesStore = await cookies();
    const res1 = await fetch("http://localhost:3000/datacache/api/number",{
        method: "GET",
        next:{revalidate: 5}, // sau 5s có request mới sẽ tự động gọi lại api này để lấy dữ liệu mới nhất
        // đảm bảo hàm luôn có revalidate băng hoặc ngắn hơn 5s
        // đây là cách làm mới dữ liệu theo thời gian
        cache:"no-cache"// bỏ cache, mỗi lần gọi api sẽ lấy dữ liệu mới nhất, không bao giờ dùng cache, có thể dùng khi dữ liệu thay đổi liên tục
    });
    // method mặc định là get nên có thể bỏ qua
    const res2 = await fetch("http://localhost:3000/datacache/api/name",{
        // cache:"force-cache"// bắt buộc dùng cache
        // next:{revalidate: 10}, // sẽ tính revalidate có mốc ngắn nhất, ở đây là 5s
        next:{tags: ['name']} // gắn tag để có thể xoá cache theo tag,có thể có nhiều tag
    });
    updateTag('name'); // gọi hàm này sẽ xoá cache của tất cả api có tag là name,fetch lại ngay lập tức api này để lấy dữ liệu mới nhất
    // không bị stale data

    const randomNumber = await res1.json();
    const randomName = await res2.json();
  return (
   <div>
    <p>Random Number: {randomNumber.number}</p>
    <h1>Random Name: {randomName.name}</h1>
    <p>Thời gian random server: {new Date().toLocaleTimeString()}</p>
   </div>
  )
}

export default DataCachePage