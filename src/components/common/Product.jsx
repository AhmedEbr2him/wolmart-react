/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Rating from './Rating';
import ProductPrice from './ProductPrice';
import { TbShoppingCartPlus, TbHeart, TbEye, TbGitCompare } from 'react-icons/tb';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { AiOutlineShopping } from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import { LiaBalanceScaleSolid } from 'react-icons/lia';

const Product = ({ data, hasDesc = false, hasListAction = false }) => {
  const {
    id = '',
    name = '',
    price = [],
    images = [],
    rating = '',
    reviews = [],
    description = '',
    category = '',
  } = data;
  const { addToCart, addToFavorite, quickView } = useContext(MainContext);
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
      onClick: quickView,
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

      <div className={`product-action ${hasDesc ? 'horizontal' : 'vertical'}`}>
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
        <Link to='#' className='category'>
          {hasDesc && category}
        </Link>
        <h4 className='product-name'>
          <Link to='#'>{name}</Link>
        </h4>
        <Rating rating={rating} reviews={reviews} />
        <ProductPrice price={price} />
        <div className='description'>
          <p>{hasDesc && description}</p>
        </div>

        {hasListAction && (
          <div className='list-action'>
            <button aria-label='submit button' className='btn btn-primary cart-btn'>
              <AiOutlineShopping size={24} />
              <span>Add to Cart</span>
            </button>
            <button aria-label='favorite' className='small-btn favorite-btn'>
              <IoMdHeartEmpty size={24} />
              <span className='tooltip'>Add to Favorite</span>
            </button>
            <button aria-label='compare' className='small-btn compare-btn'>
              <LiaBalanceScaleSolid size={24} />
              <span className='tooltip'>Add to Comparison</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
