import React from 'react'
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className='w-full flex justify-between px-6 py-6 bg-gray-800 text-white font-bold'>
      <Link to={`/`} key="blog">Blog</Link>
      <Link to={`/contact`} key="contact">お問い合わせ</Link>
    </div >
  )
}

export default Header