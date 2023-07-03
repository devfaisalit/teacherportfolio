import React from 'react'
import Awards from './Awards'

function About() {
  return (
    <div className='space-y-6'>
        <h1 className='text-[26px] text-[#00f0ff] font-Foldit border-b border-[#0ff0ff] font-medium w-full h-[75px] flex justify-start items-center pl-5 text-opacity-80'>About me</h1>
     <h3 className='text-white text-opacity-80 text-xl pl-3 sm:pl-5'>AWARDS AND ACHIEVEMENTS</h3>
       <Awards/>      
    </div>
  )
}

export default About