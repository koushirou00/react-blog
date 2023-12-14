import React from 'react'
import { useParams } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser'
import useSWR from 'swr';

import Error from 'components/Error';

const fetcher = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const Post = () => {
  const params = useParams();
  const { data, error } = useSWR(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${params.id}`, fetcher, { suspense: true });
  if (error) {
    return <Error />
  }

  const post = data.post;

  return (
    <div className='mt-11 mx-auto p-3 max-w-[800px]' >
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
    </div >
  )
}

export default Post
