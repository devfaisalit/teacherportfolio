import React from 'react'
import AboutMe from './AboutMe'
import MyResume from './MyResume'
import Find from './Find'
import Worked from './Worked'
import { Routes,Route } from 'react-router-dom'
import MyHome from './MyHome'
function ABout() {
  return (
    <div className='bg-[#203240] max-w-[500px] sm:w-[500px] md:w-full relative sm:left-[27px] md:left-[60px] xl:left-0 sm:max-w-[632px] md:mr-4 xl:h-[calc(100vh-200px)] 2xl:max-h-[650px] lg:max-w-[632px] xl:overflow-y-scroll scrollbar-thumb-[#00f0ff] scrollbar-track-[#1d3b52] scrollbar-thin'>
     <Routes>
      <Route path='*' element={<AboutMe />}/>
      <Route path='MyResume' element={<MyResume />}/>
      <Route path='Find' element={<Find />}/>
      <Route path='Worked' element={<Worked />}/>
      <Route path='Home' element={<MyHome />}/>
     </Routes>      
    </div>
  )
}

export default ABout