"use client"
import dynamic from "next/dynamic"
// tách ra một component riêng để sử dụng trong sever component
// tránh mất đi performance của server component  
// chỉ render component này trên client, không render trên server nữa
const SelectComponent  = dynamic(() => import('@/components/SelectComponent'), { ssr: false })  
const ClientSelect = () => {
   return(
    <SelectComponent/>
   )
}

export default ClientSelect