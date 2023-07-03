import React from 'react'
import { SiGooglescholar } from "react-icons/si"
function Portfolio() {
  return (
    <div>
      <h1 className='text-[26px] text-[#00f0ff] font-Foldit border-b border-[#00f0ff] border-opacity-50 font-medium w-full h-[75px] flex justify-start items-center pl-5 text-opacity-80'> <SiGooglescholar className='text-lg mr-2'/> Education</h1>
      <main className='flex flex-col mx-4 mt-4 justify-center text-white text-opacity-80 items-center max-w-[632px]'>
        <ul className='w-full md:flex md:space-x-4 font-Poppins'>
          <li className='basis-1/2 md:border-r border-opacity-50 p-2 border-[#8b8b8b]'>
            <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-start'>Master (M.S) In Computer Science</h3>
            <h4 className=' text-[12px] pt-2 tracking-6%'>Government College University Faisalabad,Pakistan (Continue)</h4>
            <p className='text-[11px] font-light py-2  tracking-6%'>
                 </p>
          </li>
          <li className='basis-1/2 p-2'>
            <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff]'>Bachelor of Science(B.S.) in Computer Science</h3>
            <h4 className=' text-[12px] pt-2 tracking-6%'>Government College University Faisalabad,Pakistan (2016)</h4>
            <p className='text-[11px] font-light py-2 tracking-6%'>
            </p>
          </li>
        </ul>
        {/* Second row */}
        <ul className='w-full md:flex md:border-t border-opacity-50 border-[#8b8b8b] md:space-x-4 font-Poppins'>
          <li className='basis-1/2 md:border-r border-opacity-50 p-2 border-[#8b8b8b]'>
            <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff]'>Intermediate (F.S.c) in Pre-Engineering</h3>
            <h4 className=' text-[12px] pt-2 tracking-6%'>Government College (For Women) Medina Town, Pakistan (2012)</h4>
            <p className='text-[11px] font-light py-2 tracking-6%'>
            </p>
          </li>
          <li className='basis-1/2 p-2'>
            <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] '>Secondary School Certificate (SSC)</h3>
            <h4 className=' text-[12px] pt-2 tracking-6%'>Rawalpindi Grammar School,Pakistan (2010)</h4>
            <p className='text-[11px] font-light py-2 tracking-6%'>
             
            </p>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Portfolio