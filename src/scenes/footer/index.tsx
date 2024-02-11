import Logo from '@/assets/vinca-logo.svg'
import { footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion'

const footer = () => {
    const link = " text-[14px] font-normal text-[#57585d] "
    return (
    <footer>
    <div className=' flex flex-col w-full md:p-[80px] p-[20px]'>
    <div className='w-full lg:grid grid-cols-3 gap-10'>
        <div className="">
            <img src={Logo} alt=''/>
            <p className=' text-[13px] md:text-sm mt-4 font-medium md:leading-[28px] leading-[18px] text-[#0D0C0C]'>
                vincahospital@gmail.com
            </p>
            <p className='text-[13px] md:text-sm mt-4 font-medium md:leading-[28px] leading-[18px] text-[#0D0C0C]'>+234 8118100234</p>
            <p className='text-[13px] md:text-sm mt-4 font-medium md:leading-[28px] leading-[18px] text-[#0D0C0C]'>No. 12 Remkom Street Off Arab Road, Kubwa, Abuja.</p>
        </div>
        <div className=" flex md:flex-row flex-col md:gap-14 gap-8 lg:mt-0 mt-8">
        <div>
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
        className='lg:flex grid grid-rows-2 lg:justify-between 
        justify-center border-t md:text-[14px] text-[10px] border-[#cfcfd1] lg:pt-5 pt-2'>
        <div className=' flex justify-between items-center md:gap-20 gap-2'>
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