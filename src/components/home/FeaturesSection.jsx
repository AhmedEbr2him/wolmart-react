import { TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { TbCreditCardRefund } from 'react-icons/tb';
import { TfiHeadphoneAlt } from 'react-icons/tfi';

const FeaturesSection = () => {
  return (
    <div className='features'>
      <div className='container'>
        <div className='feature-box'>
          <div className='icon'>
            <TbTruckDelivery />
          </div>
          <h4 className='box-title'>free shipping & returns</h4>
          <p>For all orders over $99</p>
        </div>
        <div className='feature-box'>
          <div className='icon'>
            <RiSecurePaymentLine />
          </div>
          <h4 className='box-title'>secure payment</h4>
          <p>We ensure secure payment</p>
        </div>
        <div className='feature-box'>
          <div className='icon'>
            <TbCreditCardRefund />
          </div>
          <h4 className='box-title'>mony back guarantee</h4>
          <p>Any back within 30 days</p>
        </div>
        <div className='feature-box'>
          <div className='icon'>
            <TfiHeadphoneAlt />
          </div>
          <h4 className='box-title'>customer support</h4>
          <p>Call or email us 24/7</p>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;
