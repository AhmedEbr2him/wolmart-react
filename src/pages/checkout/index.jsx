import './style.css';
import { Link } from 'react-router-dom';
import { BreadcrumbList, CountrySelect, PageHeader, ToolSelectBox } from '../../components';
import { useContext, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import Images from '../../assets/images/images';
import { LiaPaypal } from 'react-icons/lia';
import { FiArrowLeft } from 'react-icons/fi';

const Checkout = () => {
  const { state } = useContext(MainContext);

  return (
    <article className='checkout'>
      <div className='checkout-wrapper'>
        <div className='container'>
          <BreadcrumbList />
        </div>
        <PageHeader pageTitle='Checkout' />

        <div className='container'>
          <section className='section contact-information'>
            <div className='head'>
              <h4 className='field-title'>Contact information</h4>
              <p>
                Already have account? <Link to=''>Login</Link>
              </p>
            </div>

            {/* FORM */}
            <form className='form'>
              <div className='email-offer-field'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  autoComplete='off'
                  className='form-control'
                />
                <label htmlFor='email_offers' className='email_offer'>
                  <input type='checkbox' name='offers' id='email_offers' />
                  Email me with new and offers
                </label>
              </div>

              <h4 className='field-title shipping-title'>Shipping address</h4>

              <div className='shipping-address'>
                <div className='form-group first-name'>
                  <label htmlFor='first-name'>First name</label>
                  <input
                    type='text'
                    id='first-name'
                    className='form-control'
                    autoComplete='off'
                    placeholder='Enter your first name'
                  />
                </div>
                <div className='form-group last-name'>
                  <label htmlFor='last-name'>Last name</label>
                  <input
                    type='text'
                    id='last-name'
                    autoComplete='off'
                    className='form-control'
                    placeholder='Enter your last name'
                  />
                </div>

                <div className='form-group country'>
                  <label htmlFor='country'>Country</label>
                  <CountrySelect />
                </div>

                <div className='form-group state'>
                  <label htmlFor='state'>State</label>
                  <ToolSelectBox selectedList={state} selectName='state' selectId='state' />
                </div>
                <div className='form-group address'>
                  <label htmlFor='address'>Address</label>
                  <input
                    type='text'
                    id='address'
                    autoComplete='off'
                    className='form-control'
                    placeholder='Enter your address'
                  />
                </div>

                <div className='form-group apartment'>
                  <label htmlFor='apartment'>Apartment</label>
                  <input
                    type='text'
                    id='apartment'
                    className='form-control'
                    placeholder='Enter your apartment, suit, etc (optional)'
                  />
                </div>
                <div className='form-group city'>
                  <label htmlFor='city'>City</label>
                  <input
                    type='text'
                    id='city'
                    autoComplete='off'
                    className='form-control'
                    placeholder='Enter your city'
                  />
                </div>
                <div className='form-group zip-code'>
                  <label htmlFor='zip-code'>ZIP Code</label>
                  <input
                    type='text'
                    id='zip-code'
                    autoComplete='off'
                    className='form-control'
                    placeholder='Enter your ZIP code'
                  />
                </div>
                <div className='form-group company'>
                  <label htmlFor='company'>Company (optional)</label>
                  <input
                    type='text'
                    id='company'
                    autoComplete='off'
                    className='form-control'
                    placeholder='Enter your Company (optional)'
                  />
                </div>
                <div className='form-group phone'>
                  <label htmlFor='phone'>Phone</label>
                  <input
                    type='text'
                    id='phone'
                    autoComplete='off'
                    className='form-control'
                    placeholder='Enter your phone'
                  />
                </div>
                <div className='form-group email-address'>
                  <label htmlFor='email'>Email address</label>
                  <input
                    type='text'
                    id='email'
                    autoComplete='off'
                    className='form-control'
                    placeholder='Enter your email address'
                  />
                </div>
                <div className='save-information'>
                  <input type='checkbox' name='save' id='save_form' />
                  <label htmlFor='save_form'>Save this information for next time.</label>
                </div>
              </div>

              <div className='shipping-payment'>
                <h4 className='field-title shipping-title'>Payment method</h4>
                <CreditPayment />
              </div>

              <Link to='' className='btn btn-dark order-btn'>
                Place order
              </Link>
              <Link to='' className='btn btn-dark back-btn'>
                <span>
                  <FiArrowLeft />
                </span>
                Back to cart
              </Link>
            </form>
          </section>
        </div>
      </div>
    </article>
  );
};
export default Checkout;

const CreditPayment = () => {
  const [isSelected, setIsSelected] = useState(null);

  const hanldeIsSelected = e => {
    const checkedValue = e.target.id;

    setIsSelected(checkedValue);
  };

  return (
    <div className='payment-wrapper'>
      {/* CREDIT CARD */}
      <div
        className='payment-type creditcard'
        data-selected={isSelected === 'credit' ? true : false}
      >
        <div className='card-value'>
          <input
            type='radio'
            name='credit card'
            id='credit'
            onChange={hanldeIsSelected}
            checked={isSelected === 'credit'}
          />
          <label htmlFor='credit'>
            credit card
            <figure>
              <img src={Images.payment.payment} alt='Payment' />
            </figure>
          </label>
        </div>

        <div className='card-content'>
          <div className='form-group'>
            <label htmlFor='card_number'>Card number</label>
            <input
              type='number'
              placeholder='.... .... ....'
              name='card_number'
              id='card_number'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='expired_date'>Expiration (MM/YY)</label>
            <input
              type='number'
              name='expired date'
              placeholder='MM/YY'
              id='expired_date'
              className='form-control'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='security_code'>Card security code</label>
            <input
              type='number'
              name='security code'
              placeholder='CSC'
              id='security_code'
              className='form-control'
            />
          </div>
        </div>
      </div>
      {/* PAYPAL */}
      <div className='payment-type paypal' data-selected={isSelected === 'paypal' ? true : false}>
        <div className='card-value'>
          <input
            type='radio'
            name='paypal'
            id='paypal'
            checked={isSelected === 'paypal'}
            onChange={hanldeIsSelected}
          />
          <label htmlFor='paypal'>
            paypal
            <figure>
              <img src={Images.payment.paypal} alt='Payment' width='110' height='110' />
            </figure>
          </label>
        </div>

        <div className='card-content'>
          <Link to='#' className='btn btn-dark'>
            <span>
              <LiaPaypal />
            </span>
            Login with Paypal
          </Link>
        </div>
      </div>
    </div>
  );
};
