import { useSwiper } from 'swiper/react';

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className='swiper-nav-btn'>
      <button onClick={() => swiper.slideNext()}>prev</button>
      <button onClick={() => swiper.slidePrev()}>next</button>
    </div>
  );
};

export default SwiperNavButtons;
