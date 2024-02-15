import {useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import Logo from '@/assets/vinca-logo.svg'
import Page from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { navVariants, fadeIn } from '@/utils/motion'



type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage,  setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 860px)");
    const [isMenuToggled, setIsMenuToggle] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : " bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 drop-shadow";
  return (
    <nav className='fixed w-full z-50'>
        <div className={`${flexBetween} ${navbarBackground} 
        bg-[#ffffff]  z-50 w-full md:py-[24px] py-[16px] px-[30px] md:px-[80px]`}>
            <div className={`${flexBetween} mx-auto w-full`}>
                <motion.div
                    variants={navVariants}
                    viewport={{ once: true, amount: 0.25 }}
                    initial="hidden"
                    whileInView="show"
                    className={` w-full flex justify-between items-center `}>

                    <Link to="/">
                        <img src={Logo} alt=''/>
                    </Link>

                        {isAboveMediumScreens ? (
                        <motion.div  className={`${flexBetween} w-10/12 mx-auto`}>
                            <motion.div className=' flex gap-6 md:ml-[15%] justify-center items-center'>
                                <Page page="Home" pagelink='' textStyles='text-black' 
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}/>
                                <Page page="Book Appointment" pagelink="book" textStyles='text-black'   
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                                <Page page="Patient Stories" pagelink="stories" textStyles='text-black'  
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                            </motion.div> 
                            <motion.div>
                                <Link className=' bg-[#02AD4D] text-white text-sm 
                                flex justify-center items-center w-[132px] h-[38px] rounded-[50px]' to="/">
                                    Front Desk
                                </Link>
                            </motion.div>
                        </motion.div>
                    ) : (

                    <button className=' z-50 flex justify-center items-center gap-2' onClick={() => setIsMenuToggle(!isMenuToggled)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_2222_13260"  maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_2222_13260)">
                            <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#02AD4D"/>
                            </g>
                        </svg>
                    </button>
                    )}
                </motion.div> 
            </div>
        </div>

        {/*Mobile Menu Modal*/}
        {!isAboveMediumScreens && isMenuToggled && (
            <motion.div 
                    initial="hidden"
                    whileInView="show" 
                    variants={fadeIn("up", "tween", 0.1, 0.65)} className="bg-clip-padding bg-white  px-[20px] fixed w-full h-screen z-50 top-0 flex justify-center items-start">
            <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)}className=' w-full h-auto bg-white rounded-lg relative mt-8 pb-10'> 
                               
                <div className="flex flex-col space-y-3 text-2xl text-left pl-10 pt-[36px] pb-1">
                            <button className=' flex justify-start items-start' onClick={() => setIsMenuToggle(!isMenuToggled)}>
                                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.98036 27L7.17334 24.193L14.3914 16.9749L7.17334 9.80702L9.98036 7L17.1984 14.218L24.3663 7L27.1733 9.80702L19.9553 16.9749L27.1733 24.193L24.3663 27L17.1984 19.782L9.98036 27Z" fill="#013919"/>
                                </svg>
                            </button>  
                            <div className='flex flex-col justify-center'>
                            <div className='flex flex-col gap-y-5 text-base mt-[80px] text-[#0D0C0C] font-medium font-[Satoshi-Bold]'>
                                <a href='' target='_blank'>Facebook</a>
                                <a href='' target='_blank'>Instagram</a>
                                <a href='' target='_blank'>Twitter</a>
                            </div>
                            <div className="flex flex-col mt-[60px]">
                                <div className=' text-base text-[#0D0C0C] font-medium font-[Satoshi-Bold]'>
                                    Contact Us
                                </div>
                                <p className='text-sm  font-medium md:leading-[28px] leading-[18px] text-[#818181] mt-5'>
                                    vincahospital@gmail.com
                                </p>
                                <p className='text-sm mt-4 font-medium md:leading-[28px] leading-[18px] text-[#818181]'>+234 8118100234</p>
                                <p className='text-sm mt-4 font-medium md:leading-[28px] leading-[18px] text-[#818181]'>No. 12 Remkom Street Off Arab Road, Kubwa, Abuja.</p>
                            </div>
                            </div>
                    </div> 
                    <div className='flex justify-center items-center relative '>
                </div> 
            </motion.div>
            </motion.div>
        )}
    </nav>
  )
}

export default Navbar