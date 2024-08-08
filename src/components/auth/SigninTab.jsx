/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import FormGroup from './FormGroup';

const SigninTab = ({ activeTab, setPassState }) => {
  return (
    <div className={`tab-pane ${activeTab === '#signin' ? 'active' : ''}`} id='#signin'>
      <FormGroup label='User name or email address' id='use_or_email_signin' type='email' />
      <div className='form-group'>
        <label htmlFor='password'>Password *</label>
        <input type='password' name='password' id='password' className='form-control' />
      </div>
      <div className='form-checkbox sign-in'>
        <label htmlFor='remember1'>
          <input type='checkbox' name='remember1' id='remember1' />
          Remember me
        </label>
        <Link
          to='#'
          aria-label='Password recover'
          className='password-lost'
          onClick={() => setPassState(true)}
        >
          Lost your password?
        </Link>
      </div>
      <Link className='btn btn-primary'>sign in</Link>
    </div>
  );
};
export default SigninTab;
