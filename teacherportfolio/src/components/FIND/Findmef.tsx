import React from 'react'
// import Googlemap from '../../Map/GoogleMap'
// import Hello from '../../Map/HelloMap'
function Findme() {
    return (
        <div className='max-w-[632px] space-y-5'>
            <h1 className='text-[26px] text-[#00f0ff] border-b font-Foldit border-[#00f0ff] border-opacity-50 font-medium w-full h-[75px] flex justify-start items-center pl-7 text-opacity-80'>Find me on</h1>
            <div className=' h-[269px] mx-2 sm:mx-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d601.8977308239794!2d73.11584814459415!3d31.41832095190203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922430b8d9d5e95%3A0xa94cb305839b0416!2sHMZones!5e0!3m2!1sen!2s!4v1686133337087!5m2!1sen!2s" title='HMzones' className='w-full h-[269px]'  loading="lazy"></iframe>
            </div>
            <ul className='text-[14px] font-medium text-[#00f0ff] pl-4 sm:pl-7 pt-2 text-opacity-80 w-full'>
                <li className=' flex justify-start items-center'>Email : <h3 className='text-[13px] text-white text-opacity-80 pl-1'>juhinah.batool@bic.edu.pk</h3> </li>
                <li className=' flex justify-start items-center'>Phone : <h3 className='pl-1 text-[13px] text-white text-opacity-80'>0092-3336574667</h3> </li>
                <li className=' flex justify-start h-[20px] items-start'>Address <li className=' pl-1'>:</li> <h3 className='text-[13px] text-white text-opacity-80 pl-1'>House NoF-19,FESCO OfficerColony, CanalRoad, Abdullah-pur,Faisalabad,Pakistan.</h3> </li>
            </ul>
        </div>
    )
}

export default Findme