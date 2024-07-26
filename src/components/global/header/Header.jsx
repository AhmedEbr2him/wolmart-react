import './header.css';
import { IoIosArrowDown } from 'react-icons/io';
import { PiPhoneCall } from 'react-icons/pi';
import { FiHeart } from 'react-icons/fi';
import { BiShoppingBag } from 'react-icons/bi';
import { LuUser } from 'react-icons/lu';
import { RiMenu2Fill } from 'react-icons/ri';
import Images from '../../../assets/images/images';
import { Link } from 'react-router-dom';
import { routesConstatns } from '../../../constants/routesConstants';
import { StickyWrapperContent } from '../../';
import { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';

const Header = () => {
  const currencyList = ['USD', 'EUR', 'EGP'];
  const langList = [
    {
      img: Images.flags.en,
      title: 'EN',
    },
    {
      img: Images.flags.fr,
      title: 'FR',
    },
  ];
  const categories = [
    'All Categories',
    'Fashion',
    'Furniture',
    'Shoes',
    'Sports',
    'Games',
    'Computers',
    'Electronics',
    'Kitchen',
    'Clothing',
  ];
  const { openDrawer } = useContext(MainContext);

  return (
    <header className='header'>
      <div className='header-top'>
        <div className='container'>
          <div className='left-part'>
            <marquee>WELCOME TO WOLMART STORE MESSAGE OR REMOVE IT!</marquee>
          </div>
          <div className='right-part'>
            <div className='menu'>
              <div className='dropdown'>
                <button className='dropdown-button' aria-label='dropdown list button'>
                  <span>USD</span>
                  <IoIosArrowDown />
                </button>
                <div className='dropdown-list'>
                  {currencyList.map((currency, index) => (
                    <button key={index} className='dropdown-item'>
                      {currency}
                    </button>
                  ))}
                </div>
              </div>

              <div className='dropdown'>
                <button className='dropdown-button' aria-label='dropdown list button'>
                  <span>EN</span>
                  <img src={Images.flags.en} alt='language' />
                  <IoIosArrowDown />
                </button>
                <div className='dropdown-list'>
                  {langList.map((lang, index) => (
                    <button key={index} className='dropdown-item'>
                      <img src={lang.img} alt='language' />
                      <span>{lang.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <span className='divider'></span>
            <div className='top-links'>
              <Link to='#' aria-label='blog link'>
                <span> Blog</span>
              </Link>
              <Link to='#' aria-label='content us link'>
                <span>Content Us</span>
              </Link>
              <Link to='#' aria-label='account link'>
                <span>My Account</span>
              </Link>
              <Link to='#' aria-label='sign in link'>
                <span>Sign In</span>
                <LuUser />
              </Link>
              <span className='delimiter'>/</span>
              <Link to='#' aria-label='sign in link'>
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='header-middle'>
        <div className='container'>
          <div className='left-part'>
            <button aria-label='toggle menu button' className='btn' onClick={() => openDrawer()}>
              <RiMenu2Fill size={24} />
            </button>
            <Link to={routesConstatns.HOME} className='logo' aria-label='site logo'>
              <img
                src={Images.logo.lightLogo}
                className='light-logo'
                alt='site logo'
                width='130'
                height='28'
              />
              <img
                src={Images.logo.darkLogo}
                className='dark-logo'
                alt='site logo'
                width='130'
                height='28'
              />
            </Link>

            <form action='#' className='header-search'>
              <div className='select-box'>
                <select name='category' id='category'>
                  {categories.map((category, index) => (
                    <option key={index} value={index + 1}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type='text'
                className='form-control'
                name='search'
                placeholder='Search Products...'
              />
              <button
                type='submit'
                aria-label='submit form button'
                className='btn btn-search'
              ></button>
            </form>
          </div>
          <div className='right-part'>
            <div className='header-call'>
              <Link to='tel:#' className='call-icon'>
                <PiPhoneCall size={24} />
              </Link>
              <div className='call-info'>
                <h4 className='chat'>
                  <Link to='mailto:#'>Live Chat</Link>
                  <span>or:</span>
                  <Link to='tel:#' className='phone-num'>
                    0(800)123-456
                  </Link>
                </h4>
              </div>
            </div>

            <Link to='#' className='btn wishlist-btn'>
              <FiHeart size={24} />
              <span className='wishlist-label'>Wishlist</span>
            </Link>
            <Link to='#' className='btn cart-btn'>
              <BiShoppingBag size={24} />
              <span className='cart-label'>Cart</span>
              <span className='badge'>0</span>
            </Link>
          </div>
        </div>
      </div>

      <StickyWrapperContent />
    </header>
  );
};
export default Header;
