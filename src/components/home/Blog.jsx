import { Link } from 'react-router-dom';
import TitleLink from '../common/TitleLink';
import LinkUnderline from '../common/LinkUnderline';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/data.json');
        if (response.ok) {
          const data = await response.json();
          setPosts(data.blog.posts);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);
  const settings = {
    slidesToShow: 4,
    speed: 500,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className='section blog-section' data-lazy-trigger>
      <div className='blog-section-wrapper'>
        <div className='container'>
          <TitleLink title='from out blog' to='#' />

          <Slider {...settings}>
            {posts.length &&
              posts?.map((post, index) => {
                const { author, date_added, images, title } = post;
                return (
                  <div className='post' key={index}>
                    <figure className='post-media'>
                      {images?.map((img, index) => (
                        <Link to='#' key={index}>
                          <img
                            src={img.src}
                            alt='post'
                            width='280'
                            height='180'
                            className='object-cover'
                          />
                        </Link>
                      ))}
                    </figure>

                    <div className='post-details'>
                      <div className='post-meta'>
                        <p>by</p>{' '}
                        <Link to='' className='post-author'>
                          {author}
                        </Link>
                        &nbsp;-&nbsp;
                        <Link className='post-date'>&nbsp;{date_added}</Link>
                      </div>
                      <h4 className='post-title'>
                        <Link to=''>{title}</Link>
                      </h4>
                      <LinkUnderline to={'#'} label='Read more' />
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Blog;
