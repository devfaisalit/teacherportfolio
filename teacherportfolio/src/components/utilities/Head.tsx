import React, { useRef, useEffect } from 'react'
import batol from "../../assets/images/batol.jpg"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"
import { AiOutlineSkype } from "react-icons/ai"
import { FiDownload, FiSend } from "react-icons/fi"
import { GrLinkedinOption } from "react-icons/gr"

function Head() {

    const vidRef: any = useRef();

    useEffect(() => { vidRef.current.play() }, []);


    const url = "https://player.vimeo.com/external/368789132.sd.mp4?s=90efbe5a51f1331fd9b4ef2851928ddaefee2023&profile_id=164&oauth2_token_id=57447761"

    return (
        <div className='bg-[#112c40] overflow-hidden my-10 md:mr-6 xl:mr-0 xl:my-0 md:max-w-[632px] mt-24 sm:mt-10 xl:w-[454px] h-[500px] shadow-lg font-Foldit shadow-black z-50 lg:h-[573px] xl:h-[calc(100vh-15vh)] 2xl:max-h-[700px] relative md:left-[60px] xl:left-0 flex-1 max-w-[500px]'>
            <div className='absolute top-0 left-0 right-0 max-h-[260px] sm:max-h-[400px] overflow-hidden'>
                <video
                    src={url}
                    ref={vidRef}
                    muted
                    autoPlay
                    loop
                    className='clip sm:clip-sm md:clip-md lg:clip-lg xl:clip-path-home'
                />
            </div>
            <ul className='text-[#00f0ff] text-opacity-80 relative bottom-0 font-normal h-full w-full flex flex-col justify-center items-center'>
                <img src={batol} alt="" className='rounded-full 2xl:w-[250px] shadow-[0px_0px_0px_1px_rgba(0,240,255)] 2xl:h-[250px] max-w-[160px] max-h-[160px] sm:max-w-[175px] sm:max-h-[175px] lg:max-w-[160px] lg:max-h-[160px] mt-16 sm:mt-28 lg:mt-36' />
                <div className='flex justify-center relative bottom-2 tracking-6% items-center h-full flex-col 2xl:space-y-3'>
                    <h2 className='text-[30px]'>JUHINAH BATOOL ASIF</h2>
                    <h3 className='text-[16px] '>Lecturer & Project Manager</h3>
                    <ol className='flex justify-around items-center relative bottom-3 h-[50px] w-[200px] '>
                        <a href='https://www.facebook.com/HMZones1' className='text-xl  hover:text-[#6dff1e] text-white text-opacity-50 hover:text-opacity-100 flex justify-center items-center'><FaFacebookF /></a>
                        <a href='https://twitter.com/HmZones' className='text-xl hover:text-[#6dff1e] text-white text-opacity-50 hover:text-opacity-100 flex justify-center items-center'><FaTwitter /></a>
                        <a href='https://www.instagram.com/hmzones/' className='text-xl hover:text-[#6dff1e] text-white text-opacity-50 hover:text-opacity-100 flex justify-center items-center'><SiInstagram /></a>
                        <a href='https://www.linkedin.com/company/hm-zones/?original_referer=https%3A%2F%2Fhmzones.com%2F' className='text-xl hover:text-[#6dff1e] text-white text-opacity-50 hover:text-opacity-100 flex justify-center items-center'><GrLinkedinOption /></a>
                        <li className='text-xl hover:text-[#6dff1e] text-white text-opacity-50 hover:text-opacity-100 flex justify-center items-center '><AiOutlineSkype /></li>
                    </ol>
                </div>
                <div className='text-[#00f0ff] absolute bottom-0 md:text-[15px] lg:text-[18px] text-opacity-80 flex justify-around items-center border-t border-[#00f0ff] border-opacity-50 w-full font-normal mt-auto'>
                    <a className='basis-1/2 flex justify-center py-2 2xl:py-4 hover:text-[#6dff1e] items-center ' href="./assets/JuhinahBatoolAsif.pdf" target='blank' download><span>DownloadCV</span> <FiDownload className='ml-2' /></a>
                    <li className='border-opacity-50 border-l border h-[50px] 2xl:h-[59px] border-[#00f0ff]'></li>
                    <button className=' hover:text-[#6dff1e] basis-1/2 flex justify-center items-center'>Message me
                        <FiSend className='ml-2' />
                    </button>  
                </div>
            </ul>

        </div>
    )
}

export default Head