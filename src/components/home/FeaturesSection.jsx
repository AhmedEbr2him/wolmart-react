/* eslint-disable react/prop-types */
import { TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { TbCreditCardRefund } from 'react-icons/tb';
import { TfiHeadphoneAlt } from 'react-icons/tfi';

const FeaturesSection = () => {
  return (
    <section className='section features' data-lazy-trigger>
      <div className='container'>
        <div className='features-wrapper'>
          <div className='feature-box'>
            <div className='icon'>
              <TbTruckDelivery />
            </div>
            <div className='info'>
              <h4 className='box-title'>free shipping & returns</h4>
              <p>For all orders over $99</p>
            </div>
          </div>
          <div className='feature-box'>
            <div className='icon'>
              <RiSecurePaymentLine />
            </div>
            <div className='info'>
              <h4 className='box-title'>secure payment</h4>
              <p>We ensure secure payment</p>
            </div>
          </div>
          <div className='feature-box'>
            <div className='icon'>
              <TbCreditCardRefund />
            </div>
            <div className='info'>
              <h4 className='box-title'>mony back guarantee</h4>
              <p>Any back within 30 days</p>
            </div>
          </div>
          <div className='feature-box'>
            <div className='icon'>
              <TfiHeadphoneAlt />
            </div>
            <div className='info'>
              <h4 className='box-title'>customer support</h4>
              <p>Call or email us 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
