import React from 'react'

const Error = () => {
  return (
    <div>
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
        <strong class="font-bold">エラーが発生しました。</strong><br />
        <span class="block sm:inline">申し訳ありませんが一定時間経過後、リロードしてください🙇‍♂️</span>
      </div>
      <hr class="my-2" />
    </div>
  )
}

export default Error