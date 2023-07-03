import React from 'react'
import scale from "../../assets/images/scale.svg"
import { BsLaptop } from "react-icons/bs"
import { FaMobileAlt } from "react-icons/fa"
import first from "../../assets/images/first.png"
import second from "../../assets/images/second.png"
import three from "../../assets/images/three.png"
import four from "../../assets/images/four.png"
import fifth from "../../assets/images/fifth.png"
import sixth from "../../assets/images/sixth.png"
function Mywork() {
    return (
        <div className='mb-10'>
            <ul className='flex h-[75px] justify-between items-center'>
                <h1 className='text-[26px] text-[#00f0ff] font-Foldit border-b border-[#00f0ff] w-full border-opacity-50 font-medium mr-5 flex justify-between items-center pl-7 text-opacity-80'>My Work</h1>
                <ol className='w-[160px] sm:w-[220px] border-b border-[#8B8B8B] py-[6px] border-opacity-50 text-[26px] flex justify-around text-white text-opacity-80'>
                    <li className='cursor-pointer'><BsLaptop /></li>
                    <li className='text-[#00f0ff] cursor-pointer text-opacity-80'><FaMobileAlt /></li>
                    <li className='cursor-pointer'><img src={scale} alt=''/></li>
                </ol>
            </ul>

            <main className='flex flex-col max-w-[632px] mb-5 items-center'>
            <ul className='flex flex-col space-y-4 px-4 sm:space-x-3 sm:space-y-0 mb-4 sm:mb-0 sm:flex-row justify-center items-center w-full sm:px-5 sm:justify-around'>
                    <li className='w-full sm:w-auto sm:h-[180px] sm:border-r pt-6 md:pr-[25px] md:pt-3 sm:pr-[10px] border-white border-opacity-50'>
                        <img src={first} alt="" className='w-full sm:w-auto  ' />
                        </li>
                    <li className='w-full sm:w-auto'>
                        <img src={second} alt="" className='w-full '/>
                    </li>
                </ul>
                <li className='sm:w-[400px] md:w-[480px] sm:border-b border-white border-opacity-50 list-none'></li>

                {/* row #2 */}
                <ul className='flex flex-col space-y-4 px-4 sm:space-y-0 sm:flex-row justify-center items-center w-full sm:space-x-3 sm:justify-around'>
                    <li className='w-full sm:w-auto sm:h-[180px] sm:border-r md:pr-7 sm:pr-[10px] sm:pt-6 md:pt-3 border-white border-opacity-50'>
                        <img src={three} alt="" className='w-full '/>
                        </li>
                    <li className='w-full sm:w-auto'>
                        <img src={four} alt="" className='w-full '/>
                    </li>
                </ul>
                <li className='sm:w-[400px] md:w-[480px] sm:border-b border-white border-opacity-50 list-none'></li>
                {/* row #3 */}
                <ul className='flex flex-col sm:space-x-3 px-4 space-y-4 sm:space-y-0 sm:flex-row justify-center items-center w-full sm:px-4 sm:justify-around'>
                    <li className='w-full sm:w-auto sm:h-[180px] sm:pr-[10px] md:pr-7 sm:border-r pt-4 sm:pt-6 md:pt-3 border-white border-opacity-50'>
                        <img src={fifth} alt="" className='w-full ' />
                        </li>
                    <li className='w-full sm:w-auto'>
                        <img src={sixth} alt="" className='w-full '/>
                    </li>
                </ul>
            </main>

        </div>
    )
}

export default Mywork