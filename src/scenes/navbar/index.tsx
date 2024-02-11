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
                    className={` w-full flex `}>

                    <Link to="/">
                        <img src={Logo} alt=''/>
                    </Link>

                        {isAboveMediumScreens ? (
                        <motion.div  className={`${flexBetween} w-10/12 mx-auto`}>
                            <motion.div className=' flex gap-6 md:ml-[15%] justify-center items-center'>
                                <Page page="Home" pagelink='' textStyles='text-black' 
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}/>
                                <Page page="Book Appointment" pagelink="events" textStyles='text-black'   
                                    selectedPage={selectedPage} 
                                    setSelectedPage={setSelectedPage}/>
                                <Page page="Patient Stories" pagelink="community" textStyles='text-black'  
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

                    <button className='px-[24px] py-3 rounded-[38px] bg-[#4a4a4a] text-white z-50
                    text-sm flex justify-center items-center gap-2' onClick={() => setIsMenuToggle(!isMenuToggled)}>
                        <Bars3Icon className='h-6 w-6 text-white'/>
                        MENU
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
                    variants={fadeIn("up", "tween", 0.1, 0.65)} className="bg-clip-padding backdrop-filter
            bg-gray-600 backdrop-blur-sm bg-opacity-10 drop-shadow px-[20px] fixed w-full h-screen z-50 top-0 flex justify-center items-start">
            <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)}className=' w-full h-auto bg-white rounded-lg relative mt-8 pb-10'>              
                <div className="flex flex-col space-y-3 text-2xl text-left pl-10 pt-10 pb-1">
                            <Page page="Home" pagelink='' textStyles='text-black font-bold' 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                            <Page page="Book Appointment" pagelink="events" textStyles='text-black font-bold'   
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}/>
                            <Page page="Patient Stories" pagelink="community" textStyles='text-black font-bold'  
                                selectedPage={selectedPage} 
                                setSelectedPage={setSelectedPage}/>
                            <Link className=' bg-[#02AD4D] text-white text-sm 
                                flex justify-center items-center w-[132px] h-[38px] rounded-[50px]' to="/">
                                    Front Desk
                            </Link>
                    </div> 
                    <div className='flex justify-center items-center relative '>
                    <button className=' p-1 rounded-[100px] bg-black text-white 
                    text-sm flex justify-center items-center' onClick={() => setIsMenuToggle(!isMenuToggled)}>
                        <XMarkIcon className='h-5 w-5 text-white'/>
                       
                    </button>
                </div> 
            </motion.div>
            </motion.div>
        )}
    </nav>
  )
}

export default Navbar