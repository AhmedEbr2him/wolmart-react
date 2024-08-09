import './style.css';
import Images from '../../assets/images/images';
import BreadcrumbList from '../../components/common/BreadcrumbList';
import LinkBtn from '../../components/common/LinkBtn';
import Slider from 'react-slick';
import { Categories, ShopContent } from '../../components';

const Shop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease',
  };

  return (
    <article className='shop'>
      <div className='container'>
        <BreadcrumbList />

        <div
          className='shop-default-banner banner'
          style={{
            backgroundColor: '#FFC74E',
            backgroundImage: `url(${Images.banners.Banner_shop_1})`,
          }}
        >
          <div className='default-banner-content'>
            <h4 className='banner-subtitle'>Accessories Collection</h4>
            <h3 className='banner-title'>
              Smart Wrist <br /> Watches
            </h3>
            <LinkBtn label='discover more' to='#' classType='btn-dark' />
          </div>
        </div>

        <div className='shop-default-brands'>
          <Slider {...settings}>
            {Images.brands.map((brand, index) => (
              <figure key={index} role={'group'}>
                <img
                  src={brand}
                  alt={`${index + 1}/${Images.brands.length}`}
                  width='160'
                  height='90'
                  className='object-cover'
                />
              </figure>
            ))}
          </Slider>
        </div>

        <Categories />
        <ShopContent />
      </div>
    </article>
  );
};
export default Shop;
