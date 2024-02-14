import { CardInterface } from "./types"
import { motion } from 'framer-motion'

const Card = ({title, content} : CardInterface) => { 
  return (
  <motion.div  
  className='card min-w-[320px] max-w-[360px] h-[480px]  relative bg-[#02AD4D] p-[40px]'>
      <div className=" w-full h-full flex flex-col items-start">
        <p className=" font-[Satoshi-Medium] leading-7 font-normal text-base text-white">{content}</p>
        <h1 className="props h-full flex bottom-0 justify-end items-end font-normal text-[60px] text-white leading-[64px]">{title}</h1>
      </div>
  </motion.div>
  )
}
export default Card
