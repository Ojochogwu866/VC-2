import { useEffect, useRef, useState } from 'react';
import Slide1 from '@/assets/Resources/slide-1.png';
import Slide2 from '@/assets/Resources/slide-2.png';
import Slide3 from '@/assets/Resources/slide-3.png';
import styles from '@/styles/styles';
import gsap from 'gsap';

const Hero = () => {
  const slideRef = useRef<HTMLImageElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [heroScrollComplete, setHeroScrollComplete] = useState(false);

  const testimonials = [
    {
      name: 'Fatima Abubakar',
      comment: 'I put my complete trust in the medical specialist and service deliver at Vinca.'
    },
    {
      name: 'Godswill Idako',
      comment: "It’s not every day that you enter a hospital that truly cares about you and not your money."
    },
    {
      name: 'Frank Obidi',
      comment: 'Vinca and the people there are the absolute best at what they do!'
    }
  ];

  useEffect(() => {
    const images = [Slide1, Slide2, Slide3];
    let currentIndex = 0;

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % images.length;
      gsap.to(slideRef.current, { opacity: 0.8, duration: 0.6, onComplete: () => {
        slideRef.current!.src = images[currentIndex];
        gsap.to(slideRef.current, { opacity: 1, duration: 0.6 });
      } });

      gsap.to(testimonialRefs.current[currentTestimonialIndex], {
        y: '20%',
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          setCurrentTestimonialIndex(currentIndex);
          gsap.fromTo(
            testimonialRefs.current[currentIndex]!,
            { y: '-10%', opacity: 0 },
            { y: '0%', opacity: 0.8, duration: 0.2 }
          );
        }
      });

      if (!heroScrollComplete && currentIndex === images.length - 1) {
        setHeroScrollComplete(true);
      }
    };
    const intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTestimonialIndex, heroScrollComplete]);

  return (
    <section className='flex flex-col'>
      <div className='h-[800px] w-full relative flex justify-center items-center'>
        <img ref={slideRef} src={Slide1} alt="hero-image" className='w-full h-full bg-center bg-cover object-cover'/>
        <div  
          className='max-w-[400px] rounded-[24px] absolute h-[124px] bg-[#02AD4D] bg-opacity-20 p-2'>
          {testimonials.map((testimonial, index) => (
          <div ref={ref => (testimonialRefs.current[index] = ref)}  
          style={{
                display: index === currentTestimonialIndex ? 'flex' : 'none',
                transform: index === currentTestimonialIndex ? 'translateY(0)' : 'translateY(-100%)',
                opacity: index === currentTestimonialIndex ? 1 : 0,
              }} 
              key={index}  className=' bg-white w-full h-full rounded-[24px] flex flex-col px-10 justify-center items-center'>
                <p className=' text-base font-bold text-[#02AD4D] text-center'>{testimonial.name}</p>
                <p className=' text-center font-[300] text-sm mt-2 leading-6 text-black'>{testimonial.comment}</p>
          </div>
            ))}
        </div>
        <div className=' w-[134px] h-[65px] bg-[#02AD4D] absolute py-[13px] bottom-4 px-4 flex flex-col justify-center items-center rounded-[16px]'>
          <div className=' flex gap-[5px]'>
            <div className=' w-[9px] h-[9px] bg-white rounded-full'/>
            <div className=' w-[9px] h-[9px] bg-white rounded-full'/>
            <div className=' w-[9px] h-[9px] bg-white rounded-full'/>
            <div className=' w-[9px] h-[9px] bg-white rounded-full'/>
            <div className=' w-[9px] h-[9px] bg-white rounded-full'/>
            <div className=' w-[9px] h-[9px] bg-white rounded-full'/>
            <div className=' w-[9px] h-[9px] bg-white rounded-full'/>
          </div>
          <span className=' text-sm text-white mt-2'>Fertility Clinic</span>
        </div>
      </div>
      <div className='mt-20 flex justify-center items-center'>
        <div className='min-w-[426px] w-[426px] h-[562px] bg-white shadow-form p-10 rounded-3xl flex justify-start items-center'>
          <form className='flex flex-col'>
            <h1 className='font-bold text-[#013919] text-[20px]'>Book Appointment Now</h1>
            <div className='flex flex-col mt-[35px]'>
              <label className='text-sm font-medium text-[#2F4E44] pr-2 gap-2 leading-[18px]'><input className='mr-2' type='radio'/>Book with Phone Number</label>
              <label className='text-sm font-medium text-[#2F4E44] pr-2 gap-2 leading-[18px]'><input className='mr-2 mt-3' type='radio'/>Book with Email</label>
            </div>
            <div className='mt-[26px]'>
              <input className={`${styles.formInput}`} placeholder='Full Name' />
              <select title='select' className={`${styles.formInput}`}>
                <option value="" disabled>Select Department</option>
              </select>
              <input type='date' className={`${styles.formInput}`} placeholder='Date' />
              <input className={`${styles.formInput}`} placeholder='Phone No_' />
            </div>
            <button className='bg-[#02AD4D] h-[52px] w-full rounded-[15px] text-white flex justify-center items-center text-base mt-[41px]'>
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

