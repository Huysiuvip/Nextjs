import React from 'react'
import { getPosts,type Post } from '@/lib/db'
import { notFound } from 'next/navigation'

// trang này sẽ được render ra 5 trang tĩnh với id lần lượt là 1,2,3,4,5
export async function generateStaticParams() {
    return [{id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"}]
}

const StaticParamsDemoPage = async (props:PageProps<"/staticParams/[id]">) => {
    const params = await props.params
    const posts = await getPosts()
    const post = posts.find(p => p.id === Number(params.id))
    console.log( post?.id)
    if(!post) notFound()
  return (
   
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    
  )
}

export default StaticParamsDemoPage