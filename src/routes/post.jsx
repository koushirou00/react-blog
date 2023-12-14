import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser'

import Loading from 'components/Loading';


const Post = () => {
  const [post, setPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    try {
      (async function () {
        const fetchData = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${params.id}`)
        const json = await fetchData.json()
        setPost(json.post);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [params.id])

  return (
    post ? (
      <div className='mt-11 mx-auto p-3 max-w-[800px]'>
        <div >
          <img src="https://placehold.jp/800x400.png" alt="" />
        </div>
        <div className='p-2'>
          <div className='flex justify-between mt-3'>
            <div className='text-sm'>{new Date(post.createdAt).toLocaleDateString()}</div>
            <div className='flex px-5'>
              {post.categories.map((category) => (
                <div key={category} className='px-2 py-1.5 mx-1 border border-blue-500 rounded text-blue-500 text-xs'>{category}</div>
              ))}
            </div>
          </div>
          <h2 className='text-2xl py-3'>{post.title}</h2>
          <div className='leading-normal'>{HTMLReactParser(post.content)}</div>
        </div>
      </div>
    ) : (
      <Loading />
    )
  )
}

export default Post