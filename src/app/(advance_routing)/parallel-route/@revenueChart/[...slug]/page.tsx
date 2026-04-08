import React from 'react'
// dùng catch all route thay cho route default, bắt đường dẫn và thực hiện logic dựa trên đường dẫn đó
const RevenueSlug = async ( props:PageProps<"/parallel-route/[...slug]">) => {
    const params = await props.params;
  return (
    <div className='bg-amber-300 rounded-2xl p-4 border'>
        RevenueSlug:{params.slug}
        </div>
  )
}

export default RevenueSlug