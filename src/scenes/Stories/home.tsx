import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '@/shared/client';
import Post from '@/shared/Post'; // Correct the import path for Post component

interface PostType {
  title: string;
  reactions: string;
  likes: string;
  date: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  category: string;
  body: BlockType[];
  time: string;
  slug: {
    _type: string;
    current: string;
  };
  ms: number;
}

interface BlockType {
  _type: string;
  style: string;
  _key: string;
  children: SpanType[];
}

interface SpanType {
  _type: string;
  text: string;
  _key: string;
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState<PostType | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]); // State to hold the list of posts
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
          category,
          reactions,
          likes,
          body,
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
        if (data && data.length > 0) {
          setSinglePost(data[0]);
        }
      })
      .catch(console.error);
  }, [slug]);

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
        const formattedData = data.map(post => ({
          ...post,
          image: post.mainImage.asset.url
        }));
        setPosts(formattedData);
      })
      .catch(console.error);
  }, []); 

    const shuffleArray = (array: PostType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Select two random posts
  const randomPosts = shuffleArray(posts).slice(0, 2);

  return (
    <>
      {singlePost && (
        <section className="flex flex-col justify-center items-center">
          <div className="h-[600px] bg-story w-full bg-no-repeat bg-cover bg-center flex justify-center items-center">
            <h1 className="font-bold mt-5 md:text-[80px] text-white leading-[97px]">
              {singlePost.title}
            </h1>
          </div>
          <div className="md:px-[250px] mt-[70px] stories">
            <h1 className="font-bolf text-[40.1953px] leading-[52px] tracking-[0.462px] text-[#242424]">
              {singlePost.title}
            </h1>
            {singlePost.body.map(block => (
              <React.Fragment key={block._key}>
                {block.children.map(span => (
                  <p key={span._key} className="mt-[30px] text-[#6B6B6B] font-normal leading-[28px] text-[17px]">
                    {span.text}
                  </p>
                ))}
              </React.Fragment>
            ))}
            <span className="flex gap-6 text-[13px] font-normal mt-4">
              <p>{singlePost.date}</p>
              <p>{singlePost.time}</p>
            </span>
            <img
              src={singlePost.mainImage.asset.url}
              alt="Single Post Image"
              className="mt-12"
            />
          </div>
          {/* Display list of posts */}
          <div className="flex flex-wrap justify-center items-center md:gap-8 ">
             {randomPosts.map((post) => (
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
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default SinglePost;


