import React from 'react'
import Navbar from './utilities/Navbar'
import ABout from './ABout'
import Head from './utilities/Head'
function Header() {
  return (
    <div className='flex justify-center md:px-2 xl:px-0 xl:flex-row flex-col xl:h-screen items-center '>
      <div className='flex w-full sm:max-w-[670px] xl:max-w-[580px] justify-center sm:justify-evenly md:justify-between xl:justify-center items-center'>
        <Navbar />
        <Head />
      </div>
      <ABout />
    </div>
  )
}

export default Header