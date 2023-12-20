import React from 'react'

const Loading = () => {
  return (
    <div className="mt-40 md:mt-52 flex flex-col items-center justify-center py-12">
      <div className="animate-bounce">
        <h1 className="background-animate font-extrabold text-5xl md:text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent text-center p-5 mb-4 leading-none text-gray-900">
          Loading...
        </h1>
      </div>
    </div>
  )
}


export default Loading