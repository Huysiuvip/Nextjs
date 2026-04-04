"use client"
// import { cookies,headers } from "next/headers"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
// cookies là 1 api next.js cung cấp để sử dụng
// là 1 hàm bất đồng bộ
// type PageProps = {
//     searchParams: {
//       animal?: string
//       product?: string
//       color?: string
//     }
//   }

const DynamicRoute =  () => {
// const DynamicRoute = async ({ searchParams }: PageProps) => {
    // const cookiesStore = await cookies();
    //Không cho phép set cookie trong server component, nhưng vẫn có thể lấy cookie được
    // cookiesStore.set("name","Huy"); // set cookie
    // const allCookies = cookiesStore.getAll();// lay tất cả cookie
    // console.log(allCookies);
    // ===================================================
    // const headersList = await headers(); // lấy tất cả header
    // console.log(headersList.get("user-agent")); // lấy header user-agent
    // ===================================================
    // searchParams
    // console.log((await searchParams)); // lấy query string animal
 // Sử dụng hook useSearchParams để lấy query string từ client component
    
  return (
    // Sử dụng Suspense để bao bọc component con, điều này sẽ giúp tránh lỗi hydration mismatch khi sử dụng hook useSearchParams trong component con
    <Suspense fallback={<div>Loading...</div>}>
      <Child />
    </Suspense>
  )
}

const Child = () => {
  const searchPrams2 =  useSearchParams() ;
    console.log(searchPrams2.entries()); // lấy query string product
    return <div>DynamicRoute</div>
}

export default DynamicRoute