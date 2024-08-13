/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import LinkBtn from '../common/LinkBtn';
import Product from '../common/Product';
import TitleLink from '../common/TitleLink';

const ProductsListBanner = ({ sectionTitle, to, banner, h5, h3, span, products, white }) => {
  const settings = {
    className: 'center',
    slidesToShow: 4,
    speed: 500,
    infinite: true,
    rows: 1,
    slidesPerRow: 2,
    dots: true,
    InitalSlide: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section className='section banner-products' data-lazy-trigger>
      <div className='container'>
        <TitleLink title={sectionTitle} to={to} />

        <div className='section-banner'>
          <BannerBackground image={banner} h5={h5} h3={h3} span={span} white={white} />

          <div className='products-list-wrapper'>
            <div className='products-list'>
              <Slider {...settings}>
                {products?.slice(0, 8).map((product, index) => (
                  <Product key={index} data={product} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductsListBanner;

const BannerBackground = ({ image, h5, h3, span, white }) => {
  return (
    <div className='banner' style={{ backgroundImage: `url(${image})` }}>
      <div className={`banner-background-content ${white ? 'white' : ''}`}>
        <h5 className='small-head'>{h5}</h5>
        <hr className='horizontal-divider' />
        <h3>
          {h3}
          <br />
          <span>{span}</span>
        </h3>
        <LinkBtn label='Shop Now' classType='btn-outline' />
      </div>
    </div>
  );
};
