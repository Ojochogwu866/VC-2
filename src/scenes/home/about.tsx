 import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Slide1 from '@/assets/Resources/slide1.png';
import Card from '@/shared/Card';


const About = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (galleryRef.current) {
      const galleryWidth = galleryRef.current?.scrollWidth || 0;
      const amountToScroll = galleryWidth - window.innerWidth;

      const autoScroll = gsap.to(galleryRef.current, {
        x: `-=${amountToScroll}`,
        duration: 20,
        ease: 'linear',
        repeat: -1,
        paused: false
      });

      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: 'top center',
        onEnter: () => {
          autoScroll.play(); 
        },
        onLeaveBack: () => {
          autoScroll.reverse(); 
        }
      });
    }
  }, []);

   return (
    <section className=" mt-[160px]">
        <div className=" bg-[url(@/assets/Resources/about.svg)] w-full h-[961px] bg-center bg-cover pt-[118px] flex flex-col justify-start items-center">
            <div className=" flex flex-col justify-center items-center">
                <div>
                    <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5005 30.8665L31.1175 22.2495L28.1015 19.2335L24.6547 22.6803V13.6325H20.3462V22.6803L16.8994 19.2335L13.8835 22.2495L22.5005 30.8665ZM22.5005 43.7919C19.5204 43.7919 16.7199 43.2265 14.0989 42.0955C11.4779 40.9645 9.198 39.4296 7.25918 37.4908C5.32036 35.552 3.78546 33.272 2.65448 30.6511C1.5235 28.0301 0.958008 25.2295 0.958008 22.2495C0.958008 19.2694 1.5235 16.4689 2.65448 13.8479C3.78546 11.2269 5.32036 8.94702 7.25918 7.0082C9.198 5.06938 11.4779 3.53448 14.0989 2.4035C16.7199 1.27252 19.5204 0.707031 22.5005 0.707031C25.4805 0.707031 28.281 1.27252 30.902 2.4035C33.523 3.53448 35.8029 5.06938 37.7418 7.0082C39.6806 8.94702 41.2155 11.2269 42.3465 13.8479C43.4774 16.4689 44.0429 19.2694 44.0429 22.2495C44.0429 25.2295 43.4774 28.0301 42.3465 30.6511C41.2155 33.272 39.6806 35.552 37.7418 37.4908C35.8029 39.4296 33.523 40.9645 30.902 42.0955C28.281 43.2265 25.4805 43.7919 22.5005 43.7919ZM22.5005 39.4835C27.3116 39.4835 31.3867 37.8139 34.7258 34.4748C38.0649 31.1358 39.7344 27.0606 39.7344 22.2495C39.7344 17.4383 38.0649 13.3632 34.7258 10.0241C31.3867 6.68506 27.3116 5.01552 22.5005 5.01552C17.6893 5.01552 13.6142 6.68506 10.2751 10.0241C6.93604 13.3632 5.2665 17.4383 5.2665 22.2495C5.2665 27.0606 6.93604 31.1358 10.2751 34.4748C13.6142 37.8139 17.6893 39.4835 22.5005 39.4835Z" fill="white"/>
                    </svg>
                </div>
                <p className=" text-[20px] text-white font-normal mt-2">keep Scrolling</p>
            </div>
            <div className=" flex justify-center flex-col items-center">
                <h1 className=" text-white font-bold md:text-[227px] mx-auto">About Us</h1>
                <p className=" md:w-2/4 text-center font-[Satoshi-Bold] text-[24px] leading-[33px] text-white">
                    Our virtues and values uphold the health of our patients, and doing everything possible to give them the best care and ensure they recieve maximal and adequate service .
                </p>
            </div>
        </div>
        <div className=" w-full h-[691px] flex flex-col justify-center  bg-[#383838]  -mt-2">
            <div className=" flex gap-[38px] justify-start items-center">
            <Card
                title="Care Approach"
                content="Our virtues and values uphold the health of our patients, and doing everything possible to give them the best care and ensure they receive maximal and adequate service."
            />

              <div  
                className='card min-w-[320px] max-w-[360px] h-[480px]  relative bg-[#02AD4D] p-[40px]'>
                    <div className=" w-full h-full flex flex-col items-start">
                        <ul className=' font-[Satoshi-Medium]'>
                            <li className=" text-base font-normal text-white">• Excellence in Expertise</li>
                            <li className=" text-base font-normal text-white"> • Patient-Centric Care</li>
                            <li className=" text-base font-normal text-white">• Virtues-Driven Healthcare</li>
                            <li className=" text-base font-normal text-white">• Personalised Care</li>
                            <li className=" text-base font-normal text-white"> • Adequate Service Delivery</li>
                        </ul>
                        <h1 className="props h-full flex bottom-0 justify-end items-end font-normal text-[60px] text-white leading-[64px]">Core Values</h1>
                    </div>
                </div>
             <Card
                title="Purpose"
                content="Through continuous learning, virtuous principles, and a patient-first approach, we aim to be the trusted healthcare partner, ensuring each individual receives the highest quality of care, support, and expertise on their journey to optimal health."
            />
             <Card
                title="Vision"
                content="To be the forefront of transformative healthcare, redefining medical excellence and patient outcomes"
            />
             <Card
                title="Mission"
                content="Guided by a commitment to excellence, compassion, and innovation, we strive to empower individuals on their journey to optimal health. "
            />
            </div>
            <div className=" mt-8 flex gap-4 px-[100px]">
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="1.76367" width="47" height="47" rx="23.5" stroke="white" stroke-width="3"/>
                    <path d="M29.647 16.9697L21.353 25.2637L29.647 33.5576" stroke="white" stroke-width="2.76464" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.263672" width="50" height="50" rx="25" fill="#515151"/>
                    <path d="M21.353 33.5576L29.647 25.2637L21.353 16.9698" stroke="white" stroke-width="2.76464" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div ref={galleryRef} className="flex w-full ">
                <img className=" h-[700px] w-fit object-cover" src={Slide1} alt=""/>
                <img className=" h-[700px] w-fit object-cover" src={Slide1} alt=""/>               
        </div>
    </section>
  )
}

export default About;