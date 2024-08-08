/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
const Password = ({ passTabActive, setPassState }) => {
  return (
    <div className={`password-pane ${passTabActive ? 'active' : ''}`} id='password'>
      <button className='back' aria-label='Back' onClick={() => setPassState(false)}>
        <span>
          <FaArrowLeftLong />
        </span>
        Back
      </button>
      <h4>Forget password</h4>
      <p>Always keey your account secure and dont&apos;t forget to update it.</p>
      <form>
        <div className='form-group'>
          <label htmlFor='forget_pass_email'>Enter your email address</label>
          <input
            type='email'
            id='forget_pass_email'
            name='forget_pass_email'
            className='form-control'
          />
        </div>
        <Link to='#signin' role='button' className='btn btn-dark'>
          Submit
        </Link>
      </form>
    </div>
  );
};
export default Password;
