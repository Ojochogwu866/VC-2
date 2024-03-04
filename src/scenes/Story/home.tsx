import  { useState, useEffect } from 'react';
import Post from '@/shared/Post';
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
    current:string;
  },
  mainImage: {
    asset:{
      url:string;
    }
  }
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayedPosts, setDisplayedPosts] = useState<PostType[]>([]);
  const [posts, setPosts] = useState<PostType[]>([]);

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

useEffect(() => {
  client.fetch(
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
  ).then((data: PostType[]) => {
    const formattedData = data.map(post => ({
      ...post,
      image: post.mainImage.asset.url
    }));
    setPosts(formattedData);
  }).catch(console.error);
}, []);



  useEffect(() => {
    setDisplayedPosts(filterPosts());
  }, [selectedCategory, posts]);

  return (
    <section className='flex flex-col justify-center items-center'>
      <div className="flex flex-col justify-center items-center text-center mt-[150px]">
        <h1 className="font-[400px] text-[#013919] text-[28px] leading-[28px]">Read Vinca Stories</h1>
        <p className="text-[48px] text-[#013919] font-black mt-2 text-center">
          Let our patients tell you<br/> their story
        </p>
      </div>
      <div className='flex flex-col justify-center items-center px-[90px]'>
        <div className="flex gap-4 md:flex-wrap justify-center items-center w-full mb-10 mt-20">
          {categories.map(category => (
            <button
              className='text-sm leading-[20px] text-center w-fit border-[1px] rounded-[50px] font-normal font-[Arial] px-[17px] py-[10px] border-[#242424] text-[#242424] focus:bg-[#02AD4D] active:bg-[#02ad4d] focus:border-[0px] focus:text-white'
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center md:gap-8 ">
          {displayedPosts.map((post) => (
            <Link to={`/story/${post.slug.current}`}>
              <Post
                key={post.slug.current}
                category={post.category}
                reactions={post.reactions}
                likes={post.likes}
                date={post.date}
                time={post.time}
                title={post.title}
                slug={post.slug.current}
                image={post.mainImage.asset.url}
              />
            </Link>
          ))}
        </div>
        <div className='mt-[70px]'>
          {selectedCategory === 'All' && (
            <button
              className='text-sm leading-[20px] text-center w-fit border-[1px] rounded-[50px] font-normal font-[Arial] px-[17px] py-[10px] border-[#242424] text-[#242424]'
              onClick={loadMorePosts}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
