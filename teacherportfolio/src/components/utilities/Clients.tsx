import React, { useRef, useState } from "react";
import hm from "../../assets/images/hm.png"
import history from "../../assets/images/history.png"
import history2 from "../../assets/images/History2.png"
import gamebite from "../../assets/images/gamebite.png"
import st7 from "../../assets/images/7ST.png"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { EffectCoverflow, Pagination } from "swiper";
function Clients() {
    // 
    // 
    return (
        <div>
            <h1 className="w-full border-b border-[#00f0ff] border-opacity-50 text-[26px] pb-5 font-Foldit pl-5 text-[#00f0ff] text-opacity-80">My Clients</h1>
            <ul className="w-full flex h-[140px] justify-center items-center">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >
                    <SwiperSlide className=" basis-28 md:w-[70px] flex justify-center items-center">
                        <a href="https://hamzamanzoor.com/" >
                            <img src={hm} alt="" className="md:w-[70px] w-[45px] md:h-[70px] rounded-full " />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="border-l w-[45px] border-white basis-28 md:w-[120px] flex justify-center items-center border-opacity-50">
                        <a href="https://historyuncover.com/">
                            <img src={history} alt="" className="md:w-[70px] w-[45px] md:h-[70px] rounded-full " />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="border-l w-[45px] border-white basis-28 md:w-[120px] flex justify-center items-center border-opacity-50">
                        <a href="https://historyuncover.com/" >
                            <img src={history2} alt="" className="md:w-[70px] w-[45px]  md:h-[70px] rounded-full " />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="border-l w-[45px] border-white basis-28 md:w-[120px] flex justify-center items-center border-opacity-50">
                        <a href="https://gamebite.fun/" >
                            <img src={gamebite} alt="" className="md:w-[70px]  w-[45px] md:h-[70px] rounded-full " />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="border-l w-[45px] border-white basis-28 md:w-[120px] flex justify-center items-center border-opacity-50">
                        <a href="https://xeurix.com/" >
                            <img src={st7} alt="" className="md:w-[70px]  w-[45px] md:h-[70px] rounded-full " />
                        </a>
                    </SwiperSlide>
                </Swiper>

            </ul>
            <ul className="w-full flex justify-center items-center">
                <li className="basis-28 md:w-[120px] border-t border-[#8B8B8B] border-opacity-50"></li>
            </ul>
        </div>
    )
}

export default Clients