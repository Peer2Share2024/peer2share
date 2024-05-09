import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './button'
import { ArrowDownToLine } from 'lucide-react'

const navbar = () => {
  return (
    <div className='bg-zinc-400 py-2 border-s-zinc-200 w-full fixed z-10 top-0'>
      <div className='container flex justify-between items-center bg-red-500'>
        <Link href='/'><ArrowDownToLine /></Link>
        <div className='flex bg-blue-400 justify-center items-center gap-4'>
          <Link href='/login'>Login</Link>
          <Link className={buttonVariants()} href='/sign-up'>Sign up for free</Link>
        </div>
        
      </div>
    </div>
  )
}

export default navbar