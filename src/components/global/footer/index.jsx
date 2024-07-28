import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../common/Logo';
import { SlSocialFacebook } from 'react-icons/sl';
import { RiTwitterXLine } from 'react-icons/ri';
import { ImPinterest2 } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import { SlSocialYoutube } from 'react-icons/sl';
import { categories, linksList } from '../../../constants/mockData';
import Images from '../../../assets/images/images';
import FooterNewsletter from './FooterNewsletter';

const Footer = () => {
  const iconSize = 16;
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <FooterNewsletter />
      <div className='container'>
        <div className='footer-top'>
          <div className='widget'>
            <Logo />
            <div className='widget-body'>
              <p className='widget-title'>Got Question? Call us 24/7</p>
              <Link to='tel:18005707777' className='tel'>
                1-800-570-7777
              </Link>
              <p className='desc'>
                Register now to get updates on pronot get up icons & coupons ster now toon.
              </p>
              <div className='social-list'>
                <Link to='#' className='facebook-link social-item'>
                  <SlSocialFacebook size={iconSize} />
                </Link>
                <Link to='#' className='x-link social-item'>
                  <RiTwitterXLine size={iconSize} />
                </Link>
                <Link to='#' className='pin-link social-item'>
                  <ImPinterest2 size={iconSize} />
                </Link>
                <Link to='#' className='instagram-link social-item'>
                  <SiInstagram size={iconSize} />
                </Link>
                <Link to='#' className='youtube-link social-item'>
                  <SlSocialYoutube size={iconSize} />
                </Link>
              </div>
            </div>
          </div>

          {linksList.map((list, index) => {
            return (
              <div className='widget' key={index}>
                <h3 className='widget-title'>{list.label}</h3>
                <ul className='widget-body'>
                  {list.list.map((item, index) => (
                    <li key={index}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className='footer-middle'>
          <div className='widget widget-category'>
            {categories.map((category, index) => (
              <div key={index} className='category-box'>
                <h5 className='category-name'>{category.label}:&nbsp;</h5>

                {category.list.map((list, index) => (
                  <Link key={index} to={list.to} className='category-link'>
                    {list.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='footer-left'>
            <p className='copyright'>Copyright &copy; {year} Wolmart Store. All Rights Reserved.</p>
          </div>
          <div className='footer-right'>
            <p>We&prime;re using safe payment for</p>
            <img src={Images.payment.payment} alt='payment methods' />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
