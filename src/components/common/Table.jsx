/* eslint-disable react/prop-types */
import { BsTrash } from 'react-icons/bs';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useProductQty } from '../../hooks/useProductQty';
import { Link } from 'react-router-dom';
import { LuEye } from 'react-icons/lu';
import { BiShoppingBag } from 'react-icons/bi';
import img from '../../assets/images/products/cart-products/product-1.jpg';

const Table = ({ data, wishlist }) => {
  const { handleDecreaseQty, handleIncreaseQty, handleOnChangeQty, productQty } = useProductQty();
  const tableHead = [
    { label: 'Product', class: 'product-table-img', input: true },
    { label: 'Name', class: 'product-table-name' },
    { label: 'Price', class: 'product-table-price' },
    { label: 'Quantity', class: 'product-table-quantity' },
    { label: 'Subtotal', class: 'product-table-subtotal' },
    { label: 'Action', class: 'product-table-remove' },
  ];
  return (
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
                  <img src={img} alt='product' width='300' height='338' className='object-cover' />
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
                <input type='number' name='Value' onChange={handleOnChangeQty} value={productQty} />
                <button className='qty-minus' aria-label='minus' onClick={handleDecreaseQty}>
                  <FiMinus />
                </button>
              </div>
            </td>
            <td className='product-subtotal-table'>
              <span>$40.00</span>
            </td>

            <td className='action-product'>
              {wishlist && (
                <button aria-label='Quick View' className='btn btn-dark view'>
                  <span>Quick view</span>
                  <span>
                    <LuEye />
                  </span>
                </button>
              )}
              {wishlist && (
                <button aria-label='Add to Cart' className='btn btn-dark add-to'>
                  <span>Add to Cart</span>
                  <span>
                    <BiShoppingBag />
                  </span>
                </button>
              )}
              <button aria-label='Remove from Cart' className='btn btn-dark remove'>
                <span>Remove</span>
                <span>
                  <BsTrash />
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
