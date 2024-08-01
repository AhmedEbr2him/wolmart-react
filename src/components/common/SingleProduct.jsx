/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { AiOutlineShopping } from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaPinterestP } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { SlSocialInstagram } from 'react-icons/sl';
import Rating from './Rating';
import calculateDiscount from '../../utils/calculateDiscount';
import { useProductQty } from '../../hooks/useProductQty';
import { useCheckboxState } from '../../hooks/useCheckboxState';

const SingleProduct = ({ data }) => {
  const {
    name = '',
    description = '',
    images = [{}],
    price = {},
    category = '',
    rating = '',
    reviews = '',
    stock = '',
    discount = '',
    sizes = [{}],
  } = data;

  const [mainImage, setMainImage] = useState(images[0]?.src);
  const { handleDecreaseQty, handleIncreaseQty, handleOnChangeQty, productQty } = useProductQty();
  const { handleOption, checkedState, size, checkboxIndex, setIsCheckedState } = useCheckboxState({
    sizes,
  });

  return (
    <div className='single-product'>
      <div className='product product-single'>
        <div className='product-media'>
          <figure className='product-image' aria-hidden='false'>
            <img src={mainImage} alt={name} loading='lazy' className='object-cover' />
          </figure>
          <Discount
            newPrice={price.new}
            oldPrice={price.old}
            calculateDiscount={calculateDiscount}
          />
        </div>

        <div className='product-thumb'>
          <div className='thumb-list'>
            {images?.map((img, index) => (
              <button
                key={index}
                role='img'
                aria-label='Product thumb'
                className='product-thumb-item'
              >
                <img
                  src={img.src}
                  alt='Product Image'
                  width={img.width}
                  height={img.height}
                  className='object-cover'
                  onClick={() => setMainImage(images[index].src)}
                />
              </button>
            ))}
          </div>
        </div>

        <div className='prodcut-details'>
          <h2 className='product-title'>
            <Link to='#'>{name}</Link>
          </h2>
          <hr className='horizontal-divider' />
          <div className='product-price'>
            <del>${price.old}.00</del>
            <span>-</span>
            <ins className='new-price'>${price.new}.00</ins>
          </div>
          <div className='product-countdown-container'>
            <p>Offer ends in :</p>
            <div className='product-countdown'>0 days, 00 : 00 : 00</div>
          </div>
          <Rating rating={rating} reviews={reviews} />

          <div className='product-form product-variation-form product-size-swatch'>
            <p>Size:</p>
            <div className='product-variations'>
              {sizes && (
                <Sizes sizes={sizes} checkedState={checkedState} handleOption={handleOption} />
              )}
            </div>

            <div className={`size-price ${checkedState[checkboxIndex] ? 'active' : ''}`}>
              <button
                aria-label='clear size'
                className={`clear-size`}
                onClick={() => setIsCheckedState(new Array(sizes.length).fill(false))}
              >
                Clear All
              </button>

              <div className={`product-variation-price product-price`}>
                <span>${size?.price}.00</span>
              </div>
            </div>
          </div>

          <hr className='horizontal-divider' />
          <div className='product-form'>
            <div className='product-qty-form'>
              <div className='input-group'>
                <input
                  type='number'
                  name='qantity'
                  value={productQty}
                  onChange={handleOnChangeQty}
                />
                <button className='qty-plus' aria-label='plus' onClick={handleIncreaseQty}>
                  <FiPlus />
                </button>
                <button className='qty-minus' aria-label='minus' onClick={handleDecreaseQty}>
                  <FiMinus />
                </button>
              </div>
              <button
                aria-label='submit button'
                disabled={!checkedState[checkboxIndex]}
                className='btn btn-primary'
              >
                <AiOutlineShopping />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
          <SocialList />
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;

const SocialList = () => {
  const socialLinks = [
    { label: 'facebook', link: '#', icon: <FaFacebookF /> },
    { label: 'X', link: '#', icon: <BsTwitterX /> },
    { label: 'Pinterest', link: '#', icon: <FaPinterestP /> },
    { label: "What's app", link: '#', icon: <FaWhatsapp /> },
    { label: 'Inestagram', link: '#', icon: <SlSocialInstagram /> },
  ];

  return (
    <div className='social-links-wrapper'>
      <div className='social-links'>
        {socialLinks.map((link, index) => (
          <Link key={index} to={link.link} className='btn'>
            {link.icon}
          </Link>
        ))}
      </div>
      <div className='product-links-wrapper'>
        <button aria-label='favorite' className='favorite-btn'>
          <IoMdHeartEmpty />
          <span className='tooltip'>Add to Favorite</span>
        </button>
        <button aria-label='compare' className='compare-btn'>
          <LiaBalanceScaleSolid />
          <span className='tooltip'>Add to Comparison</span>
        </button>
      </div>
    </div>
  );
};

const Discount = ({ oldPrice, newPrice, calculateDiscount }) => {
  const discountAmount = calculateDiscount(oldPrice, newPrice);

  return (
    <div className='product-badge'>
      <span>{discountAmount}% off</span>
    </div>
  );
};

const Sizes = ({ sizes, checkedState, handleOption }) => {
  {
    return sizes.map((size, index) => (
      <label
        className='variations-item'
        key={index}
        data-selected={checkedState[index] ? 'true' : 'false'}
      >
        {size.label}
        <input
          type='checkbox'
          name={size.label}
          value={size.value}
          aria-label={size.label}
          checked={checkedState[index]}
          onChange={() => handleOption(index, size)}
        />
      </label>
    ));
  }
};
