import { BiEnvelope } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa6';

const FooterNewsletter = () => {
  return (
    <div className='footer-newsletter'>
      <div className='container'>
        <div className='newsletter-wrapper'>
          <div className='icon-box'>
            <div className='icon-box-icon'>
              <BiEnvelope />
            </div>
            <div className='icon-box-content'>
              <h4 className='icon-box-title'>Subscribe To Our Newsletter</h4>
              <p>Get all the latest information on Events, Sales and Offers.</p>
            </div>
          </div>
          <div className='form-box'>
            <form className='input-wrapper'>
              <input
                type='text'
                className='form-control'
                name='email'
                id='email'
                placeholder='Your Email Adress'
                autoComplete='off'
              />
              <button className='btn btn-dark' aria-label='subscripe button'>
                <span>Subscripe</span>
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterNewsletter;
