/* eslint-disable react/prop-types */
import { useState } from 'react';
import Images from '../../assets/images/images';

const AccordionSection = () => {
  const [isCollapsed, setIsCollapsed] = useState({
    customerService: false,
    consultation: false,
    sales: false,
  });

  const handleCollapsed = key => {
    setIsCollapsed(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <section className='section customer-service-section'>
      <div className='section-wrapper'>
        <div className='accordions'>
          <h2 className='title'>We Provide Continuous & Kind Service for Customers</h2>
          <div className='accordion-list'>
            <Accordion
              accordionTitle='Customer Service'
              accordionDescription=' Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Venenatis tell us in metus vulputate eu scelerisque felis. Vel pretium vulp.'
              isCollapsed={isCollapsed.customerService}
              onClick={() => handleCollapsed('customerService')}
            />
            <Accordion
              accordionTitle='Online Consultation'
              accordionDescription=' Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit, sed do eius mod tempor incididunt.'
              isCollapsed={isCollapsed.consultation}
              onClick={() => handleCollapsed('consultation')}
            />
            <Accordion
              accordionTitle='Sales Management'
              accordionDescription=' Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit, sed do eius mod tempor.'
              isCollapsed={isCollapsed.sales}
              onClick={() => handleCollapsed('sales')}
            />
          </div>
        </div>
        <div className='banner-part'>
          <figure>
            <img
              src={Images.about.banner.about_banner_2}
              alt='Banner'
              width='610'
              height='500'
              className='object-cover'
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

const Accordion = ({ accordionTitle, accordionDescription, onClick, isCollapsed }) => {
  return (
    <div className='accordion'>
      <div className={`accordion-header ${isCollapsed ? 'collapsed' : ''}`} onClick={onClick}>
        <button aria-label='Toggle' className='collapse'>
          {accordionTitle}
        </button>
      </div>
      <div className='accordion-body'>
        <p>{accordionDescription}</p>
      </div>
    </div>
  );
};
export default AccordionSection;
