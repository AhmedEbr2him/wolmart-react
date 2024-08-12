/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { useState } from 'react';
import Rating from './Rating';
import calculateDiscount from '../../utils/calculateDiscount';
import { useCheckboxState } from '../../hooks/useCheckboxState';
import InputPriceGroup from './InputPriceGroup';
import SocialList from './SocialList';

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
    quantity = '',
  } = data;

  const [mainImage, setMainImage] = useState(images[0]?.src);
  const { handleOption, checkedState, size, checkboxIndex, setIsCheckedState } = useCheckboxState({
    sizes,
  });

  return (
    <div className='single-product'>
      <div className='product product-single'>
        <div className='product-media'>
          <figure className='product-image' aria-hidden='false'>
            <img src={mainImage} alt={name ?? ''} loading='lazy' className='object-cover' />
          </figure>
          <Discount
            newPrice={price?.new}
            oldPrice={price?.old}
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
                  src={img?.src}
                  alt='Product Image'
                  width={img?.width}
                  height={img?.height}
                  className='object-cover'
                  onClick={() => setMainImage(images[index]?.src)}
                />
              </button>
            ))}
          </div>
        </div>

        <div className='prodcut-details'>
          <h2 className='product-title'>
            <Link to='#'>{name ?? ''}</Link>
          </h2>
          <hr className='horizontal-divider' />
          <div className='product-price'>
            {price?.old > 0 && <del>${price?.old}.00</del>}
            <span>-</span>
            {price?.new > 0 && <ins className='new-price'>${price?.new}.00</ins>}
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
              <InputPriceGroup />

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
          {/* SOCIAL LIST */}
          <SocialList product={true} />
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;

const Discount = ({ oldPrice, newPrice, calculateDiscount }) => {
  const discountAmount = calculateDiscount(oldPrice, newPrice);

  return (
    <div className='product-badge'>
      <span>{discountAmount}%off</span>
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
