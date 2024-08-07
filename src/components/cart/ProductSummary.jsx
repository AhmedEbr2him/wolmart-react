import { useContext } from 'react';
import ToolSelectBox from '../common/ToolSelectBox';
import { FiArrowRight } from 'react-icons/fi';
import { MainContext } from '../../context/MainContext';
import CountrySelect from '../common/CountrySelect';

const ProductSummary = () => {
  const { selectedCountry, state } = useContext(MainContext);

  return (
    <div className='products-summary'>
      <h3 className='cart-title'>Cart Total</h3>
      <div className='cart-price subtotal'>
        <p>Subtotal</p>
        <span>$100.00</span>
      </div>

      <div className='shipping-methods'>
        <h4>Shipping</h4>
        <ul className='shipping-list'>
          <li className='shipping-item'>
            <input type='checkbox' id='free_shipping' name='free_shipping' value='free' />
            <label htmlFor='free_shipping'>free shipping</label>
          </li>
          <li className='shipping-item'>
            <input type='checkbox' id='local_pickup' name='local_pickup' value='local' />
            <label htmlFor='local_pickup'>local pickup</label>
          </li>
          <li className='shipping-item'>
            <input type='checkbox' id='flat_rate' name='flat_rate' value='flat_rate' />
            <label htmlFor='flat_rate'>flat rate: $5.00</label>
          </li>
        </ul>
      </div>

      <div className='shipping-calculator'>
        <p className='shipping-distructions'>
          shipping to:&nbsp;
          <strong>{selectedCountry} </strong>.
        </p>

        <form>
          <div className='form-group'>
            <CountrySelect />
            <div className='select-box state'>
              <ToolSelectBox selectedList={state} selectName='state' selectId='state' />
            </div>
          </div>
        </form>

        <div className='cart-price total'>
          <p>Total</p>
          <span>$100.00</span>
        </div>
        <div className='cart-action'>
          <button className='btn btn-dark checkout'>
            checkout
            <FiArrowRight />
          </button>
          <button className='btn btn-outline cart-clear'>clear cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductSummary;
