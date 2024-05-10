import SignUpForm from '@/components/ui/form/SignUpForm'
import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

const SignUpPage = () => {
  return (
    <div className='w-full'>
      <>
        <dialog
        className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto flex justify-center items-center"> 
          <div className="bg-white m-auto p-8 flex flex-col">
          <Link className='self-end' href="/"><X /></Link>
            <SignUpForm/>
          </div> 
        </dialog>
      </>
    </div>
  )
}

export default SignUpPage