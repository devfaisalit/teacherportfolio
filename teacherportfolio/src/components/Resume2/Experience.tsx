import React from 'react'
import { TfiBag } from "react-icons/tfi"
function Experience() {
  return (
    <div>
      <h1 className='text-[26px] text-[#00f0ff] border-b font-Foldit border-[#00f0ff] border-opacity-50 font-medium w-full h-[75px] flex justify-start items-center pl-5 text-opacity-80'>My Resume</h1>
      <div className='border-b border-[#00f0ff] w-full space-x-2 flex justify-start items-center h-[75px]'>
        <li className='list-none text-[16px] pl-5 pt-2 text-[#00f0ff] text-opacity-80 '>
          <TfiBag />
        </li>
        <fieldset className="border border-[#00f0ff] border-opacity-50 w-[80px] text-left text-[26px] px-2 ">
          <legend className="text-white text-opacity-80">
            Experience
          </legend>
        </fieldset>
      </div>
      <main className='flex flex-col mx-4 mt-4 justify-center text-white text-opacity-80 items-center max-w-[632px]'>
        <ul className='w-full md:flex md:space-x-4'>
          <li className='basis-1/2 md:border-r space-y-2 border-opacity-50 p-2 border-[#8b8b8b]'>
            <div className='flex justify-between items-end'>
              <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-center'>Lecturer</h3>
              <h2 className='border-b border-opacity-50 border-[#00f0ff] text-[10px]'>18th April 2022 -</h2>
            </div>
            <h4 className=' text-[12px] font-Poppins'>Beaconhouse International College</h4>
            <p className='text-[11px] font-light font-Poppins  py-2 tracking-6%'>
                Mentoring and teachingcourses of University of London  <br />  Researchand development
            </p>
          </li>
          <li className='basis-1/2 space-y-2 p-2'>
            <div className='flex justify-between items-end'>
              <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-center'>SoftwareEngineer</h3>
              <h2 className='border-b border-opacity-50 ml-1 sm:ml-0 border-[#00f0ff] text-end sm:text-start text-[10px]'>(April2020 - March2022)</h2>
            </div>
            <h4 className=' text-[12px] font-Poppins'>Lyallpur Officers Academy</h4>
            <p className='text-[11px] font-light font-Poppins  py-2 tracking-6%'>
                Python Developer  <br />  Asp.net and Web Instructor  <br />  Project Supervisor  <br />  Project Management  <br />  Social Media Marketing
            </p>
          </li>
        </ul>
        {/* Second row */}
        <ul className='w-full md:flex md:border-t border-opacity-50 border-[#8b8b8b] md:space-x-4'>
          <li className=' basis-1/2 pl-2 md:border-r space-y-2 border-opacity-50 p-2 border-[#8b8b8b]'>
            <div className='flex justify-between items-end'>
              <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-center'>Lecturer</h3>
              <h2 className='border-b border-opacity-50 border-[#00f0ff] text-[10px]'>(Sep2010-April2020)</h2>
            </div>
            <h4 className=' text-[12px] font-Poppins'>Govt Commerce College Faisalabad</h4>
            <p className='text-[11px] font-light font-Poppins py-2 tracking-6%'>
                Teaching Programing Fundamental sand Software Engineering-1course to Undergraduate Students of University  <br />  Mentoring Students  <br />  Organizing and Managing Computer Laboratory  <br />  Conducting Labs of BSCS and BSIT students. (C++,OOP)  <br />  Conduct Exams.  <br />  Design and develop College system.(asp.net,MVC,WCF,C#, SQl)
            </p>
          </li>
          <li className='basis-1/2 space-y-2 p-2'>
            <div className='flex justify-between items-end'>
              <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-center'>Lecturer</h3>
              <h2 className='border-b border-opacity-50 ml-1 sm:ml-0 border-[#00f0ff] text-end sm:text-start text-[10px]'>(Nov2018-Nov2019)</h2>
            </div>
            <h4 className=' text-[12px] font-Poppins'>Govt.Municipal College Abdullah-purr Faisalabad</h4>
            <p className='text-[11px] font-light font-Poppins  py-2 tracking-6%'>
                Teaching Programming Fundamental sand Software Engineering-1 course to Undergraduate Students of University  <br />  Mentoring Students  <br />  Organizing and Managing Computer Laboratory  <br />  Conducting Labs of BSCS and BSIT students. (C++,OOP)  <br />  Conduct Exams.  <br />  Design and develop College system.(asp.net,MVC,WCF,C#, SQl)
            </p>
          </li>
        </ul>
      </main>
      <main className='flex flex-col mx-4 mt-4 py-4 border-t border-opacity-50 border-[#8b8b8b] justify-center text-white text-opacity-80 items-center max-w-[632px]'>
        <ul className='w-full md:flex md:space-x-4'>
          <li className='basis-1/2 md:border-r space-y-2 border-opacity-50 p-2 border-[#8b8b8b]'>
            <div className='flex justify-between items-end'>
              <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-start'>Chef Technical Officer (CTO)</h3>
              <h2 className='border-b border-opacity-50 border-[#00f0ff] text-[10px] w-[60px] text-center'>(July2018--)</h2>
            </div>
            <h4 className=' text-[12px] font-Poppins'>Step Up-IT Solution Provider(Company)</h4>
            <p className='text-[11px] font-light font-Poppins  py-2 tracking-6%'> Asp.net and Web Instructor <br />  Project Supervisor <br />  Project Management
            </p>
          </li>
          <li className='basis-1/2 space-y-2 p-2'>
            <div className='flex justify-between items-end'>
              <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-center'>External</h3>
              <h2 className='border-b border-opacity-50 ml-1 sm:ml-0 border-[#00f0ff] text-end sm:text-start text-[10px]'>(-  -)</h2>
            </div>
            <h4 className=' text-[12px] font-Poppins'>Government College Women University Faisalabad (GCWUF)</h4>
            <p className='text-[11px] font-light font-Poppins  py-2 tracking-6%'>
            Invited  as  External  for  Final  Year Project Evolution of theproject  of  BS  Computer  Science  Students  in  department ofComputerScience
            </p>
          </li>
        </ul>
        {/* Second row */}
        <ul className='w-full md:flex md:border-t border-opacity-50 border-[#8b8b8b] md:space-x-4'>
        <li className='basis-1/2 md:border-r space-y-2 border-opacity-50 p-2 border-[#8b8b8b]'>
            <div className='flex justify-between items-end'>
              <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-start'>Instructor &  Software Developer</h3>
              <h2 className='border-b border-opacity-50 border-[#00f0ff] text-[10px]'>(May2016-Sep2016)</h2>
            </div>
            <h4 className=' text-[12px] font-Poppins'>PASBAN IT GROUP</h4>
            <p className='text-[11px] font-light font-Poppins  py-2 tracking-6%'>  Teaching Programing Fundamentals and Web (front-end) courses (todiverseStudents) <br />  Mentoring Students <br />  Organizingand Managing Computer Laboratory <br />  Design and develope-commerce   websites and applications. <br />  SEO to coverson line trading.

            </p>
          </li>
          <li className='basis-1/2 space-y-2 p-2'>
            <div className='flex justify-between items-end'>
              <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-start'>Lecturer & Software Developer </h3>
              <h2 className='border-b border-opacity-50 ml-1 sm:ml-0 border-[#00f0ff] text-end sm:text-start text-[10px]'>(Oct2016-June2017)</h2>
            </div>
            <h4 className=' text-[12px] font-Poppins'>Government Post Graduate College Faisalabad,Pakistan</h4>
            <p className='text-[11px] font-light font-Poppins  py-2 tracking-6%'>  Teaching Programing Fundamentals and Software Engineering-1 course to Under graduate Students of University <br />  Mentoring Students <br />  Organizing and Managing Computer Laboratory <br />  Conducting Labs of BSCS and BSIT students. (C++,OOP) <br />  Conduct Exams. <br />  Design and develop College system.(asp.net,MVC,WCF,C#, SQl)
            </p>
          </li>
        </ul>
      </main>
      <main className='flex flex-col mx-4 mt-4 py-4 border-t border-opacity-50 border-[#8b8b8b] justify-center text-white text-opacity-80 items-center max-w-[632px]'>
        <ul className='w-full md:flex md:space-x-4'>  
          <li className=' basis-1/2 pl-2 md:border-r space-y-2 border-opacity-50 p-2 border-[#8b8b8b]'>
            <div className='flex justify-between items-end'>
              <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-start'>Lecturer & Software Developer & SQA</h3>
              <h2 className='border-b border-opacity-50 border-[#00f0ff] text-[10px]'>(July2017 -July2018)</h2>
            </div>
            <h4 className=' text-[12px] font-Poppins'>Selecto Solution (Company)</h4>
            <p className='text-[11px] font-light font-Poppins py-2 tracking-6%'>  Web Instructor <br />  Design and development of projects based on asp.net (MVC,WCF,WPF,SQl)<br />  Software Quality Assurance.
            </p>
          </li>
          <li className='basis-1/2 space-y-2 p-2'>
            <div className='flex justify-between items-end'>
              <h3 className='text-lg border-b border-opacity-50 border-[#00f0ff] text-center'>SoftwareDeveloper</h3>
              <h2 className='border-b border-opacity-50 ml-1 sm:ml-0 border-[#00f0ff] text-end sm:text-start text-[10px]'>(Feb2016-May2016)</h2>
            </div>
            <h4 className=' text-[12px] font-Poppins'>Sheer Serve,Company</h4>
            <p className='text-[11px] font-light font-Poppins  py-2 tracking-6%'>
               Software Development base onasp.net <br />  Theme development <br />  Quality Assurance
            </p>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Experience