import React, { useState } from 'react'
import Post from '@/shared/Post'
import Chair from '@/assets/Resources/chair.png'
import Girl from '@/assets/Resources/girl.png'
import Twins from '@/assets/Resources/Twins.png'
import Woman from '@/assets/Resources/pregnant.png'

type PostType = {
  category: string;
  reactions: string;
  likes: string;
  date: string;
  time: string;
  title: string;
  slug: string;
  image: string;
};

const Home = () => {
     const [selectedCategory, setSelectedCategory] = useState('All');
    const [displayedPosts, setDisplayedPosts] = useState<PostType[]>([]);

    const posts: PostType[] = [
      {
        category: 'In-vitro fertilization',
        reactions: '11',
        likes: '10',
        date: 'February 2, 2024',
        time: '4:15 pm',
        title: 'Having Twins, My Dream',
        slug: 'Through continuous learning, virtuous principles, and a patient-first approach, we aim to be the trusted healthcare partner, ensuring each individual receives the highest quality of care, support, and expertise on their journey to optimal',
        image: Twins,
      },
      {
        category: 'Cardiothoracic Surgery',
        reactions: '9',
        likes: '8',
        date: 'February 3, 2024',
        time: '2:30 pm',
        title: 'Patient X undergoes successful heart surgery',
        slug: 'Patient X, a 60-year-old man, underwent a complex heart surgery yesterday...',
        image: Girl,
    },
          {
        category: 'Dental Care',
        reactions: '11',
        likes: '10',
        date: 'February 2, 2024',
        time: '4:15 pm',
        title: 'Mr. Olumede’s smile is a bright as the sun',
        slug: 'Through continuous learning, virtuous principles, and a patient-first approach, we aim to be the trusted healthcare partner, ensuring each individual receives the highest quality of care, support, and expertise on their journey to optimal.',
        image: Chair,
      },
      {
        category: 'In-vitro fertilization',
        reactions: '9',
        likes: '8',
        date: 'February 3, 2024',
        time: '2:30 pm',
        title: 'My Miracle after 12 years of trying',
        slug: 'Through continuous learning, virtuous principles, and a patient-first approach, we aim to be the trusted healthcare partner, ensuring each individual receives the highest quality of care, support, and expertise on their journey to optimal.',
        image: Woman,
    },
          {
        category: 'Dental Care',
        reactions: '11',
        likes: '10',
        date: 'February 2, 2024',
        time: '4:15 pm',
        title: 'Mr. Olumede’s smile is a bright as the sun',
        slug: 'Through continuous learning, virtuous principles, and a patient-first approach, we aim to be the trusted healthcare partner, ensuring each individual receives the highest quality of care, support, and expertise on their journey to optimal.',
        image: Chair,
      },
      {
        category: 'Cardiothoracic Surgery',
        reactions: '9',
        likes: '8',
        date: 'February 3, 2024',
        time: '2:30 pm',
        title: 'Patient X undergoes successful heart surgery',
        slug: 'Patient X, a 60-year-old man, underwent a complex heart surgery yesterday...',
        image: Girl,
    },
  ];

  const categories = [
    'All',
    'Fertility Clinic',
    'In-vitro fertilization',
    'Dental Care',
    'Cardiothoracic Surgery',
    'Oncology Surgery',
    'Vascular Surgery',
  ];

  const filterPosts = () => {
    if (selectedCategory === 'All') {
      return posts.slice(0, 4);
    } else {
      return posts.filter(post => post.category === selectedCategory);
    }
  };

  const loadMorePosts = () => {
    setDisplayedPosts(posts.slice(0, displayedPosts.length + 4));
  };

  React.useEffect(() => {
    setDisplayedPosts(filterPosts());
  }, [selectedCategory]);

  return (
  <section className=' flex flex-col justify-center items-center'>
    <div className="flex flex-col justify-center items-center text-center mt-[150px]">
      <h1 className=" font-[400px] text-[#013919] text-[28px] leading-[28px]">Read Vinca Stories</h1>
      <p className=" text-[48px] text-[#013919] font-black mt-2 text-center">
        Let our patients tell you<br/> their story
      </p>
    </div>
    <div className=' flex flex-col justify-center items-center px-[90px]'>
      <div className="flex gap-4 md:flex-wrap justify-center items-center w-full mb-10 mt-20">
        {categories.map(category => (
          <button className=' text-sm leading-[20px] text-center w-fit border-[1px] rounded-[50px]
          font-normal font-[Arial] px-[17px] py-[10px] border-[#242424] text-[#242424]
           focus:bg-[#02AD4D] active:bg-[#02ad4d] focus:border-[0px] focus:text-white' 
          key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 ">
          {displayedPosts.map((post, index) => (
            <Post
              key={index}
              category={post.category}
              reactions={post.reactions}
              likes={post.likes}
              date={post.date}
              time={post.time}
              title={post.title}
              slug={post.slug}
              image={post.image}
            />
          ))}
          </div>
            <div className=' mt-[70px]'>
              {selectedCategory === 'All' && (
                <button className=' text-sm leading-[20px] text-center w-fit border-[1px] rounded-[50px]
                font-normal font-[Arial] px-[17px] py-[10px] border-[#242424] text-[#242424]' onClick={loadMorePosts}>Load More</button>
              )}
          </div>
    </div>
  </section>
    )
}
export default Home