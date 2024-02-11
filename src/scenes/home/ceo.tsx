import { slideIn } from '@/utils/motion';
import { motion } from 'framer-motion'

const ceo = () => {
    return (
    <motion.section 
    initial="hidden"
    viewport={{ once: true, amount: 0.25 }}
    whileInView="show"
    className=' m-auto flex py-[80px] justify-center items-center overflow-hidden'>
    <div className=' mt-auto w-9/12 flex justify-between '>
    <div className='flex w-1/2  mt-0'>
        <div className=' flex flex-col '>
        </div>
    </div>
    <motion.div 
    variants={slideIn("right", "tween", 0.1, 0.5)}
    className=' flex flex-col md:w-1/2'>
    <p className=' font-semibold md:text-[40px] text-[20px] md:leading-[50px] leading-[24px]  flex flex-col text-[#0f1017] mt-10'>
        <div className='flex flex-col w-[75px] h-[75px] items-center justify-center gap-[4px] p-[8px] relative bg-[#e148171a] rounded-[100px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M6.42597 11.2359H0.969971L5.58997 0.763916H9.10997L6.42597 11.2359ZM14.346 11.2359H8.88997L13.51 0.763916H17.03L14.346 11.2359Z" fill="#E14817"/>
        </svg></div>
        <span className='-mt-8 ml-8 md:text-[44px] text-[24px] font-semibold '>Tell me and I forget. Teach me and I can remeber. Involve me and I learn - Benjamin Franklin</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
        <path d="M6.42597 11.2359H0.969971L5.58997 0.763916H9.10997L6.42597 11.2359ZM14.346 11.2359H8.88997L13.51 0.763916H17.03L14.346 11.2359Z" fill="#E14817"/>
</svg>
</p>
    </motion.div>
    </div>
    </motion.section>
    )
}
export default ceo