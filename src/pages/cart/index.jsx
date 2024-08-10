import './style.css';
import { BreadcrumbList, PageHeader, ProductSummary, Table } from '../../components/';
import { FiArrowLeft } from 'react-icons/fi';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const Cart = () => {
  const { storedProducts, removeFromCart } = useContext(MainContext);
  return (
    <article className='cart'>
      <div className='container'>
        <BreadcrumbList />
      </div>
      <PageHeader pageTitle='Cart' />

      <div className='container'>
        <div className='products-content'>
          {/* TABLE */}
          <Table data={storedProducts.products.cart} removeFromCart={removeFromCart} />
          {/* COUPON */}
          <form className='coupon-form'>
            <h5 className='coupon-title'>Coupon Discount</h5>
            <input type='text' className='form-control' placeholder='Enter coupon code here...' />
            {/* FORM ACTION */}
            <div className='cart-action'>
              <button className='btn btn-outline apply'>apply</button>
              <button aria-label='Go to Shop' className='btn btn-dark'>
                <FiArrowLeft />
                continue shopping
              </button>
            </div>
          </form>
        </div>

        <div className='sticky-sidebar'>
          {/* SUMMARY */}
          <ProductSummary />
        </div>
      </div>
    </article>
  );
};
export default Cart;
