import './style.css';
import { BreadcrumbList, PageHeader, ProductSummary } from '../../components/';
import { Link } from 'react-router-dom';
import img from '../../assets/images/products/cart-products/product-1.jpg';
import { BsTrash } from 'react-icons/bs';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useProductQty } from '../../hooks/useProductQty';
import { FiArrowLeft } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
const Cart = () => {
  const tableHead = [
    { label: 'Product', class: 'product-table-img' },
    { label: 'Name', class: 'product-table-name' },
    { label: 'Price', class: 'product-table-price' },
    { label: 'Quantity', class: 'product-table-quantity' },
    { label: 'Subtotal', class: 'product-table-subtotal' },
    { label: 'Action', class: 'product-table-remove' },
  ];
  const { handleDecreaseQty, handleIncreaseQty, handleOnChangeQty, productQty } = useProductQty();

  return (
    <article className='cart'>
      <div className='container'>
        <BreadcrumbList />
      </div>
      <PageHeader pageTitle='Cart' />

      <div className='container'>
        <div className='products-content'>
          <div className='table-wrapper'>
            <table className='shop-table cart-table'>
              <thead>
                <tr>
                  {tableHead.map((head, index) => (
                    <th key={index} className={head.class}>
                      <span>{head.label}</span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr className='table-row'>
                  <td className='product-thumbnail'>
                    <Link to=''>
                      <figure>
                        <img
                          src={img}
                          alt='product'
                          width='300'
                          height='338'
                          className='object-cover'
                        />
                      </figure>
                    </Link>
                  </td>
                  <td className='product-name-table'>
                    <Link to=''>Product name</Link>
                  </td>
                  <td className='product-price-table'>
                    <span>$10.00</span>
                  </td>
                  <td className='product-quantity'>
                    <div className='input-group'>
                      <button className='qty-plus' aria-label='plus' onClick={handleIncreaseQty}>
                        <FiPlus />
                      </button>
                      <input
                        type='number'
                        name='Value'
                        onChange={handleOnChangeQty}
                        value={productQty}
                      />
                      <button className='qty-minus' aria-label='minus' onClick={handleDecreaseQty}>
                        <FiMinus />
                      </button>
                    </div>
                  </td>
                  <td className='product-subtotal-table'>
                    <span>$40.00</span>
                  </td>

                  <td className='remove-product'>
                    <button aria-label='Remove'>
                      <BsTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* COUPON */}
          <form className='coupon-form'>
            <h5 className='coupon-title'>Coupon Discount</h5>
            <input type='text' className='form-control' placeholder='Enter coupon code here...' />
            <button className='btn btn-outline'>apply</button>
          </form>
          {/* FORM ACTION */}
          <div className='cart-action'>
            <button aria-label='Go to Checkout' className='btn btn-dark'>
              back to home
            </button>
            <button aria-label='Clear' className='btn btn-outline'>
              View Wishlist
            </button>
            <button aria-label='Go to Shop' className='btn btn-dark'>
              <FiArrowLeft />
              continue shopping
            </button>
          </div>
        </div>

        <div className='sticky-sidebar'>
          <ProductSummary />
        </div>
      </div>
    </article>
  );
};
export default Cart;
