import React from 'react'

const Loading = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 py-12">
      <div className="animate-bounce">
        <h1 className="background-animate font-extrabold text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent text-center p-5 mb-4 leading-none text-gray-900">
          Loading...
        </h1>
      </div>
    </div>
  )
}

export default Loading