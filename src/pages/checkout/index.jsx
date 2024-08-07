import './style.css';
import { Link } from 'react-router-dom';
import { BreadcrumbList, CountrySelect, PageHeader, ToolSelectBox } from '../../components';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

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
              </div>
              <div className='save-information'>
                <input type='checkbox' name='save' id='save_form' />
                <label htmlFor='save_form'>Save this information for next time.</label>
              </div>

              <Link to='' className='btn btn-dark next-btn'>
                Next
              </Link>
            </form>
          </section>
        </div>
      </div>
    </article>
  );
};
export default Checkout;
