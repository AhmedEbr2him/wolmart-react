import './style.css';
import PageHeader from '../../components/common/PageHeader';
import BreadcrumbList from '../../components/common/BreadcrumbList';
import { Introduce } from '../../components';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { MdOutlineMail, MdOutlineLocationOn } from 'react-icons/md';
import { LiaFaxSolid } from 'react-icons/lia';
import { IoIosArrowDown } from 'react-icons/io';
import Slider from 'react-slick';
import { useState } from 'react';

const Contact = () => {
  return (
    <article className='contact-us'>
      <div className='container'>
        <BreadcrumbList />
      </div>
      <PageHeader pageTitle='Contact us' />

      <div className='page-wrapper'>
        <div className='container'>
          <Introduce
            title='Contact Information '
            paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
          />

          <section className='section contact-information-section'>
            <InformationBoxItems />
          </section>
          <hr className='horizontal-divider' />

          <section className='section contact-section'>
            <div className='accordion-wrapper'>
              <h4 className='title'>People usually ask these</h4>
              <Accordion />
            </div>
            <div className='inputs-wrapper'>
              <h4 className='title'>Send Us a Message</h4>
              <form>
                <div className='form-group'>
                  <label htmlFor='name'>Your Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    autoComplete='off'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='emali'>Your Email</label>
                  <input
                    type='email'
                    id='emali'
                    name='emali'
                    autoComplete='off'
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='textarea'>Your Message</label>
                  <textarea name='message' id='textarea'></textarea>
                </div>

                <button type='submit' className='btn btn-dark'>
                  send now
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      <div className='map-wrapper'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.3366348526!2d31.299663952430286!3d30.05955631672723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1722950539728!5m2!1sar!2seg'
          width='600'
          height='450'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </article>
  );
};
export default Contact;

const InformationBoxItems = () => {
  const contactList = [
    {
      type: 'E-mail Address',
      content: 'mail@example.com',
      icon: <MdOutlineMail />,
    },
    {
      type: 'Phone Number',
      content: '(123) 456-7890 / (123) 456-9870',
      icon: <RiCustomerServiceLine />,
    },
    {
      type: 'Address',
      content: 'Lawrence, NY 11345, USA',
      icon: <MdOutlineLocationOn />,
    },
    {
      type: 'Fax',
      content: '1-800-570-7777',
      icon: <LiaFaxSolid />,
    },
  ];
  const settings = {
    slidesToShow: 4,
    speed: 500,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {contactList.map((item, index) => (
        <div key={index} className='information-box'>
          <span className='icon-box'>{item.icon}</span>
          <div className='icon-box-content'>
            <h4 className='icon-box-title'>{item.type}</h4>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const Accordion = () => {
  const accordionList = [
    {
      question: 'How can I cancel my order?',
      reply:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium',
    },
    {
      question: 'Why is my registration delayed?',
      reply:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium',
    },
    {
      question: 'What do I need to buy products?',
      reply:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium',
    },
    {
      question: 'How can I track an order?',
      reply:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium',
    },
    {
      question: 'How can I get money back?',
      reply:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp orincid idunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulp utate eu sceler isque felis. Vel pretium',
    },
  ];
  const [isExpaned, setIsExpaned] = useState(null);

  return (
    <div className='accordion-list'>
      {accordionList.map((card, index) => (
        <div key={index} className={`card ${isExpaned === index ? 'expanded' : ''}`}>
          <div
            className='card-header'
            onClick={() => setIsExpaned(isExpaned === index ? null : index)}
          >
            <h4>
              <span>{card.question}</span>
              <button aria-label='Expand' className='btn expand'>
                <IoIosArrowDown />
              </button>
            </h4>
          </div>
          <div className='card-body'>
            <p>{card.reply}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
