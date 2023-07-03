import React from 'react';
import { HiOutlineHome } from "react-icons/hi"
import { BsPerson } from "react-icons/bs"
import { CgFileDocument } from "react-icons/cg"
import { AiOutlineProject } from "react-icons/ai"
import { SlPhone } from "react-icons/sl"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <section className='flex justify-center items-center'>
            <div className='fixed md:block xl:relative w-full sm:w-auto top-0 right-0 sm:top-auto sm:right-auto z-20 lg:flex justify-center font-Foldit items-center'>
                <nav className='tracking-6% flex justify-center w-full sm:w-auto sm:flex-col'>
                    <ul className='flex basis-32 sm:basis-auto border-r border-[#8B8B8B] sm:border-none'>
                        <Link to="Home" className='text-white text-opacity-80 hover:text-[#00f0ff] text-[14px] flex flex-col justify-center items-center bg-[#203240] border-y border-gray-600 h-[90px] w-full sm:w-[60px] md:w-[76px]'> <HiOutlineHome /> Home </Link>
                        <li className=' bg-[#203240] hidden sm:block border-y border-l border-gray-500 border-l-gray-700 -mt-1 -skew-y-25 h-[90px] w-[14px]'></li>
                    </ul>
                    <ul className='flex basis-32 sm:basis-auto border-r border-[#8B8B8B] sm:border-none'>
                        <Link to="AboutMe" className='text-white text-opacity-80 hover:text-[#00f0ff] text-[14px] flex flex-col justify-center items-center bg-[#203240] border-y border-gray-600 h-[90px] w-full  sm:w-[60px] md:w-[76px]'> <BsPerson /> About </Link>
                        <li className=' bg-[#203240] hidden sm:block border-y border-l border-gray-500 border-l-gray-700 -mt-1 -skew-y-25 h-[90px] w-[14px]'></li>
                    </ul>
                    <ul className='flex basis-32 sm:basis-auto border-r border-[#8B8B8B] sm:border-none'>
                        <Link to="MyResume" className='text-white text-opacity-80 hover:text-[#00f0ff] text-[14px] flex flex-col justify-center items-center bg-[#203240] border-y border-gray-600 h-[90px] w-full  sm:w-[60px] md:w-[76px]'> <CgFileDocument /> Resume </Link>
                        <li className=' bg-[#203240] hidden sm:block border-y border-l border-gray-500 border-l-gray-700 -mt-1 -skew-y-25 h-[90px] w-[14px]'></li>
                    </ul>
                    <ul className='flex basis-32 sm:basis-auto border-r border-[#8B8B8B] sm:border-none'>
                        <Link to="Worked" className='text-white text-opacity-80 hover:text-[#00f0ff] text-[14px] flex flex-col justify-center items-center bg-[#203240] border-y border-gray-600 h-[90px] w-full  sm:w-[60px] md:w-[76px]'> <AiOutlineProject /> Pojects </Link>
                        <li className=' bg-[#203240] hidden sm:block border-y border-l border-gray-500 border-l-gray-700 -mt-1 -skew-y-25 h-[90px] w-[14px]'></li>
                    </ul>
                    <ul className='flex basis-32 sm:basis-auto border-r border-[#8B8B8B] sm:border-none'>
                        <Link to="Find" className='text-white text-opacity-80 hover:text-[#00f0ff] text-[14px] flex flex-col justify-center items-center bg-[#203240] border-y border-gray-600 h-[90px] w-full  sm:w-[60px] md:w-[76px]'> <SlPhone /> Contact </Link>
                        <li className=' bg-[#203240] hidden sm:block border-y border-l border-gray-500 border-l-gray-700 -mt-1 -skew-y-25 h-[90px] w-[14px]'></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Navbar