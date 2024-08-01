import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Images from '../../assets/images/images';
import LinkBtn from '../common/LinkBtn';
import { useState } from 'react';
import Slider from 'react-slick';

const IntroSection = () => {
  const [activeIndex, setActiveIndexs] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      if (current !== next) {
        setActiveIndexs(next);
      }
    },
  };
  return (
    <section className='section intro-section'>
      <Slider {...settings}>
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
      </Slider>
    </section>
  );
};

const FirstSlide = () => {
  return (
    <div className='intro-slide banner first-banner'>
      <div className='container'>
        <figure className='banner-img fade-in'>
          <img
            src={Images.introSection.shoe}
            alt='banner'
            width='474'
            height='397'
            loading='lazy'
            className='object-cover'
          />
        </figure>
        <div className={'banner-content'}>
          <h5 className='banner-subtitle fade-in'>
            custom&nbsp;
            <span>men&prime;s</span>
          </h5>
          <h3 className='banner-title fade-in'>running shoes</h3>
          <p className='fade-in'>
            sale up to <span>30% off</span>
          </p>

          <LinkBtn label='shop now' classType='link-btn' animate='true' />
        </div>
      </div>
    </div>
  );
};
const SecondSlide = () => {
  return (
    <div className='intro-slide banner second-banner'>
      <div className='container'>
        <figure className='banner-img'>
          <img
            src={Images.introSection.climbing}
            alt='banner'
            width='474'
            height='397'
            loading='lazy'
            className='object-cover'
          />
        </figure>
        <div className='banner-content'>
          <h5 className='banner-subtitle'>
            mounting-
            <span>climbing</span>
          </h5>
          <h3 className='banner-title'>hats & packback</h3>
          <p>Only untill the end of this week.</p>

          <LinkBtn label='shop now' classType='link-btn' />
        </div>
      </div>
    </div>
  );
};

const ThirdSlide = () => {
  return (
    <div className='intro-slide banner third-banner'>
      <div className='container'>
        <figure className='banner-img'>
          <img
            src={Images.introSection.skate}
            alt='banner'
            width='474'
            height='397'
            loading='lazy'
            className='object-cover'
          />
        </figure>
        <div className='banner-content'>
          <h5 className='banner-subtitle'>top weekly seller</h5>
          <p>Trending collection</p>
          <h3 className='banner-title'>
            <span>roller&nbsp;</span>
            &nbsp;-skate
          </h3>
          <LinkBtn label='shop now' classType='link-btn' />
        </div>
      </div>
    </div>
  );
};
export default IntroSection;
