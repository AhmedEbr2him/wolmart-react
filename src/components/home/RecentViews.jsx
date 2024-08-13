/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Slider from 'react-slick';

const RecentViews = ({ products }) => {
  const settings = {
    slidesToShow: 4,
    speed: 500,
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className='section recent-views-section' data-lazy-trigger>
      <div className='section-wrapper'>
        <div className='container'>
          <SectionTitle title='your recent views' />

          <div className='recent-views-products'>
            <Slider {...settings}>
              {products?.slice(0, 7).map((product, index) => {
                const { name, images } = product;
                return (
                  <div key={index} className='product'>
                    {images?.map((img, index) => (
                      <figure key={index} className='product-media'>
                        <Link to='#'>
                          <img
                            src={img.src_1}
                            alt={name}
                            className='object-cover'
                            width='130'
                            height='146'
                            style={{ backgroundImage: 'var(--primary-color)' }}
                          />
                        </Link>
                      </figure>
                    ))}

                    <h4 className='product-name'>
                      <Link to='#'>{name}</Link>
                    </h4>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RecentViews;
