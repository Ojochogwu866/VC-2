import { useState } from 'react';
import Image from '@/assets/section-7.png';
import image2 from '@/assets/jrz.png'
import {  slideIn } from '@/utils/motion';
import { motion } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery';
import { fadeIn } from '@/utils/motion';


const Features = () => {
    const [isModalToggled, setIsModalToggle] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 860px)");
    
return (
    <motion.section 
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show" className=' bg-[#0f1017] md:h-[749px] h-[auto] py-[100px] md:py-[0px]'>
            <div className='absolute overflow-hidden'>
            <svg className='w-full flex xl:ml-36 justify-end' xmlns="http://www.w3.org/2000/svg" height="61" viewBox="0 0 760 61" fill="none">
                <path opacity="0.05" d="M390.005 -1197H833L442.995 61H0L390.005 -1197Z" fill="white"/>
            </svg>
            <svg className=' w-full xl:ml-24 sx:h-full' xmlns="http://www.w3.org/2000/svg"  height="749" viewBox="0 0 1124 749" fill="none">
                <path opacity="0.05" d="M586.178 -48H1124L549.5 1695H0L586.178 -48Z" fill="white"/>
            </svg>
            </div>
            <div className='flex  justify-between  h-full'>
                <motion.div
                    variants={slideIn("left", "tween", 0.1, 0.5)}
                    className=' flex flex-col justify-center md:mt-0 md:px-[80px] px-[20px] text-left '>
                    <p className=' text-[#9F9FA2] lg:text-[16px] text-[14px] flex items-center gap-2 tracking-[3.2px]' > 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
                            <path d="M0 1H20" stroke="#9F9FA2"/>
                        </svg>
                            ALL FEATURES
                    </p>
                    <h1 className=' lg:text-[44px] text-[30px] font-normal text-[#fff]'>Events on NextGen Hub</h1>
                    <p className=' text-[#cfcfd1] lg:text-[14px] text-[12px] mt-5'>
                        Making hybrid‑conference inclusive with unique option for physical and virtual event
                    </p>
                    <ul className=' mt-5 text-[#fff] lg:text-[16px] text-[14px] space-y-3'>
                        <li className=' flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#ED9174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#ED9174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>Virtual Events on Google Meet</li>
                        <li className=' flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#ED9174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#ED9174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>Physical Events in Nigeria</li>
                    <li className=' flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#ED9174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#ED9174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Annual hybrid events across the globe</li>
                    </ul>
                </motion.div>
            <img className='hidden md:flex md:w-1/2 object-cover h-auto max-w-full relative' src={Image} alt='nextgen_allfeautures'/>
            
            <div className='absolute  w-full flex justify-center items-center mt-[100px] '>
                   {isAboveMediumScreens ? (
                <div className="bg-white w-[257px] h-auto px-[20px] py-[30px] rounded-[16px] absolute md:top-[300px] p-4">
                    <div className=" w-full flex justify-between items-center pb-4 border-b border-[#cfcfd1] ">
                        <div className=" gap-2 flex items-center">
                            <p className=" text-base font-semibold text-[#0F1017]">Community
                            </p>
                            <span className=' rounded-[100%] h-5 w-5 bg-[#0f1017] text-white text-[9px] inline-flex items-center justify-center'>21</span>
                        </div>
            <div className=" w-[20px] h-[20px] rounded-[100%] border border-[#cfcfd1] flex justify-center items-center">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.666626 5.16659L4.99996 0.833252L9.33329 5.16659" stroke="#87888B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div className=" flex gap-2 mt-4 items-center">
            <img className=" w-[28px] h-[28px] rounded-[8px] object-cover" src={image2} alt="" />
                <p className=' font-normal text-[11px] text-[#0f1017]'>Hellen Mantari</p>
                    <span className=" text-[9px] text-[#8a8b96] ">12:10am</span>
                </div>
            <div className="">
                <p className=' bg-[#18c65d] w-fit rounded-r-[8px] text-[12px] p-[8px] text-white mt-2 rounded-tb-[8px]'>Guys, what do you want?</p>
                <p className=' bg-[#18c65d] w-fit rounded-[8px] text-[12px] p-[8px] text-white mt-2'>Can I help you?</p>
            </div>
            <div className=" w-full h-[44px] mt-[10px] flex relative items-center border border-[#cfcfd1] px-[8px] py-[13px] rounded-[100px]">
                <input className="text-[#0f1017] h-full w-full text-[12px] outline-none" type="text" placeholder="Message" />
                <div className=" w-[30px] h-[30px] bg-[#18c65d] rounded-[100%] flex items-center justify-center">
                    <svg width="17" height="17" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3839 3.9797L5.20165 0.888593C1.04888 -1.19141 -0.655569 0.513038 1.42443 4.66582L2.05276 5.92248C2.23332 6.29082 2.23332 6.71693 2.05276 7.08526L1.42443 8.3347C-0.655569 12.4875 1.04165 14.1919 5.20165 12.1119L11.3839 9.02082C14.1572 7.63415 14.1572 5.36637 11.3839 3.9797ZM9.0511 7.04193H5.1511C4.85499 7.04193 4.60943 6.79637 4.60943 6.50026C4.60943 6.20415 4.85499 5.95859 5.1511 5.95859H9.0511C9.34721 5.95859 9.59276 6.20415 9.59276 6.50026C9.59276 6.79637 9.34721 7.04193 9.0511 7.04193Z" fill="white"/>
                    </svg>
                    </div>
                </div>
            </div>
            ) : ( 
            <div className=' flex justify-end items-end mt-[200px]'>
            <button className='px-[24px] py-3 rounded-[38px] bg-[#4a4a4a] text-white cursor-pointer z-10
                    text-sm flex justify-center items-center gap-2' onClick={() => setIsModalToggle(!isModalToggled)}>    
                        COMMUNITY
                    </button>
                    </div>
        
                    )}
        </div>
                     {!isAboveMediumScreens && isModalToggled && (
            <motion.div 
                    initial="hidden"
                    whileInView="show" 
                    variants={fadeIn("up", "tween", 0.1, 0.65)} 
                    className="bg-clip-padding backdrop-filter
                    bg-gray-600 backdrop-blur-sm bg-opacity-10 drop-shadow px-[20px] fixed w-full h-screen z-10 top-0 flex justify-center items-start">
            <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)}className=' bg-white max-w-[310px] min-w-[300px] h-auto px-[20px] mt-[30%] rounded-[16px] p-4'>              
                    <div className=" w-full flex justify-between items-center pb-4 border-b border-[#cfcfd1] ">
                        <div className=" gap-2 flex items-center">
                            <p className=" text-base font-semibold text-[#0F1017]">Community
                            </p>
                            <span className=' rounded-[100%] h-5 w-5 bg-[#0f1017] text-white text-[9px] inline-flex items-center justify-center'>21</span>
                        </div>
            <div className=" w-[20px] h-[20px] rounded-[100%] border border-[#cfcfd1] flex justify-center items-center">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.666626 5.16659L4.99996 0.833252L9.33329 5.16659" stroke="#87888B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div className=" flex gap-2 mt-4 items-center">
            <img className=" w-[28px] h-[28px] rounded-[8px] object-cover" src={image2} alt="" />
                <p className=' font-normal text-[11px] text-[#0f1017]'>Hellen Mantari</p>
                    <span className=" text-[9px] text-[#8a8b96] ">12:10am</span>
                </div>
            <div className="">
                <p className=' bg-[#18c65d] w-fit rounded-r-[8px] text-[12px] p-[8px] text-white mt-2 rounded-tb-[8px]'>Guys, what do you want?</p>
                <p className=' bg-[#18c65d] w-fit rounded-[8px] text-[12px] p-[8px] text-white mt-2'>Can I help you?</p>
            </div>
            <div className=" w-full h-[44px] mt-[10px] flex relative items-center border border-[#cfcfd1] px-[8px] py-[13px] rounded-[100px]">
                <input className="text-[#0f1017] h-full w-full text-[12px] outline-none" type="text" placeholder="Message" />
                <div className=" w-[30px] h-[30px] bg-[#18c65d] rounded-[100%] flex items-center justify-center">
                    <svg width="17" height="17" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3839 3.9797L5.20165 0.888593C1.04888 -1.19141 -0.655569 0.513038 1.42443 4.66582L2.05276 5.92248C2.23332 6.29082 2.23332 6.71693 2.05276 7.08526L1.42443 8.3347C-0.655569 12.4875 1.04165 14.1919 5.20165 12.1119L11.3839 9.02082C14.1572 7.63415 14.1572 5.36637 11.3839 3.9797ZM9.0511 7.04193H5.1511C4.85499 7.04193 4.60943 6.79637 4.60943 6.50026C4.60943 6.20415 4.85499 5.95859 5.1511 5.95859H9.0511C9.34721 5.95859 9.59276 6.20415 9.59276 6.50026C9.59276 6.79637 9.34721 7.04193 9.0511 7.04193Z" fill="white"/>
                    </svg>
                    </div>
                </div>
                    <div className='flex justify-center items-center relative'>
                    <button className=' p-3 rounded-lg bg-black text-white mt-4
                    text-sm flex justify-center items-center ' onClick={() => setIsModalToggle(!isModalToggled)}>
                        Close
                    </button>
                </div> 
            </motion.div>
            </motion.div>
        )}
    </div>
    </motion.section>
    )
}
export default Features