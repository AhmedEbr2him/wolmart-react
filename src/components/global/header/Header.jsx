import './header.css';
import { IoIosArrowDown } from 'react-icons/io';
import { PiPhoneCall } from 'react-icons/pi';
import { FiHeart } from 'react-icons/fi';
import { BiShoppingBag } from 'react-icons/bi';
import { LuMoon, LuSunMedium, LuUser } from 'react-icons/lu';
import { RiMenu2Fill } from 'react-icons/ri';
import Images from '../../../assets/images/images';
import { Link } from 'react-router-dom';
import { Logo, StickyWrapperContent } from '../../';
import { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import { useIsScroll } from '../../../hooks/useIsScroll';
import { routesConstatns } from '../../../constants/routesConstants';
import { RiSearchLine } from 'react-icons/ri';
import { useThemeSwitch } from '../../../hooks/useThemeSwitch';

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
  const { openDrawer, openCart } = useContext(MainContext);
  const { isScroll } = useIsScroll();
  const { storedProducts } = useContext(MainContext);
  const storedProductsLength = storedProducts.products.cart.length;
  const { changeTheme, isDark } = useThemeSwitch();

  return (
    <header className={`header ${isScroll ? 'scroll' : ''}`}>
      <div className='header-top'>
        <div className='container'>
          <div className='left-part'>
            <p>WELCOME TO WOLMART STORE MESSAGE OR REMOVE IT!</p>
          </div>

          <div className='right-part'>
            <div className='menu'>
              <div className='top-links'>
                <Link to='#' aria-label='account link'>
                  <span>My Account</span>
                </Link>
                <div className='auth'>
                  <LuUser size={16} />
                  <Link to='#' aria-label='sign in link'>
                    <span>Sign In</span>
                  </Link>
                  <span className='delimiter'>/</span>
                  <Link to='#' aria-label='sign in link'>
                    <span>Register</span>
                  </Link>
                </div>
              </div>
              <span className='divider'></span>

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
          </div>
        </div>
      </div>

      <div className='header-middle'>
        <div className='container'>
          <div className='left-part'>
            <button
              aria-label='toggle menu button'
              className='small-btn'
              onClick={() => openDrawer()}
            >
              <RiMenu2Fill size={24} />
            </button>
            {/* LOGO */}
            <Logo />

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
              <button type='submit' aria-label='submit form button' className='btn btn-search'>
                <RiSearchLine />
              </button>
            </form>
          </div>
          <div className='right-part'>
            <div className='header-call'>
              <Link to='tel:#' className='call-icon'>
                <PiPhoneCall size={32} />
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

            <button
              aria-label={`Go to ${isDark ? 'light' : 'dark'} mode`}
              className='small-btn theme-btn'
              onClick={changeTheme}
            >
              <LuMoon className='dark-icon' size={24} />
              <LuSunMedium className='light-icon' size={24} />

              <span className='wishlist-label'>Theme</span>
            </button>
            <Link
              to={routesConstatns.WISHLIST}
              role={'button'}
              title='Go to Cart'
              className='small-btn wishlist-btn'
            >
              <FiHeart size={24} />
              <span className='wishlist-label'>Wishlist</span>
            </Link>

            <button
              aria-label='Open Cart'
              className='small-btn cart-btn'
              title='Open Cart'
              onClick={openCart}
            >
              <BiShoppingBag size={24} />
              <span className='cart-label'>Cart</span>
              <span className='badge'>{storedProductsLength}</span>
            </button>
          </div>
        </div>
      </div>

      <StickyWrapperContent />
    </header>
  );
};
export default Header;
