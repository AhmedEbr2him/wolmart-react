/* eslint-disable react/prop-types */
import { BsTrash } from 'react-icons/bs';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { LuEye } from 'react-icons/lu';
import { BiShoppingBag } from 'react-icons/bi';
import { useProductQty } from '../../hooks/useProductQty';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const Table = ({ data, wishlist }) => {
  const tableHead = [
    { label: 'Product', class: 'product-table-img', input: true },
    { label: 'Name', class: 'product-table-name' },
    { label: 'Price', class: 'product-table-price' },
    { label: 'Quantity', class: 'product-table-quantity' },
    { label: 'Subtotal', class: 'product-table-subtotal' },
    { label: 'Action', class: 'product-table-remove' },
  ];
  const { removeFromCart, addToCart, removeFromProductList } = useContext(MainContext);
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
          {data.map(product => (
            <CartTable
              key={product.id}
              data={product}
              wishlist={wishlist}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              removeFromProductList={removeFromProductList}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;

const CartTable = ({ data, wishlist, addToCart, removeFromProductList }) => {
  const { id, name, images, price, quantity } = data;
  const { handleIncreaseQty, handleDecreaseQty, handleOnChangeQty } = useProductQty();
  const subtotal = price.new ? price.new * quantity : price.old * quantity;

  return (
    <tr key={id} className='table-row'>
      {images.map(({ src_1 }, index) => (
        <td key={index} className='product-thumbnail'>
          <Link to=''>
            <figure>
              <img src={src_1} alt='product' width='300' height='338' className='object-cover' />
            </figure>
          </Link>
        </td>
      ))}
      <td className='product-name-table'>
        <Link to=''>{name}</Link>
      </td>
      <td className='product-price-table'>
        {price.old > 0 && <span>${price.old}</span>}
        &nbsp;{price.new && price.old > 0 && <span>-</span>}&nbsp;
        {price.new > 0 && <span>${price.new}</span>}
      </td>
      <td className='product-quantity'>
        <div className='input-group'>
          <button className='qty-plus' aria-label='plus' onClick={() => handleIncreaseQty(id)}>
            <FiPlus />
          </button>
          <input
            type='number'
            name='quantity'
            value={quantity}
            onChange={e => handleOnChangeQty(e, id)}
          />
          <button className='qty-minus' aria-label='minus' onClick={() => handleDecreaseQty(id)}>
            <FiMinus />
          </button>
        </div>
      </td>
      <td className='product-subtotal-table'>
        <span>${subtotal.toFixed(2)}</span>
      </td>

      <td className='action-product'>
        {/* WISHLIST IS FOR WISH LIST PAGE BUTTONS */}
        {wishlist && (
          <button aria-label='Quick View' className='btn btn-dark view'>
            <span>Quick view</span>
            <span>
              <LuEye />
            </span>
          </button>
        )}
        {wishlist && (
          <button
            aria-label='Add to Cart'
            className='btn btn-dark add-to'
            onClick={() => addToCart(data, id)}
          >
            <span>Add to Cart</span>
            <span>
              <BiShoppingBag />
            </span>
          </button>
        )}
        <button
          aria-label='Remove from Cart'
          className='btn btn-dark remove'
          onClick={() => removeFromProductList('cart', id) || removeFromProductList('favorite', id)}
        >
          <span>Remove</span>
          <span>
            <BsTrash />
          </span>
        </button>
      </td>
    </tr>
  );
};
