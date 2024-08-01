/* eslint-disable react/prop-types */
import LinkBtn from './LinkBtn';
import LinkUnderline from './LinkUnderline';
const Banner = ({ image, backgroundColor, h5, span, h3, underline, outline }) => {
  return (
    <div className='fixed-banner-wrapper'>
      <div className='container'>
        <div className='banner fixed-banner' style={{ backgroundImage: `url(${image})` }}>
          <figure>
            <img
              src={image}
              alt='Banner'
              width='610'
              height='160'
              loading='lazy'
              style={{ backgroundColor: backgroundColor }}
              className='object-cover'
            />
          </figure>

          <div className='fixed-banner-content'>
            <h5 className='small-head'>
              {h5} <span>{span}</span>
            </h5>
            <h3>{h3}</h3>
            {underline && <LinkUnderline label='shop now' />}
            {outline && <LinkBtn label='Shop Now' classType='btn-outline' />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
