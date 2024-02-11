import { Link } from 'react-router-dom'

const Community = () => {
    return (
  <section className=' flex md:px-[80px] px-[20px]'>
    <div className=" bg-[#151211] w-full rounded-[15px] relative p-[80px] flex 
    flex-col md:flex-row justify-between items-center overflow-hidden">
    <div className='absolute w-full'>
         <svg width="810" height="86" viewBox="0 0 810 86" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.05" d="M390.005 -1172H833L442.995 86H0L390.005 -1172Z" fill="white"/>
</svg>  
            <svg className=' w-full flex justify-end sx:h-full' xmlns="http://www.w3.org/2000/svg"  height="749" viewBox="0 0 1124 749" fill="none">
                <path opacity="0.05" d="M586.178 -48H1124L549.5 1695H0L586.178 -48Z" fill="white"/>
            </svg>
            </div>
        <div className=''>
            <h1 className=' md:text-[44px] text-[30px]  font-semibold text-white'>Ready to Join the <br className='hidden lg:flex'/>Community</h1>
            <p className=' text-[#cfcfd1] font-normal text-[16px] md:mt-0 mt-4'>Build opportunities for future opportunities for products, startups.</p>
        </div>
        <Link to="/community" className=" px-[34px] py-[16px] z-20 cursor-pointer rounded-[8px] bg-[#d11f26] text-white mt-8 md:mt-0 text-sm">Join Now</Link>
        <div className='w-full absolute'>
        <svg className=' mt-[250px] w-full flex justify-end lg:ml-10' xmlns="http://www.w3.org/2000/svg" width="833" height="107" viewBox="0 0 833 107" fill="none">
  <path opacity="0.05" d="M390.005 0H833L442.995 1258H0L390.005 0Z" fill="white"/>
</svg>
</div>
    </div>
  </section>
  )
}
export default Community