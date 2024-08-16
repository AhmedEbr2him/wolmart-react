import Slider from 'react-slick';
import Images from '../../assets/images/images';
import SectionTitle from '../common/SectionTitle';

const Clients = () => {
  const settings = {
    slidesToShow: 6,
    speed: 500,
    infinite: false,
    rows: 2,
    slidesPerRow: 1,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <section className='section client-section-wrapper' data-lazy-trigger>
      <div className='container'>
        <SectionTitle title='our clients' />
        <div className='client-section-content'>
          <Slider {...settings}>
            {Images.clients.map((client, index) => (
              <figure key={index} role='group' className='brand-wrapper'>
                <img
                  src={client}
                  alt='brand'
                  aria-label={`${index}/${Images.clients.length}`}
                  width='410'
                  height='186'
                  className='object-cover'
                />
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Clients;
