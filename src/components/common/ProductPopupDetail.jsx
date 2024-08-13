import { useContext, useEffect } from 'react';
import SocialList from './SocialList';
import { AiOutlineShopping } from 'react-icons/ai';
import InputPriceGroup from './InputPriceGroup';
import { useCheckboxState } from '../../hooks/useCheckboxState';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { FaCheck } from 'react-icons/fa6';
import { CgClose } from 'react-icons/cg';
import { MainContext } from '../../context/MainContext';
import { useStopDocScroll } from '../../hooks/useStopDocScroll';
/* eslint-disable react/prop-types */

const ProductPopupDetail = ({ data }) => {
  const {
    name = '',
    description = '',
    images = [{}],
    price = {},
    category = '',
    rating = '',
    reviews = '',
    sizes = [{}],
    quantity = '',
    colors = [{}],
  } = data ?? {};

  //   const [mainImage, setMainImage] = useState(images[0]?.src);
  const { handleOption, checkedState, size, checkboxIndex, setIsCheckedState } = useCheckboxState({
    sizes,
  });
  const { closeQuickView, isQuickViewActive } = useContext(MainContext);
  const { startScroll, stopScroll } = useStopDocScroll();

  useEffect(() => {
    if (isQuickViewActive) {
      stopScroll();
    } else {
      startScroll();
    }
  }, [isQuickViewActive, stopScroll, startScroll]);

  return (
    <div className={`product-popup ${isQuickViewActive ? 'active' : ''}`}>
      <button aria-label='Close' className='small-btn close' onClick={closeQuickView}>
        <CgClose />
      </button>
      <div className='single-product'>
        <div className='product-media'>
          <figure className='product-image' aria-hidden='false'>
            <img src={images[0].src_1} alt={name ?? ''} loading='lazy' className='object-cover' />
          </figure>
        </div>
        {/* <div className='product-thumb'>
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
      </div> */}
        <div className='prodcut-details'>
          <h2 className='product-title'>
            <Link to='#'>{name ?? ''}</Link>
          </h2>
          <div className='product-bm-wrapper'>
            <div className='brand'>
              <p>brand:</p>
              <span>{category}</span>
            </div>
            <div className='product-meta'>
              <div className='category'>
                <p>category:</p>
                <span>{category}</span>
              </div>
              <div className='product-sku'>
                <p>SKU:</p>
                <span>MS46891340</span>
              </div>
            </div>
          </div>
          <hr className='horizontal-divider' />
          <div className='product-price'>
            {price?.old > 0 && <del>${price?.old}</del>}
            {price.new > 0 && price.old > 0 && <span>-</span>}
            {price?.new > 0 && <ins className='new-price'>${price?.new}</ins>}
          </div>
          <div className='product-countdown-container'>
            <p>Offer ends in :</p>
            <div className='product-countdown'>0 days, 00 : 00 : 00</div>
          </div>
          <Rating rating={rating} reviews={reviews} />
          <div className='product-short-description'>
            <ul className='list-type-check'>
              <li>
                <FaCheck />
                <span>Ultrices eros in cursus turpis massa cursus mattis.</span>
              </li>
              <li>
                <FaCheck />
                <span>Volutpat ac tincidunt vitae semper quis lectus..</span>
              </li>
              <li>
                <FaCheck />
                <span>Aliquam id diam maecenas ultricies mi eget mauris..</span>
              </li>
            </ul>

            <div className='description'>
              <h4>Description:</h4>
              <p>{description}</p>
            </div>
          </div>

          <hr className='horizontal-divider' />

          {colors && (
            <div className='product-form product-variation-form product-size-swatch'>
              <p>Colors:</p>
              {colors?.map((color, index) => (
                <button key={index} aria-label='Color'></button>
              ))}
            </div>
          )}

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
              <InputPriceGroup quantity={quantity} />

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
export default ProductPopupDetail;
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
