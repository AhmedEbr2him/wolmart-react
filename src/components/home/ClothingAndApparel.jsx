/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import Images from '../../assets/images/images';
import LinkBtn from '../common/LinkBtn';
import Product from '../common/Product';
import TitleLink from '../common/TitleLink';

const ClothingAndApparel = ({ products }) => {
  const settings = {
    className: 'center',
    slidesToShow: 2,
    speed: 500,
    infinite: false,
    rows: 1,
    slidesPerRow: 2,
    dots: true,
  };
  return (
    <section className='section banner-products'>
      <div className='container'>
        <TitleLink title='clothing & apparel' to='#' />
      </div>
      <div className='section-banner'>
        <div className='container'>
          <BannerBackground
            image={Images.banners.Banenr_3}
            h5='Weekend Sale'
            h3='New Arrivals'
            span='collection'
          />

          <div className='products-list-wrapper'>
            <div className='products-list'>
              <Slider {...settings}>
                {products?.new_arrivals_collection?.map((product, index) => (
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
export default ClothingAndApparel;

const BannerBackground = ({ image, h5, h3, span }) => {
  return (
    <div className='banner' style={{ backgroundImage: `url(${image})` }}>
      <div className='banner-background-content'>
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
