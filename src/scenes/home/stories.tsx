import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { client } from '@/shared/client';

type PostType = {
  category: string;
  reactions: string;
  body: string;
  likes: string;
  date: string;
  time: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
};

const Stories = () => {
  const [randomStory, setRandomStory] = useState<PostType | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
                category,
                reactions,
                likes,
                date,
                time,
                title,
                slug,
                mainImage {
                    asset->{
                        url
                    }
                }
            }`
      )
      .then((data: PostType[]) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomPost = data[randomIndex];
        setRandomStory(randomPost);
      })
      .catch(console.error);
  }, []);

  return (
    <motion.section className='mt-7 flex flex-col justify-center items-center'>
      <div className='bg-stories bg-center object-cover bg-cover h-[552px] w-full flex justify-center items-center'>
        <div className='flex justify-center items-center md:gap-6 gap-2'>
          <p className='text-center font-medium text-base text-white leading-7'>Ralph Waldo Emerson</p>
          <svg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='70' height='70' fill='#02AD4D' />
            <path d='M37.6566 31.232C37.6566 41.6127 44.5771 49.6454 54.4635 50.8812V44.9494C49.1495 43.9607 45.3186 40.6241 45.3186 36.2988C46.3072 36.6695 47.4194 36.9167 48.7788 36.9167C53.2277 36.9167 56.8115 33.8271 56.8115 28.3896C56.8115 22.9521 53.1041 19.1211 47.6666 19.1211C41.8583 19.1211 37.6566 23.8171 37.6566 31.232ZM13.1877 31.232C13.1877 41.6127 20.1082 49.6454 29.9946 50.8812V44.9494C24.6807 43.9607 20.9733 40.6241 20.9733 36.2988C21.9619 36.6695 23.0741 36.9167 24.4335 36.9167C28.8824 36.9167 32.3426 33.8271 32.3426 28.3896C32.3426 22.9521 28.6352 19.1211 23.1977 19.1211C17.3894 19.1211 13.1877 23.8171 13.1877 31.232Z' fill='white' />
          </svg>
          <p className='md:text-[38px] text-[20px] leading-[25px] md:leading-[51px] font-medium text-white'>
            The First Wealth is Health
          </p>
        </div>
      </div>
      {randomStory && (
        <div className='after:bg-card fm:min-w-[11/12] min-w-[320px] max-w-[639px] md:w-[639px] md:h-[836px] h-[636px] pt-20 md:pt-0 bg-cardBg bg-no-repeat bg-center -mt-[200px] relative flex flex-col md:justify-center justify-start md:items-center items-center'>
          <div className='w-full h-1/2 bg-card shadow-card absolute bottom-0' />
          <div className='flex flex-col justify-center items-center'>
            <p className='text-white text-sm font-medium'>11 Minutes Read</p>
            <h1 className='font-bold mt-2 md:mt-5 md:text-[72px] text-white leading-[97px]'>{randomStory.title}</h1>
            <img src={randomStory.mainImage.asset.url} alt={randomStory.title} className='mt-4 h-48 w-auto object-cover' />
          </div>
          <div className='w-full h-[280px] bg-[#373736] flex justify-center items-center flex-col absolute bottom-0 -mt-4'>
            <p className='w-4/5 mx-auto flex text-center text-white text-base font-[Satoshi-Regular]'>Our virtues and values uphold the health of our patients, and doing everything possible to give them the best care and ensure they receive maximal and adequate service.</p>
            <div className='flex gap-4 justify-center items-center mt-4 '>
              <Link to='' className='md:py-[20px] md:px-[20px] py-[10px] px-[10px] rounded-[15px] text-sm md:text-base text-white bg-[#02AD4D]'>
                Read the Story
              </Link>
              <Link to='' className='border-[#02714D] border-[2px] md:py-[20px] md:px-[20px] py-[10px] px-[10px] rounded-[15px] text-sm text-white md:text-base'>
                See More Stories
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Stories;
