import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/shared/Card';

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

const Recommendations = () => {
  const gradientColors = [
    'linear-gradient(162deg, #51FF77 0%, #087F87 100%)',
    'var(--Second-Gradient, linear-gradient(162deg, #5162FF 0%, #413DEB 100%))',
    'linear-gradient(162deg, #FF7B51 0%, #C51051 100%)',
  ];

  const [width, setWidth] = useState(0);
  const [randomEvents, setRandomEvents] =useState<Event[]>([]);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (targetRef.current) {
        setWidth(targetRef.current.scrollWidth - targetRef.current.offsetWidth ?? 0);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    const fetchRandomEvents = async () => {
      try {
        const response = await fetch('https://nxen-api.onrender.com/api/v1/events/');
        const data = await response.json();
        setRandomEvents(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching random events:', error);
      }
    };
    fetchRandomEvents();

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const getRandomGradient = () => {
    const currentIndex = Math.floor(Math.random() * gradientColors.length);
    return gradientColors[currentIndex];
  };

  return (
    <section className='flex flex-col md:p-[80px] p-[20px] py-20 bg-black'>
      <div className=''>
        <p className='text-[#9F9FA2] md:text-[16px] text-[14px] flex items-center gap-2 tracking-[3.2px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
            <path d="M0 1H20" stroke="#9F9FA2" />
          </svg>
          WATCH LIST
        </p>
        <h1 className='md:text-[44px] text-[30px] mt-4 font-semibold text-[#fff]'>You may also like</h1>
      </div>
      <motion.div ref={targetRef} whileTap={{ cursor: 'grabbing' }} className='mt-[50px] cursor-grab sticky md:relative overflow-hidden'>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="grid-cols-3 lg:grid flex items-center md:gap-x-[55px] gap-4 md:gap-y-[100px]">
          {randomEvents.map((event, index) => (
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
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Recommendations;
