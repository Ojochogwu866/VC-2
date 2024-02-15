import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';

interface CardProps {
    image: string;
    title: string;
    hoverImage: string; // Add hoverImage prop
}

const Services: React.FC<CardProps> = ({ image, title, hoverImage }) => {
    const [isHovered, setIsHovered] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    const handleMouseEnter = () => {
        gsap.to(imageRef.current, { scale: 1.2, duration: 0.3 });
        gsap.to(textRef.current, { scale: 1.1, duration: 0.3 });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, { scale: 1, duration: 0.5 });
        gsap.to(textRef.current, { scale: 1, duration: 0.5 });
        setIsHovered(false);
    };

    return (
        <div
            className={`max-w-[330px] min-w-[300px] h-[340px] bg-[${isHovered ? '#02AD4D' : '#383838'}] justify-center items-center flex flex-col text-sm relative`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                className="w-[124px] h-[124px] transition  duration-300 ease-in-out"
                src={isHovered ? hoverImage : image}
                alt=""
                ref={imageRef}
            />
            <p className="text-lg text-white mt-2" ref={textRef}>{title}</p>
        </div>
    );
};

export default Services;



