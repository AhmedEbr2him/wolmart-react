/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Rating from '../common/Rating';
import Slider from 'react-slick';
import CustomPrevArrow from '../common/CustomArrows/CustomPrevArrow';
import CustomNextArrow from '../common/CustomArrows/CustomNextArrow';

const BestSelling = ({ data }) => {
  const settings = {
    dots: false,
    draggable: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: false,
    speed: 800,
    slidesToShow: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='best-selling-wrapper'>
      <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
        <div className='best-selling-list'>
          {data &&
            data
              ?.slice(0, 3)
              ?.map((product, index) => <BestSellingProduct product={product} key={index} />)}
        </div>
        <div className='best-selling-list'>
          {data &&
            data
              .slice(6, 9)
              ?.map((product, index) => <BestSellingProduct product={product} key={index} />)}
        </div>
        <div className='best-selling-list'>
          {data &&
            data
              ?.slice(3, 6)
              ?.map((product, index) => <BestSellingProduct product={product} key={index} />)}
        </div>
        <div className='best-selling-list'>
          {data &&
            data
              ?.slice(6, 9)
              ?.map((product, index) => <BestSellingProduct product={product} key={index} />)}
        </div>
      </Slider>
    </div>
  );
};

const BestSellingProduct = ({ product }) => {
  const { name = '', price = {}, rating = '', images = [{}] } = product;

  return (
    <div className='product'>
      <figure className='product-media'>
        {images.map((img, index) => {
          const { src_1 = '' } = img;
          return (
            <Link to='' key={index}>
              <img src={src_1} alt={name} width={105} height={118} loading='lazy' />
            </Link>
          );
        })}
      </figure>
      <div className='product-details'>
        <h4 className='product-name'>
          <Link to=''>{name}</Link>
        </h4>
        <Rating rating={rating} />
        <div className='product-price'>
          {price.new > 0 && <ins className='old-price'>${price.new}</ins>}
          {price.old && price.new > 0 && <span>&nbsp;-&nbsp;</span>}
          {price.old > 0 && <del className='new-price'>${price.old}</del>}
        </div>
      </div>
    </div>
  );
};
export default BestSelling;
