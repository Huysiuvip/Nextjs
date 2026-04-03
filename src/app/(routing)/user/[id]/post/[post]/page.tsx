import { notFound } from 'next/navigation';
import React from 'react'
// cach cu
// const Post = async ({
//     params,
// }:{
//     params: Promise<{id:string; post:string}>}) => {
//     const {id, post} = await params;
//     // const params = await props.params;
//     // const post =  params.post

//   return (
//     <div>Userid: {id}, post:{post}</div>
//   )
// }

// export default Post

// cach moi
const Post = async (props:PageProps<"/user/[id]/post/[post]">) => {
    const params = await props.params;
    const post =  params.post
    const id = params.id
    if(id ==="999"){
        return notFound();
    }

  return (
    <div>Post: {post} userID:{id}</div>
  )
}

export default Post