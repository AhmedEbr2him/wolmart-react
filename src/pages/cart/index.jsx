import './style.css';
import { BreadcrumbList, PageHeader, ProductSummary, Table } from '../../components/';
import { FiArrowLeft } from 'react-icons/fi';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { Link } from 'react-router-dom';
import { routesConstatns } from '../../constants/routesConstants';

const Cart = () => {
  const { storedProducts, removeFromCart } = useContext(MainContext);
  const productsLength = storedProducts.products.cart.length;

  return (
    <article className='cart'>
      <div className='container'>
        <BreadcrumbList />
      </div>
      <PageHeader pageTitle='Cart' />

      <div className='container'>
        <div className='products-content'>
          {/* TABLE */}
          {productsLength === 0 && <p className='empty-cart-message'>Cart Is Empty !</p>}

          {productsLength >= 1 && (
            <Table data={storedProducts.products.cart} removeFromCart={removeFromCart} />
          )}
          {/* COUPON */}
          {productsLength >= 1 && (
            <form className='coupon-form'>
              <h5 className='coupon-title'>Coupon Discount</h5>
              <input type='text' className='form-control' placeholder='Enter coupon code here...' />
              <button className='btn btn-outline apply'>apply</button>
            </form>
          )}
          {/* FORM ACTION */}
          <div className='cart-action'>
            <Link to={routesConstatns.SHOP} className='btn btn-dark'>
              <FiArrowLeft />
              continue shopping
            </Link>
          </div>
        </div>

        <div className='sticky-sidebar'>
          {/* SUMMARY */}
          {productsLength >= 1 && <ProductSummary />}
        </div>
      </div>
    </article>
  );
};
export default Cart;
