import PageInfo from './pageinfo'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Home = () => {
    const { eventId } = useParams();
    const [eventDetails, setEventDetails] = useState({
    _id:'',
    title: '',
    description: '',
    date:''
  });

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`https://nxen-api.onrender.com/api/v1/events/${eventId}`);
        const data = await response.json();

        // Log the response and data for debugging
        console.log('API Response:', response);
        console.log('Fetched Event Details:', data);

        setEventDetails(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  return (
  <section className=' flex flex-col'>
  <div className='gap-16  md:px-[80px] px-[20px] bg-[#0f1017] flex justify-between items-center h-auto md:pb-0'>
    {/*Title Text Component*/}
    <div className=' py-44'>
    <p className=' text-[#9F9FA2] md:text-[16px] text-[14px] flex items-center gap-2 tracking-[3.2px]' > 
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.9751 15.0586L2.91676 10.0003L7.9751 4.94193" stroke="#9F9FA2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.0835 10L3.0585 10" stroke="#9F9FA2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
                    GO BACK
                </p>
        <div className='flex'>
          <div className=''>
    <h1 className=' font-semibold md:text-[70px] text-[38px] fm:text-[44px] fm:leading-[54px] md:leading-[80px] leading-[48px] text-white  flex mt-[30px]'>
    NextGen Hub: {eventDetails?.title}
    </h1>
    <p className='text-neutral-300 font-normal leading-7  text-[14px] sm:leading-[34px] sm:text-base md:leading-[34px] mt-10'> {eventDetails?.description}</p>
        </div>
        <div className=''>
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4884 2.03434C14.5674 2.03513 14.648 2.04994 14.7195 2.07927C14.8656 2.13469 14.9816 2.24252 15.0447 2.37615C15.1071 2.50982 15.11 2.66048 15.0545 2.79811C15.0545 2.79811 14.9566 3.60992 14.6338 4.93883C13.5932 9.24063 11.8696 13.3816 9.5204 17.2318L8.514 18.7357C8.48754 18.8044 8.44554 18.8686 8.38828 18.9221C8.33371 18.976 8.26918 19.0189 8.19456 19.0484C8.12063 19.0784 8.04253 19.0941 7.96029 19.0959C7.88121 19.0951 7.80063 19.0803 7.72915 19.051C6.7589 18.7057 8.52519 13.3954 8.87185 12.4681C9.43749 10.9232 10.8116 7.61762 11.6016 6.16019C12.3073 4.87018 13.0878 3.61174 13.9346 2.39455C13.9611 2.32581 14.0031 2.26166 14.0604 2.20819C14.1149 2.15426 14.1795 2.11136 14.2541 2.08189C14.328 2.05245 14.4068 2.03614 14.4884 2.03434Z" fill="white"/>
          <path d="M27.2341 25.5127C27.2483 25.5905 27.249 25.6724 27.2338 25.7482C27.207 25.9021 27.1232 26.0365 27.0039 26.1237C26.8845 26.2104 26.7371 26.2418 26.5914 26.2134C26.5914 26.2134 25.7758 26.2712 24.4098 26.2061C19.9887 25.9998 15.5962 25.0924 11.3704 23.5155L9.70305 22.8124C9.63055 22.7995 9.55954 22.7704 9.49619 22.7243C9.4329 22.681 9.37854 22.6257 9.33545 22.5581C9.29194 22.4912 9.26181 22.4174 9.24442 22.337C9.2302 22.2592 9.22946 22.1773 9.24472 22.1016C9.39984 21.0835 14.9486 21.8112 15.9249 21.9758C17.5489 22.2383 21.0551 22.961 22.6358 23.4604C24.0362 23.9087 25.4198 24.4366 26.7754 25.0373C26.8479 25.0503 26.9189 25.0794 26.9822 25.1255C27.0455 25.1688 27.0999 25.224 27.143 25.2917C27.1859 25.3588 27.2168 25.433 27.2341 25.5127Z" fill="white"/>
          <path d="M24.8565 10.7038C24.9199 10.7511 24.9763 10.8105 25.0167 10.8764C25.102 11.0073 25.1322 11.1628 25.1043 11.3079C25.076 11.4527 24.9895 11.5761 24.8635 11.6545C24.8635 11.6545 24.3059 12.2525 23.2617 13.1357C19.8851 15.9969 16.0516 18.3256 11.8841 20.0506L10.1846 20.672C10.1227 20.7119 10.051 20.739 9.97318 20.7484C9.89731 20.7598 9.81989 20.7564 9.74224 20.7362C9.66482 20.7169 9.59253 20.6835 9.52502 20.6365C9.46161 20.5892 9.40525 20.5298 9.3648 20.4639C8.78466 19.613 13.342 16.365 14.1687 15.8204C15.5363 14.906 18.5951 13.0461 20.0924 12.3346C21.4229 11.7086 22.7953 11.1523 24.1969 10.6683C24.2588 10.6284 24.3305 10.6014 24.4083 10.5919C24.4842 10.5805 24.5616 10.5839 24.6393 10.6041C24.7164 10.624 24.7896 10.6572 24.8565 10.7038Z" fill="white"/>
        </svg>
        </div>
    </div>
        <div className=" flex gap-8 mt-10 w-full">
        <Link to={`/event/register-event/${eventDetails?._id}`}className=" md:px-[34px] px-[10px] py-[16px] rounded-[8px] bg-transparent border text-white text-sm sm:text-base flex gap-2">Register Now
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5249 4.94141L17.5832 9.99974L12.5249 15.0581" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.4165 10H17.4415" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </Link>
        <button className=" md:px-[34px] px-[10px] py-[16px] rounded-[38px] bg-[#4a4a4a] text-white text-sm sm:text-base">{eventDetails?.date}</button>
        </div>
        </div>
    </div>
    <PageInfo/>
    </section>
    )
}
export default Home