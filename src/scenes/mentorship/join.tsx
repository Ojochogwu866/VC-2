
type Item = {
    id:number,
    list: string,
}

const Home = () => {
const item: Item[] = [
    {id: 1, list: 'Passionate about mentoring and aligned with the program’s mission'},
    {id: 2, list:'At least 5 years of experience working as an industry professional or researcher in Data Science, Artificial Intelligence or Machine Learning'},
    {id: 3, list: 'Proficient in R or Python'},
    {id: 4, list:'Committed for the duration of the program (15 weeks)'},
    {id: 5, list:'Able to participate in weekly check-ins'},
    {id: 6, list: 'Able to provide guidance for mentee goals and projects'},
    {id: 7, list: 'Committed to engage with broader community'},
    {id: 8, list: '(Optional) Able to lead career and/or educational seminars'}
]

const menteeList: Item[] = [
    {id: 1, list: 'Passionate about mentoring and aligned with the program’s mission'},
    {id: 2, list:'At least 5 years of experience working as an industry'},
    {id: 3, list: 'Intelligence or Machine Learning'},
    {id: 4, list:'Proficient in R or Python '},
    {id: 5, list:'Committed for the duration of the program (15 weeks)'},
]

return (
    <section className=' md:p-[80px] p-[20px] '>
        <div className=' md:w-[70%] mx-auto'>
            <h1 className=' md:text-[44px] text-[30px] text-[#000] font-semibold'>Mentor Eligibility and Criteria</h1>
            <div className="">
            </div>
            <ul className=' space-y-4 md:space-y-6 mt-8 md:text-[16px] text-[14px]'>
        {item.map((item) => (
                <li className='flex items-center' key={item.id}>
                    <svg className="flex absolute w-[21px] h-[21px] md:w-[35px] md:h-[35px]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M25 13L15 23L10 18M34 17.5C34 26.6127 26.6127 34 17.5 34C8.3873 34 1 26.6127 1 17.5C1 8.3873 8.3873 1 17.5 1C26.6127 1 34 8.3873 34 17.5Z" stroke="#4A5AE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                    <span className="md:ml-16 ml-10">{item.list}</span></li>
        ))}
            </ul>
        </div>
        
        <div className=" relative bg-cardbg mt-10 w-full rounded-[15px] p-[80px] flex flex-col md:flex-row justify-between items-center">
             <div className='absolute w-full'>
         <svg className=' w-full flex justify-end' height="86" viewBox="0 0 810 86" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.05" d="M390.005 -1172H833L442.995 86H0L390.005 -1172Z" fill="white"/>
</svg>  
            <svg className=' w-full flex justify-end sx:h-full' xmlns="http://www.w3.org/2000/svg"  height="749" viewBox="0 0 1124 749" fill="none">
                <path opacity="0.05" d="M586.178 -48H1124L549.5 1695H0L586.178 -48Z" fill="white"/>
            </svg>
            </div>
        <div className='z-30'>
            <h1 className='  md:text-[44px] text-[30px] font-semibold text-white'>Apply to become a <br className=" hidden md:flex"/>Mentor</h1>
            <p className=' text-[#cfcfd1] font-normal text-[16px] md:mt-0 mt-4'>We are looking for volunteers</p>
        </div>
        <button className=" px-[34px] py-[16px] rounded-[8px] bg-white text-cardbg cursor-pointer text-sm mt-4 z-30 ">Join Now</button>
        <svg className=' absolute mt-[250px] w-full flex justify-end right-[5%] md:right-0 lg:ml-10' xmlns="http://www.w3.org/2000/svg" width="833" height="107" viewBox="0 0 833 107" fill="none">
  <path opacity="0.05" d="M390.005 0H833L442.995 1258H0L390.005 0Z" fill="white"/>
</svg>
    </div>
        <div className=' md:w-[70%] mx-auto mt-10'>
            <h1 className='  md:text-[44px] text-[30px] text-[#000] font-semibold'>Mentee Eligibility</h1>
            
              <ul className=' space-y-4 md:space-y-6 mt-8 md:text-[16px] text-[14px]'>
        {menteeList.map((menteeList) => (
                 <li className='flex items-center' key={menteeList.id}>
                    <svg  className="flex absolute w-[21px] h-[21px] md:w-[35px] md:h-[35px]"  xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M25 13L15 23L10 18M34 17.5C34 26.6127 26.6127 34 17.5 34C8.3873 34 1 26.6127 1 17.5C1 8.3873 8.3873 1 17.5 1C26.6127 1 34 8.3873 34 17.5Z" stroke="#18A88E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <span className="md:ml-16 ml-10">{menteeList.list}</span></li>
        ))}
            </ul>
        </div>
        <div className=" relative bg-[#18A88E] mt-10 w-full rounded-[15px] p-[80px] flex flex-col md:flex-row justify-between items-center">
           <div className='absolute w-full'>
         <svg className=' w-full flex justify-end' height="86" viewBox="0 0 810 86" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.05" d="M390.005 -1172H833L442.995 86H0L390.005 -1172Z" fill="white"/>
</svg>  
            <svg className=' w-full flex justify-end sx:h-full' xmlns="http://www.w3.org/2000/svg"  height="749" viewBox="0 0 1124 749" fill="none">
                <path opacity="0.05" d="M586.178 -48H1124L549.5 1695H0L586.178 -48Z" fill="white"/>
            </svg>
            </div>    
        <div className='z-30'>
            <h1 className=' md:text-[44px] text-[30px] font-semibold text-white'>Apply to become a <br/>Mentee</h1>
            <p className=' text-[#cfcfd1] font-normal text-[16px] md:mt-0 mt-4'>As a mentee you will have an opportunity to grow your data<br/> science skills</p>
        </div>
        <button className=" px-[34px] py-[16px] rounded-[8px] mt-4 bg-white text-[#18a88e] text-sm z-30">Join Now</button>
        <svg className=' absolute mt-[250px] w-full flex justify-end right-[5%] md:right-0 lg:ml-10' xmlns="http://www.w3.org/2000/svg" width="833" height="107" viewBox="0 0 833 107" fill="none">
  <path opacity="0.05" d="M390.005 0H833L442.995 1258H0L390.005 0Z" fill="white"/>
</svg>
    </div>
    </section>
    )
}
export default Home