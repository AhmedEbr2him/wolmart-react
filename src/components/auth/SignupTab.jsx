/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import FormGroup from './FormGroup';
import { useState } from 'react';

const SignupTab = ({ activeTab }) => {
  const [isCollapsed, setIsCollapsed] = useState(null);

  const handleIsCollapsed = e => {
    const checkValue = e.target.id;
    setIsCollapsed(checkValue);
  };

  return (
    <div className={`tab-pane ${activeTab === '#signup' ? 'active' : ''}`} id='#signup'>
      <FormGroup label='Name' id='name_signup' type='text' />
      <FormGroup label='User name or email address' id='use_or_email_signup' type='email' />

      <div className='form-group'>
        <label htmlFor=''>Password *</label>
        <input type='password' name='password' id='password_sign_up' className='form-control' />
      </div>

      <div className='form-checkbox signup'>
        <div className='form-group'>
          <input
            type='radio'
            name='customer_signup'
            id='customer_signup'
            onChange={handleIsCollapsed}
            checked={isCollapsed === 'customer_signup'}
          />
          <label htmlFor='customer_signup'>I am a customer</label>
        </div>
        <br />
        <div className='form-group'>
          <input
            type='radio'
            name='vendor_signup'
            id='vendor_signup'
            onChange={handleIsCollapsed}
            checked={isCollapsed === 'vendor_signup'}
          />
          <label htmlFor='vendor_signup'>I am a vendor</label>
        </div>
      </div>

      <div className='vendor' data-collapsed={isCollapsed === 'vendor_signup' ? true : false}>
        <FormGroup label='Shop name' id='shop_name_signup' type='text' />
        <FormGroup label='Shop URL' id='shop_url_signup' type='text' />
        <FormGroup label='Phone number' id='phone_signup' type='number' />
      </div>

      <div className='form-checkbox'>
        <label htmlFor='remember2'>
          <input type='checkbox' name='remember2' id='remember2' />I agree to the
        </label>
        &nbsp;
        <Link to='#' className='password-lost'>
          Privacy policy
        </Link>
      </div>
      <p className='data-used-information'>
        Your personal data will be used to support your experience throughout this website, to
        manage access to your account, and for other purposes described in our
        <Link to='#'>Terms of use and Privacy policy</Link>
      </p>
      <Link className='btn btn-primary'>sign up</Link>
    </div>
  );
};
export default SignupTab;
