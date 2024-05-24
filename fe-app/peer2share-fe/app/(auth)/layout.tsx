import React, {FC, ReactNode } from 'react'
import Home from '../(home)/page';
import Navbar from '@/components/ui/navbar';

interface AuthLayoutProps{
    children:ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
  return (
    <div>
        <Navbar></Navbar>
        <Home></Home>
        {children} 
    </div>
  )
}

export default AuthLayout