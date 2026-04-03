import React from 'react'
// cách cũ
// const AboutLayout = ({children} : {children:React.ReactNode}) => {
//   return (
//     <div>
//         <h1>AboutLayout</h1>
//         {children}
//     </div>
//   )
// }

// export default AboutLayout

// mới
const AboutLayout = (props:LayoutProps<"/user">) => {
    const children = props.children
  return (
    <div>
        <h1>AboutLayout</h1>
        {children}
    </div>
  )
}

export default AboutLayout