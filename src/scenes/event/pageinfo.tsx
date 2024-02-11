import image from '@/assets/section-7.png'

const Home = () => {
  const container = "flex text-start md:w-[70%] w-full mx-auto flex-col"
  const heading = "text-left md:text-[44px] text-[30px] font-semibold text-black"
  const body = "text-left md:text-[17px] font-normal text-[#57585D] md:leading-[34px] text-[14px] leading-[30px] mt-4"

  return (
  <section className =' flex flex-col'>
  <div className='gap-16 py-16 px-[20px] md:px-[80px] mt-auto flex flex-col shrink 
  justify-between items-center h-auto md:pb-0'>
   <div className={`${container}`}>
    <h1 className={`${heading}`}>NextGen Hub: University of Abuja Tech EVent</h1>
    <p className={`${body}`}>
   Explore the world of embedded systems with NextGen Hub's Tech Event at the University of Abuja. Our engaging session, held three months ago, 
   brought together eager learners seeking insights into embedded systems. The event featured illuminating lectures, a dynamic Q&A session, and 
   captivating speakers. It was a remarkable occasion, fostering knowledge exchange and creating a wonderful learning environment. 
   Join us in our mission to empower tech enthusiasts and stay tuned for future events!
    </p>
   </div>
   <div className=''>
    <img src={image} alt='' />
   </div>
   <div className={`${container}`}>
    <h1 className={`${heading}`}>What We Covered</h1>
    <p className={`${body}`}>
    
    </p>
   </div>
   <div className={`${container}`}>
    <h1 className={`${heading}`}>What To Expect</h1>
    <p className={`${body} pb-14`}>

    </p>
   </div>
        </div>
    </section>
    )
}
export default Home