import { useEffect, useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion";
import { useForm } from "react-hook-form";

type FormData = {
    programs: string[];
}

export default function Stack() {
    const programOptions = ['Maths', 'NLP', 'Computer Vision', 'Robotics', 'STEM', 'Blockchain', 'FullStack Dev', 'Physics', 'IOT', 'AI (Machine Learning)'];
    const onHandleFormSubmit = (data: FormData) => {
            console.log(data)
    }
   const form = useForm<FormData>({
        defaultValues: {
            programs:[]
        }

   }) 
   const {  handleSubmit, register } = form;
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [2, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const position = useTransform(scrollYProgress, (pos) =>
        pos >= 1 ? "relative" : "relative"
    );

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) =>{
            if (!targetRef.current) return;
            const { clientX, clientY } = ev;
            console.log(clientX, clientY);
            targetRef.current.style.setProperty("--x", `${clientX}px`);
            targetRef.current.style.setProperty("--y", `${clientY}px`);
        };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
        window.removeEventListener('mousemove', updateMousePosition);
    }},
    [])
    return (
        <>
    <motion.section
        style={{ opacity }}
        className=' py-44 h-auto relative md:px-[80px] px-[20px] bg-[#0f1017]'>
            <motion.div 
                style={{ position, scale, x: "1%" }}
                className=' flex justify-center items-center md:pb-0 left-auto'>
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className=' text-[#cfcfd1] md:text-[30px] text-[18px] font-normal text-center '>Never miss a beat when it comes to the<br/> latest tech events that matter to you.</h1>
                        <div className=' mt-20 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 18C2.25 22.1772 3.90937 26.1832 6.86307 29.1369C9.81677 32.0906 13.8228 33.75 18 33.75C22.1772 33.75 26.1832 32.0906 29.1369 29.1369C32.0906 26.1832 33.75 22.1772 33.75 18C33.75 13.8228 32.0906 9.81677 29.1369 6.86307C26.1832 3.90937 22.1772 2.25 18 2.25C13.8228 2.25 9.81677 3.90937 6.86307 6.86307C3.90937 9.81677 2.25 13.8228 2.25 18ZM36 18C36 22.7739 34.1036 27.3523 30.7279 30.7279C27.3523 34.1036 22.7739 36 18 36C13.2261 36 8.64773 34.1036 5.27208 30.7279C1.89642 27.3523 0 22.7739 0 18C0 13.2261 1.89642 8.64773 5.27208 5.27208C8.64773 1.89642 13.2261 0 18 0C22.7739 0 27.3523 1.89642 30.7279 5.27208C34.1036 8.64773 36 13.2261 36 18ZM19.125 10.125C19.125 9.82663 19.0065 9.54048 18.7955 9.3295C18.5845 9.11853 18.2984 9 18 9C17.7016 9 17.4155 9.11853 17.2045 9.3295C16.9935 9.54048 16.875 9.82663 16.875 10.125V23.1593L12.0465 18.3285C11.8353 18.1173 11.5487 17.9986 11.25 17.9986C10.9513 17.9986 10.6647 18.1173 10.4535 18.3285C10.2423 18.5397 10.1236 18.8263 10.1236 19.125C10.1236 19.4237 10.2423 19.7103 10.4535 19.9215L17.2035 26.6715C17.308 26.7763 17.4321 26.8594 17.5688 26.9161C17.7055 26.9728 17.852 27.002 18 27.002C18.148 27.002 18.2945 26.9728 18.4312 26.9161C18.5679 26.8594 18.692 26.7763 18.7965 26.6715L25.5465 19.9215C25.7577 19.7103 25.8764 19.4237 25.8764 19.125C25.8764 18.8263 25.7577 18.5397 25.5465 18.3285C25.3353 18.1173 25.0487 17.9986 24.75 17.9986C24.4513 17.9986 24.1647 18.1173 23.9535 18.3285L19.125 23.1593V10.125Z" fill="white"/>
                            </svg>
                        </div>
        <form onSubmit={handleSubmit(onHandleFormSubmit)} className='flex flex-col w-11/12 md:w-full justify-center items-center md:mt-20 mt-10'>
            <p className=' text-[#fff] font-normal md:text-[18px] text-[15px]'>Select as many subjects that matter to you and enter your email</p>
                <div className='flex flex-col justify-center items-center mt-5 gap-5'>           
                <div className=' flex flex-wrap gap-y-4 gap-x-2 md:w-10/12'>
                  {programOptions.map((program, index) => (
    
                      <div className="block relative py-[10px] md:px-[30px] px-[40px]  gap-2 md:gap-4 
                                                       rounded-lg border-[0.4px] border-[#656565] w-fit" key={index}>
                                                          <label className=" md:text-base text-sm font-normal text-black flex ">
                                                           <input 
                                                               type="radio"  
                                                               className=" outline-none opacity-0 w-[0px] h-[0px] absolute cursor-pointer " 
                                                               {...register('programs', { setValueAs: (value: string) => value })}
                                                               value={program}
                                                               onChange={(e) => (() => ({ programs: e.target.value }))}
                                                           />
                                                           <span className="checkmark cursor-pointer absolute top-[13px] left-2  h-[17px] w-[17px] border border-[#fff] rounded-[50px]"></span>
                                                               <span className=" text-white ml-2">{program}</span>
                                                           </label>
                                                       </div>))}
                </div>
            </div>
            <div className='flex md:flex-row flex-col mt-10 md:gap-10 gap-4'>
                <button className='rounded-md bg-[#D11F26] text-white text-sm py-4 md:px-6 px-2'>Notify me</button>
                <input className=' rounded-md bg-transparent py-4 px-6 w-[288px] border outline-none border-[#FCEDE8] text-sm capitalize font-light'  type='email' placeholder='Enter Your Email' />
            </div>
        </form>
    </div>
    <div ref={targetRef} className='bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),rgba(209,31,38,0.5)_0%,rgba(209,31,38,0)_100%)] flex absolute before:inset-0 before:z-0  blur-[87px] w-8/12 h-[550px] rounded-[456px] -z-50'/>
    </motion.div>
    </motion.section>
    </>
    )
}