import Slider from 'react-slick';
import Images from '../../assets/images/images';
import SectionTitle from '../common/SectionTitle';

const Clients = () => {
  const settings = {
    slidesToShow: 1,
    speed: 500,
    infinite: false,
    rows: 2,
    slidesPerRow: 2,
  };
  return (
    <section className='section client-section-wrapper'>
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
