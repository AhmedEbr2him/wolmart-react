/* eslint-disable react/prop-types */
import './style.css';
import { FaArrowRight } from 'react-icons/fa6';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { MainContext } from '../../../context/MainContext';
import { routesConstatns } from '../../../constants/routesConstants';
import { useStopDocScroll } from '../../../hooks/useStopDocScroll';

const CartDrawer = () => {
  const { isCartActive, closeCart, storedProducts } = useContext(MainContext);
  const { startScroll, stopScroll } = useStopDocScroll();
  const drawerProducts = storedProducts?.products.cart;

  const totlaPrice = drawerProducts.reduce((accumulator, product) => {
    const newPrice = product.price.new ?? 0;
    const oldPrice = product.price.old ?? 0;

    return accumulator + (newPrice || oldPrice);
  }, 0);

  useEffect(() => {
    if (isCartActive) {
      stopScroll();
    } else {
      startScroll();
    }
  }, [isCartActive, stopScroll, startScroll]);
  return (
    <>
      <div className={`cart-drawer`} data-active={isCartActive}>
        <div className='cart-drawer-wrapper'>
          <div className='cart-header'>
            <h4>shopping cart</h4>
            <button aria-label='close cart' className='btn-close' onClick={closeCart}>
              <span>Close</span>
              <FaArrowRight />
            </button>
          </div>
          <div className='products-wrapper'>
            {drawerProducts.length <= 0 && <p>Cart is empty !</p>}

            <div className='products-container'>
              {drawerProducts.map(product => {
                return <DrawerProduct key={product.id} data={product} />;
              })}
            </div>
          </div>
        </div>

        <div className='cart-drawer-footer'>
          <div className='cart-total'>
            <p>Subtotal:</p>
            <span className='price'>${totlaPrice.toFixed(2)}</span>
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

const DrawerProduct = ({ data }) => {
  const { id, name, images, price, quantity } = data;
  const { removeFromProductList } = useContext(MainContext);
  return (
    <div className='product drawer-product-cart'>
      <div className='drawer-product-price'>
        <Link to='#' className='product-name'>
          {name}
        </Link>

        <div className='price-box'>
          <span className='drawer-product-quantity'>{quantity + 1}</span>

          {price.new > 0 && <span className='drawer-product-price'>${price.new}</span>}
          {price.old > 0 && <span className='drawer-product-price'>${price.old}</span>}
        </div>
      </div>
      <figure className='product-media'>
        {images?.map(({ src_1 }, index) => (
          <Link key={index} to='#'>
            <img src={src_1} alt='product one' width='84' height='94' loading='lazy' />
          </Link>
        ))}
      </figure>
      <button
        aria-label='remove product from cart'
        onClick={() => removeFromProductList('cart', id)}
      >
        <CgClose />
      </button>
    </div>
  );
};
