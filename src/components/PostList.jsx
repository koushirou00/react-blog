import React from 'react'
import HTMLReactParser from 'html-react-parser'

// デフォルトエクスポートじゃないので元ファイルの変数名に合わせないといけない。
import { posts } from "data/posts"

const PostList = () => {
  return (
    <div className='mt-4 mx-auto max-w-4xl'>
      {posts.map((post) => (
        <div key={post.id} className='mx-auto py-2 px-8'>
          <div className='border border-gray-300 p-6'>
            <div className='flex justify-between'>
              <div className='text-sm'>{new Date(post.createdAt).toLocaleDateString()}</div>
              <div className='flex px-5'>
                {post.categories.map((category) => (
                  <div className='px-2 py-1.5 mx-1 border border-blue-500 rounded text-blue-500 text-xs'>{category}</div>
                ))}
              </div>
            </div>
            <h2 className='text-2xl py-3'>{post.title}</h2>
            <div className='leading-normal line-clamp-2 overflow-hidden'>{HTMLReactParser(post.content)}</div>
          </div>
        </div>
      ))}
    </div >
  )
}

export default PostList