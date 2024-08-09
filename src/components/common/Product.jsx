/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Rating from './Rating';
import ProductPrice from './ProductPrice';
import { TbShoppingCartPlus, TbHeart, TbEye, TbGitCompare } from 'react-icons/tb';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const Product = ({ data }) => {
  const { id = '', name = '', price = [], images = [], rating = '', reviews = [] } = data;
  const { addToCart, addToFavorite } = useContext(MainContext);

  const actionList = [
    {
      label: 'add to cart',
      icon: <TbShoppingCartPlus />,
      onClick: addToCart,
    },
    {
      label: 'add to favorite',
      icon: <TbHeart />,
      onClick: addToFavorite,
    },
    {
      label: 'quick view',
      icon: <TbEye />,
    },
    {
      label: 'add to compare',
      icon: <TbGitCompare />,
    },
  ];

  return (
    <div className='popular-product'>
      <figure className='product-media'>
        {images?.map((img, index) => (
          <Link to='' key={index}>
            <img
              src={img.src_1}
              alt={name}
              width={img.width}
              height={img.height}
              loading='lazy'
              className='front-img object-cover'
            />
            <img
              src={img.src_2}
              alt={name}
              width={img.width}
              height={img.height}
              loading='lazy'
              className='back-img object-cover'
            />
          </Link>
        ))}
      </figure>

      <div className='product-action-vertical'>
        {actionList.map((item, index) => (
          <button
            key={index}
            aria-label={item.label}
            style={{ animationDelay: `${100 * index}ms` }}
            onClick={() => item.onClick && item.onClick(data, id)}
          >
            {item.icon}
            <span className='tooltip'>{item.label}</span>
          </button>
        ))}
      </div>

      <div className='product-details'>
        <h4 className='product-name'>
          <Link to='#'>{name}</Link>
        </h4>
        <Rating rating={rating} reviews={reviews} />
        <ProductPrice price={price} />
      </div>
    </div>
  );
};

export default Product;
