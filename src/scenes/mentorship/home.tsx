import Image from '@/assets/white_meta.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
const header = " text-black md:text-[18px] text-[16px] font-[500]"
const container = "flex flex-col items-center justify-center "
const body = " md:text-[64px] text-[36px] font-[300] text-[#D11F26]"
const footer = "text-[#828282] md:text-[16px] text-[14px] font-[500]"

const svgVariants = {
    hidden:{ scale: 0.8},
    visible:{
        transition: { duration: 1, stiffness: 100}
    }
}
const pathVariants ={
   hidden: {
    opacity: 0,
    pathLength: 0,
   },
   visible: {
    opacity: 1,
    pathLength: 1,
    transition:{
        duration: 2,
        ease:"easeInOut"
    }
   }
}

return (
    <section>
        <div className=" bg-[#0f1017] h-auto md:px-[80px] px-[20px] py-44 ">
            <div className=' '>
                <Link to="/" className=' text-[#9F9FA2] md:text-[16px] text-[14px] flex items-center gap-2 tracking-[3.2px]' > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
                    <path d="M0 1H20" stroke="#9F9FA2"/>
                    </svg> 
                    APPLY NOW
                </Link>
                <h1 className=' md:text-[70px] text-[44px] mt-4 font-bold text-[#fff]'>Mentorship</h1>
            </div>
            <div className=' flex flex-col lg:flex-row items-center'>
                <img src={Image} alt=''/>
                <div className=''>
                    <h1 className=' text-[#fff] md:text-[44px] text-[30px]'>
                    Nextgen Hub<br className='hidden md:flex'/> Mentorship Program
                    <motion.svg variants={svgVariants}  initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" width="191" height="22" viewBox="0 0 191 22" fill="none">
                        <motion.path
                        variants={pathVariants}
                        d="M3.83374 11.3397C40.089 3.71878 127.617 -5.48829 187.688 18.6508" stroke="#D11F26" stroke-width="6" stroke-linecap="round"/>
                    </motion.svg>
                    </h1>
                    <p className=' mt-8 text-white md:text-base text-sm leading-8 pb-12'>
                    NextGen Hub introduces Cohort 3 of the NextGen Mentorship Program. Elevate diversity in several STEM courses, data science, Web development, AI, Physics, Blockchain, and others with mentorship, career opportunities, and growth for both Mentors and Mentees. Join us in connecting emerging talents with seasoned mentors, fostering career discussions, 
                    and enriching learning experiences. Empower your journey into STEM with NextGen Hub's Mentorship Program.
                    </p>
                    <Link to="/mentors-registration" className=" px-[34px] py-[16px] rounded-[8px] bg-[#d11f26] text-white text-sm">Apply Now!</Link>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center py-[80px] px-[20px]'>
            <h1 className=' text-[#0f1017] md:text-[54px] text-[30px] text-center'>
            Opening Quote to drive the <br className=' hidden md:flex'/>value
            </h1>
            <div className='flex gap-10 mt-20'>
                <div className={`${container}`}>
                    <p className={`${header}`}>Mentors</p>
                    <h1 className={`${body}`}>10+</h1>
                    <p className={`${footer}`}>Joined</p>
                </div>
            <div className={`${container}`}>
                    <p className={`${header}`}>Mentees</p>
                    <h1 className={`${body}`}>80+</h1>
                    <p className={`${footer}`}>Joined</p>
                </div>
            <div className={`${container}`}>
                    <p className={`${header}`}>Projects</p>
                    <h1 className={`${body}`}>15+</h1>
                    <p className={`${footer}`}>Joined</p>
                </div>
                <div className={`${container}`}>
                    <p className={`${header}`}>Countries</p>
                    <h1 className={`${body}`}>21+</h1>
                    <p className={`${footer}`}>Joined</p>
                </div>
            </div>
        </div>
        <div className="h-[400px] w-[90%]  md:w-[60%] m-5 relative mx-auto bg-cover md:bg-center bg-no-repeat bg-[url('@/assets/vidimage.png')]"/>
        <div className='bg-bgShadow rounded-[210px] mx-auto blur-[43px] w-[70%] h-[50px]'/>
        <div className='bg-[#0f1017] -mt-[250px] pt-[300px] pb-[80px]'>
            <div className=' md:w-[60%] mx-auto flex flex-col px-[20px] md:px-0'>
            <h1 className=' text-[#fff] md:text-[44px] text-[30px] font-medium md:leading-[49px] leading-[40px]'>
            Apply to be a NextGen Hub <br className=' hidden sm:flex'/>mentor or mentee!
            </h1>
            <div className='flex flex-col justify-center items-center md:flex-row gap-10 mt-10 md:p-[0px] p-[20px]'>
                <div className=' rounded-lg bg-cardbg p-[50px] border-card border1 border-solid 
                min-w-[280px] max-w-[422px] pr-[100px]  flex flex-col gap-y-6  '>
                    <div className=' flex items-center gap-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <path d="M36.6609 20.4819C36.7723 20.0657 36.5254 19.638 36.1093 19.5265L29.3285 17.7096C28.9124 17.5981 28.4847 17.8451 28.3732 18.2612C28.2617 18.6773 28.5087 19.105 28.9248 19.2165L34.9521 20.8315L33.3371 26.8589C33.2256 27.275 33.4725 27.7027 33.8886 27.8142C34.3047 27.9257 34.7325 27.6788 34.8439 27.2626L36.6609 20.4819ZM16.4828 32.3955L36.2974 20.9555L35.5174 19.6045L15.7028 31.0445L16.4828 32.3955Z" fill="white"/>
                        <circle cx="26" cy="26" r="25.22" stroke="white" stroke-width="1.56"/>
                    </svg>
                    <h1 className=' text-xl font-bold text-[#fff]'>
                        Prospective<br></br> Mentors
                    </h1>
                    </div>
                    <p className=' text-lg text-white font-normal'>
                        Cohort 1 Application<br/><span className=' text-base font-light'>Starts April 17, 2024</span>
                    </p>
                    <p className=' text-lg text-white font-normal'>
                        Program Duration<br/><span  className=' text-base font-light'>April 2024 - November 2024</span>
                    </p>
                    <p className=' text-lg text-white font-normal'>
                        Next <br/>Cohort<br/><span  className=' text-base font-light'>Starts Dec 12, 2024</span>
                    </p>
                </div>
                <div className=' rounded-lg bg-[#18A88E] border-cardborder2 border-solid p-[50px]  min-w-[280px] max-w-[422px] pr-[100px] flex flex-col gap-y-6 '>
                    <div className=' flex items-center gap-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <path d="M36.6609 20.4819C36.7723 20.0657 36.5254 19.638 36.1093 19.5265L29.3285 17.7096C28.9124 17.5981 28.4847 17.8451 28.3732 18.2612C28.2617 18.6773 28.5087 19.105 28.9248 19.2165L34.9521 20.8315L33.3371 26.8589C33.2256 27.275 33.4725 27.7027 33.8886 27.8142C34.3047 27.9257 34.7325 27.6788 34.8439 27.2626L36.6609 20.4819ZM16.4828 32.3955L36.2974 20.9555L35.5174 19.6045L15.7028 31.0445L16.4828 32.3955Z" fill="white"/>
                        <circle cx="26" cy="26" r="25.22" stroke="white" stroke-width="1.56"/>
                    </svg>
                    <h1 className=' text-xl font-bold text-[#fff]'>
                        Prospective<br></br> Mentors
                    </h1>
                    </div>
                    <p className=' text-lg text-white font-normal'>
                        Cohort 2 Application<br/><span className=' text-base font-light'>Starts December 12, 2024</span>
                    </p>
                    <p className=' text-lg text-white font-normal'>
                        Program Duration<br/><span  className=' text-base font-light'>December 2024 - August 2025</span>
                    </p>
                    <p className=' text-lg text-white font-normal'>
                        Next <br/>Cohort<br/><span  className=' text-base font-light'>Starts August 12, 2025</span>
                    </p>
                </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Home