/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import LinkBtn from './LinkBtn';
import { GoArrowRight } from 'react-icons/go';
import { useState } from 'react';
const Banner = ({ image, backgroundColor, h5, span, h3, underline, outline }) => {
  const [isHovered, setIsHover] = useState(false);

  return (
    <div className='fixed-banner-wrapper'>
      <div className='container'>
        <div className='fixed-banner first-banner'>
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
            {underline && (
              <Link className={`link-underline`}>
                SHOP NOW <GoArrowRight width='40' />
              </Link>
            )}
            {outline && <LinkBtn label='Shop Now' classType='btn-outline' />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
