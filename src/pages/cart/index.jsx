import './style.css';
import { BreadcrumbList, PageHeader, ProductSummary, Table } from '../../components/';
import { FiArrowLeft } from 'react-icons/fi';

const Cart = () => {
  return (
    <article className='cart'>
      <div className='container'>
        <BreadcrumbList />
      </div>
      <PageHeader pageTitle='Cart' />

      <div className='container'>
        <div className='products-content'>
          {/* TABLE */}
          <Table />
          {/* COUPON */}
          <form className='coupon-form'>
            <h5 className='coupon-title'>Coupon Discount</h5>
            <input type='text' className='form-control' placeholder='Enter coupon code here...' />
            <button className='btn btn-outline'>apply</button>
          </form>
        </div>

        <div className='sticky-sidebar'>
          {/* SUMMARY */}
          <ProductSummary />
          {/* FORM ACTION */}
          <div className='cart-action'>
            <button aria-label='Go to Shop' className='btn btn-dark'>
              <FiArrowLeft />
              continue shopping
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Cart;
