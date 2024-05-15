import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './button'

const navbar = () => {
  return (
  <nav className="bg-white border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <a href="/" className="flex items-center space-x-4 ">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Peer2share Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Peer2Share</span>
      </a>

      <div className="md:w-auto" id="navbar-default">
        <ul className="font-medium flex items-center
        border-gray-100 rounded-lg md:flex-row md:space-x-8">
          <li>
            <Link href='/login' className="hover:text-mycolor mr-6">Login</Link>
          </li>
          <li>
            <Link className={buttonVariants({variant:"myprimary"})} href='/sign-up'>Sign up for free</Link>
          </li>
        </ul>
      </div>

    </div>
  </nav> 

 
  )
}

export default navbar