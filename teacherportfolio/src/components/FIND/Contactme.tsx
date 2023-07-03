import React from 'react'
import { SlPhone } from "react-icons/sl"
import { AiOutlineRight } from "react-icons/ai"
function Contactme() {
    return (
        <div className='sm:mt-8 mt-14 mb-5'>
            <h1 className='text-[26px] text-white border-b font-Foldit border-[#00f0ff] border-opacity-50 font-medium w-full h-[75px] flex justify-start items-center pl-7 text-opacity-80'><SlPhone className="text-[#00f0ff] text-xl text-opacity-80 mr-2" />Contact me</h1>
            <form className='w-full flex justify-between items-center flex-wrap space-y-10 px-6 text-white text-opacity-80'>
                <input type="text" placeholder='Full Name' className='w-full md:w-[250px] outline-none bg-[#203240] border-b p-2 border-[#8b8b8b] h-[40px] md:mr-2 mt-10' />
                <input type="email" placeholder='Email' className='w-full md:w-[250px] bg-[#203240] outline-none border-b p-2 border-[#8b8b8b] h-[40px]' />
                <textarea typeof='text' placeholder='Message' className='w-full h-[80px] bg-[#203240] outline-none p-2 border-b border-[#8b8b8b]' />
                <button className="text-white text-xl text-start text-opacity-80">Send Message
                    <ul className='flex justify-center items-center'>
                        <li className='border-[#00f0ff] border-opacity-50 w-[150px] border'></li>
                        <AiOutlineRight className='relative right-3 text-[#00f0ff]' />
                    </ul></button>
            </form>
        </div>
    )
}

export default Contactme