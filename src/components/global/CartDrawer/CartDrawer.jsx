import './style.css';
import { FaArrowRight } from 'react-icons/fa6';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Images from '../../../assets/images/images';
import { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import { routesConstatns } from '../../../constants/routesConstants';

const CartDrawer = () => {
  const { isCartActive, closeCart } = useContext(MainContext);

  return (
    <>
      <div className='cart-drawer' data-active={isCartActive}>
        <div className='cart-header'>
          <h4>shopping cart</h4>
          <button aria-label='close cart' className='btn-close' onClick={closeCart}>
            <span>Close</span>
            <FaArrowRight />
          </button>
        </div>
        <div className='products-wrapper'>
          <div className='products-container'>
            <div className='product drawer-product-cart'>
              <div className='drawer-product-price'>
                <Link to='#' className='product-name'>
                  Beige knitted elas tic runner shoes tic runner shoes
                </Link>

                <div className='price-box'>
                  <span className='drawer-product-quantity'>1</span>
                  <span className='drawer-product-price'>$10.00</span>
                </div>
              </div>
              <figure className='product-media'>
                <Link to='#'>
                  <img
                    src={Images.products.cartProducts.cartProductOne}
                    alt='product one'
                    width='84'
                    height='94'
                    loading='lazy'
                  />
                </Link>
              </figure>
              <button aria-label='remove product from cart'>
                <CgClose />
              </button>
            </div>
          </div>
        </div>

        <div className='cart-drawer-footer'>
          <div className='cart-total'>
            <p>Subtotal: </p>
            <span className='price'>$10.00</span>
          </div>
          <div className='cart-action'>
            <Link to={routesConstatns.CART} className='btn btn-outline' onClick={closeCart}>
              view cart
            </Link>
            <Link to={routesConstatns.CHECKOUT} className='btn btn-primary' onClick={closeCart}>
              checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartDrawer;
