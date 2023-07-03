import batol from "../../assets/images/batol.jpg"
function Test() {
    return (
        <div className="space-y-7 pb-10">
            <h1 className="w-full border-b pl-5 pb-5 font-Foldit border-[#00f0ff] border-opacity-50 text-[26px] text-opacity-80 text-[#00f0ff]">Testimonial</h1>
            <ul className="w-full flex justify-center text-center pt-3 items-center">
                <p className='text-[12px] max-w-[260px] sm:max-w-[450px] font-light text-white text-opacity-50 p-1 md:p-2 tracking-6%'>
                    " Build whatever you like with this template that looks Effortlessly and on-point in Corporate, Business and Education." </p>
            </ul>
            <ul className="w-full flex flex-col justify-center text-center pt-3 items-center">
                <img src={batol} alt="" className="w-[70px] rounded-full h-[70px]" />
            </ul>
            <ul className="w-full flex justify-center items-center">
                <li className="w-full mx-10 sm:w-[450px] border-t border-[#8B8B8B] border-opacity-50"></li>
            </ul>
        </div>
    )
}

export default Test