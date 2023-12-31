import React, { useState, useEffect } from 'react'
import HTMLReactParser from 'html-react-parser'
import { Link } from "react-router-dom"

import { PostObj, FetchPostsResponse } from 'types/postTypes'

import Loading from './Loading'

const PostList: React.FC = () => {
  const [posts, setPosts] = useState <PostObj[]> ([])

  useEffect(() => {
    (async function () {
      try {
        const fetchData = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
        const json: FetchPostsResponse = await fetchData.json()
        setPosts(json.posts)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  if (!posts) return <Loading />

  return (
    <div className='mt-4 mx-auto max-w-[800px]'>
      {posts.map((post) => (
        <div key={post.id} className='mx-auto py-2 px-8'>
          <Link to={`/posts/${post.id}`} key={post.id}>
            <div className='border border-gray-300 p-6'>
              <div className='flex justify-between'>
                <div className='text-sm'>{new Date(post.createdAt).toLocaleDateString()}</div>
                <div className='flex px-5'>
                  {post.categories.map((category) => (
                    <div key={category} className='px-2 py-1.5 mx-1 border border-blue-500 rounded text-blue-500 text-xs'>{category}</div>
                  ))}
                </div>
              </div>
              <h2 className='text-2xl py-3'>{post.title}</h2>
              <div className='leading-normal line-clamp-2 overflow-hidden'>{HTMLReactParser(post.content)}</div>
            </div>
          </Link>
        </div>
      ))
      }
    </div >
  )
}

export default PostList