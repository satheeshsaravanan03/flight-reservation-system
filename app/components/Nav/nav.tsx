import React from 'react'
import { NavLogo } from '@/app/utils/constants'

const Nav = () => {
  return (
    <div className='flex items-center justify-between lg:px-20  py-4'>
        <div>
            <img src={NavLogo} alt="Logo" />
        </div>
        <ul className='flex items-center justify-around gap-4 text-white font-medium'>
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer" >History</li>
            <li className="hover:text-blue-500 cursor-pointer" >Flight list</li>
            <li className="hover:text-blue-500 cursor-pointer" >About</li>
            <li className="hover:text-blue-500 cursor-pointer" >Contacts</li>
        </ul>
    </div>
  )
}

export default Nav