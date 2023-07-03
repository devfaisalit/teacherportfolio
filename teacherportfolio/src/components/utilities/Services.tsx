import React from 'react'

function Services() {



  return (
    <div>
      <div className='border-b pb-6 border-[#00f0ff] border-opacity-50 '>
       <fieldset className="sm:border border-[#00f0ff] border-opacity-50 mx-3 sm:ml-5 text-left text-xl sm:max-w-[450px] md:max-w-[580px] md:text-[26px] px-2 ">
            <legend className="text-[#00f0ff] font-Foldit text-opacity-80">
            COMPLETED PROJECTS AND ASSIGNMENTS SUBJECTS STUDIED
            </legend>
          </fieldset>
      </div>
      <main className='sm:pl-8 w-full space-y-6 sm:space-y-0 py-4 flex flex-col sm:flex-row space-x'>
        <ul className='w-full sm:max-w-[270px] pb-4 sm:pb-0 border-b border-[#8b8b8b] border-opacity-50 sm:border-none px-5 sm:px-0 text-start text-white text-opacity-80 '>
          <ul className='text-[12px] space-y-4 font-light text-white text-opacity-50 tracking-6%'>
          <li> Sapphires World an E/commerce System(Asp.net) </li>
        <li> Foods Login, Step Up (Project Lead) </li>
        <li> Aggression Exorcist (asp.net) </li>
        <li> Children Clinic Management System (Ado.net) </li>
        <li> College Management system, Kingston College Faisalabad (asp.net)</li>
          </ul>
        </ul>
        <ul className='w-full px-5 sm:px-0 text-start text-white text-opacity-80 sm:pl-10 sm:border-l border-white border-opacity-30'>
          <ol className='text-[12px] space-y-4 font-light text-white text-opacity-50 tracking-6%'>
          <li> Commission Utility, Selecto (asp.net, WCF) </li>
        <li> Call Center Utlitiy, Selecto Solution (asp.net, WCF) </li>
        <li> Blood donation Website, Semester Project (.net) </li>
        <li> DATABASE OF EDUCATOR SCHOOL, Semester project (Oracle) </li>
        <li> BrickGame (C++, OPP, GRAPHICS)</li>
          </ol>
        </ul>
      </main>
    </div>
  )
}

export default Services