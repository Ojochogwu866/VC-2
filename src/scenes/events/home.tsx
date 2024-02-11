import Card from '@/shared/Card';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion';
import { Link } from 'react-router-dom';

interface Event {
  _id: string;
  title: string;
  event: string;
  stack: string;
  platform: string;
  date: string;
  location: string;
  imageUrl: string;
}

const Home = () => {
  const [width, setWidth] = useState(0);
  const [events, setEvents] = useState<Event[]>([]);
  const targetRef = useRef<HTMLDivElement>(null);


const gradientColors = [
  'linear-gradient(162deg, #51FF77 0%, #087F87 100%)',
  'var(--Second-Gradient, linear-gradient(162deg, #5162FF 0%, #413DEB 100%))',
  'linear-gradient(162deg, #FF7B51 0%, #C51051 100%)',
];

let currentIndex = 0;

const getRandomGradient = () => {
  const currentGradient = gradientColors[currentIndex];
  currentIndex = (currentIndex + 1) % gradientColors.length; // Cycle to the next index
  return currentGradient;
};

  useEffect(() => {
    if (targetRef.current) {
      setWidth(targetRef.current?.scrollWidth - targetRef.current?.offsetWidth ?? 0);
    }

    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://nxen-api.onrender.com/api/v1/events/');
        const data = await response.json();
        setEvents(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

   const latestEvent = events.length > 0 ? events[0] : null;

return (
    <section>
        <div className=" bg-[#0f1017] h-auto md:px-[80px] px-[20px] ">
            <div className=''>
                <p className=' text-[#9F9FA2] md:text-[16px] text-[14px] flex items-center gap-2 tracking-[3.2px] uppercase pt-44' > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
                    <path d="M0 1H20" stroke="#9F9FA2"/>
                    </svg> 
                    LATEST EVENTS
                </p>
                <h1 className=' lg:text-[44px] text-[30px] mt-4 font-semibold text-[#fff]'>Featured Events</h1>
            </div>
            <div className='md:grid grid-cols-2 flex flex-col justify-center items-center gap-4 mt-[80px] event'>
        {events.slice(0, 2).map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 0.9 }}
            transition={{ stiffness: 200 }}
            style={{ backgroundImage: `url(${event.imageUrl})` }}
            className={`after:bg-gradient relative bg-center bg-cover md:h-[635px] h-[400px]`}
          >
            <motion.div
              initial="hidden"
              viewport={{ once: false, amount: 0.3 }}
              whileInView="show"
              className='w-full h-full bg-gradient flex flex-col justify-end items-start px-10 pb-4'
            >
              <motion.span variants={fadeIn("left", "tween", 0.1, 0.4)} className='text-white text-[12px] md:text-[14px]'>{event.date}</motion.span>
              <motion.p variants={fadeIn("up", "tween", 0.1, 0.5)} className='mt-3 text-white md:text-[28px] text-[22px]'>{event.location}<br />{event.title}</motion.p>
              <motion.button variants={fadeIn("up", "tween", 0.1, 0.6)} className='text-white font-normal md:text-[16px] text-[14px] mt-10'><Link to={`/event/${event._id}`}>Read More</Link></motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
            <div className=' pt-[90px] pb-[300px]'>
                <p className='text-[#9F9FA2] md:text-[16px] text-[14px] flex items-center gap-2 tracking-[3.2px] uppercase' > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
                    <path d="M0 1H20" stroke="#9F9FA2"/>
                    </svg>
                    Coming up event
                </p>
                <h1 className=' md:text-[44px] text-[30px] mt-4 font-semibold text-[#fff]'>Upcoming</h1>
            </div>
        </div>
        <div className=' md:px-[80px] px-[20px]  -mt-[200px]'>
        <div className='w-full  md:h-[485px] h-[350px] bg-[#d11f26] rounded-[15px] flex justify-between items-center'>
               <div className="w-1/2 h-full rounded-l-[15px] bg-[url('@/assets/carousel.png')] bg-center"/>
                <div className=" w-1/2 md:py-[114px] md:pl-[70px] pl-[20px]">
                    <span className=' text-white text-[14px]'>{latestEvent?.date}</span>
                    <p className=' lg:text-[38px] text-[16px]  font-normal text-white mt-4'>Join us For Our<br/> Next At {latestEvent?.location}</p>
                    <Link to={`/event/register-event/${latestEvent?._id}`} className=' text-white font-normal gap-2 lg:text-[16px] text-[14px] mt-20 w-full flex items-center'>Register Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 5.82321 0.067725 5.65367 0.188276 5.52866C0.308828 5.40366 0.472331 5.33343 0.642816 5.33343H15.8043L11.7584 1.13935C11.6377 1.01418 11.5699 0.844425 11.5699 0.667415C11.5699 0.490406 11.6377 0.320646 11.7584 0.195481C11.8791 0.0703166 12.0428 4.17049e-09 12.2135 0C12.3842 -4.17049e-09 12.5479 0.0703166 12.6686 0.195481L17.8111 5.52807C17.871 5.58998 17.9185 5.66354 17.9509 5.74452C17.9833 5.82551 18 5.91232 18 6C18 6.08768 17.9833 6.17449 17.9509 6.25548C17.9185 6.33646 17.871 6.41002 17.8111 6.47193L12.6686 11.8045C12.5479 11.9297 12.3842 12 12.2135 12C12.0428 12 11.8791 11.9297 11.7584 11.8045C11.6377 11.6794 11.5699 11.5096 11.5699 11.3326C11.5699 11.1556 11.6377 10.9858 11.7584 10.8607L15.8043 6.66657H0.642816C0.472331 6.66657 0.308828 6.59635 0.188276 6.47134C0.067725 6.34633 0 6.17679 0 6Z" fill="white"/>
                            </svg>
                    </Link>
                </div>
            </div>
            <div className=' pt-[90px]'>
                <p className=' text-[#9F9FA2] md:text-[16px] text-[14px] flex items-center gap-2 tracking-[3.2px]' > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
                    <path d="M0 1H20" stroke="#9F9FA2"/>
                    </svg> 
                    WATCH LIST
                </p>
                
                <h1 className=' md:text-[44px] text-[30px] mt-4 font-semibold text-[#000]'>NEXT MONTH</h1>
                <motion.div ref={targetRef} whileTap={{cursor: "grabbing"}} className='mt-[100px] cursor-grab sticky md:relative overflow-hidden'>
                <motion.div  drag="x" dragConstraints={{right: 0, left: -width}} className=" grid-cols-3 lg:grid flex items-center md:gap-x-[55px] gap-4 md:gap-y-[100px]">
             {events.map((event, index) => (
              <Link to={`/event/register-event/${event._id}`}>
           <Card
              key={index}
              gradientColor={getRandomGradient()}
              title={event.title}
              event={event.event}
              stack={event.stack}
              titleplatform={event.platform}
              titledate={event.date}
              titlelocation={event.location}
            />
            </Link>
          ))}
            </motion.div>
            </motion.div>
            </div>
            <div className='lg:hidden w-full flex justify-end mt-4 '>
                <p className=' text-xs text-black'>Scroll right to view more →</p>
            </div>
            <div className=' py-[100px] flex justify-center items-center'>
            <button className=" px-[34px] py-[16px] rounded-[8px] bg-transparent border border-[#000] text-[#0f1017] uppercase text-sm">See More</button>
            </div>
        </div>
    </section>
    )
}
export default Home