import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import ToolSelectBox from '../common/ToolSelectBox';
import { FiArrowRight } from 'react-icons/fi';

const ProductSummary = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [state, setStates] = useState([]);

  const getCountries = async () => {
    try {
      const response = await fetch('/data.json');
      if (response.ok) {
        const data = await response.json();
        setCountries(data.country);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectCountry = e => {
    const selectedValue = e.target.value;
    setSelectedCountry(selectedValue);
    const country = countries.find(country => country.value === selectedValue);

    if (country) {
      setStates(country.states);
    } else {
      setStates([]);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  /* SET DEFAULT COUNTRY WHEN APP START */
  useEffect(() => {
    const defaultCountry = countries.find(country => country.value === selectedCountry);
    defaultCountry && setStates(defaultCountry.states);
  }, [selectedCountry, countries]);

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
            <div className='select-box'>
              <select
                name='country'
                id='country'
                value={selectedCountry}
                onChange={handleSelectCountry}
              >
                {countries.map((country, index) => (
                  <option key={index} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
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
          <button className='btn btn-outline cart-clear'>clear cart</button>
          <button className='btn btn-dark checkout'>
            proceed to checkout
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductSummary;
