import Logo from '@/assets/vinca-logo.svg'
import { footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion'

const footer = () => {
    const link = " text-[14px] font-normal text-[#57585d] "
    return (
    <footer>
    <div className=' flex flex-col w-full md:p-[80px] p-[20px]'>
    <div className='w-full flex flex-col'>
        <div className=' w-full flex justify-between items-center'>
            <img src={Logo} alt='logo'/>
                <div className=''>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="25" fill="#02AD4D"/>
                        <path d="M24 33V20.825L18.4 26.425L17 25L25 17L33 25L31.6 26.425L26 20.825V33H24Z" fill="#80D6A6"/>
                    </svg>
                </div>
            </div>
        <div className='flex flex-wrap w-full mt-8 gap-10'>
            <div className="flex flex-col">
                <p className=' text-[13px] md:text-sm  font-medium md:leading-[28px] leading-[18px] text-[#0D0C0C]'>
                    vincahospital@gmail.com
                </p>
                <p className='text-[13px] md:text-sm mt-4 font-medium md:leading-[28px] leading-[18px] text-[#0D0C0C]'>+234 8118100234</p>
                <p className='text-[13px] md:text-sm mt-4 font-medium md:leading-[28px] leading-[18px] text-[#0D0C0C]'>No. 12 Remkom Street Off Arab Road, Kubwa, Abuja.</p>
            </div>
            <div className=" flex flex-col md:gap-14 gap-8 ">
                    <ul className=' space-y-2 w-full'>
                        <div className={`text-sm text-[#949494]`}>Quick Links</div>
                        <li className={`${link}`}>Home</li>
                        <li className={`${link}`}>Appointment</li>
                        <li className={`${link}`}>Front Desk</li>
                        <li className={`${link}`}>Blog</li>
                        <li className={`${link}`}>Contact Us</li>
                    </ul>
            </div>
        </div>
        </div>
        <motion.div 
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            className='lg:flex grid grid-rows-2 lg:justify-between mt-[100px]
            justify-center border-t md:text-[14px] text-[10px] border-[#cfcfd1] lg:pt-5 pt-2'>
                <div className=' flex justify-between items-center md:gap-20 gap-2 mt-[45px]'>
                    <p>&copy; Vinca Hospital</p>
                    <ul className='flex md:gap-8 gap-1'>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
        </motion.div>
        </div>
    </footer>
    )
}

export default footer