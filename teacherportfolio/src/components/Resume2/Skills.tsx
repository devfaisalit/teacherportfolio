import React from 'react'
import skill from "../../assets/images/skill.png"
function Skills() {
  return (
    <div className='w-full'>
        <h1 className='text-[26px] text-white font-Foldit border-b border-[#00f0ff] border-opacity-50 font-medium w-full h-[75px] flex justify-start items-center pl-5 text-opacity-80'><img src={skill} alt="" className='pr-3'/> Skills</h1>
        <div className='w-full justify-center space-y-5 pl-5 font-medium font-Poppin flex-col pr-5 items-center flex py-4'>
            <ul className='text-start text-[17px] text-white w-full space-y-3'>
                <h1>.Net</h1>
                <li className='w-full sm:max-w-[562px] bg-[#636363] bg-opacity-70'>
                    <li className='h-[5px] bg-[#00f0ff] bg-opacity-80 max-w-[260px] mr-6 sm:max-w-[404px]'></li>
                </li>
            </ul>
            <ul className='text-start text-[17px] text-white w-full space-y-3'>
                <h1>Python</h1>
                <li className='w-full sm:max-w-[562px] bg-[#636363] bg-opacity-70'>
                    <li className='h-[5px] bg-[#00f0ff] bg-opacity-80 max-w-[270px] mr-4 sm:max-w-[437px]'></li>
                </li>
            </ul> <ul className='text-start text-[17px] text-white w-full space-y-3'>
                <h1>PHP</h1>
                <li className='w-full sm:max-w-[562px] bg-[#636363] bg-opacity-70'>
                    <li className='h-[5px] bg-[#00f0ff] bg-opacity-80 max-w-[250px] mr-8 sm:max-w-[307px]'></li>
                </li>
            </ul> <ul className='text-start text-[17px] text-white w-full space-y-3'>
                <h1>Javacsript</h1>
                <li className='w-full sm:max-w-[562px] bg-[#636363] bg-opacity-70'>
                    <li className='h-[5px] bg-[#00f0ff] bg-opacity-80 max-w-[350px] mr-4 sm:max-w-[486px]'></li>
                </li>
            </ul>
            <ul className="w-full flex justify-center items-center pt-7">
        <li className="w-[240px] sm:w-[450px]  border-t border-[#8b8b8b] border-opacity-50"></li>
      </ul>
        </div>
    </div>
  )
}

export default Skills