import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { useIsScroll } from '../../../hooks/useIsScroll';
import { routesConstatns } from '../../../constants/routesConstants';
import { BiHome, BiStore, BiUser, BiShoppingBag, BiSearchAlt } from 'react-icons/bi';

const StickyFooter = () => {
  const { isScroll } = useIsScroll();
  const size = 26;

  const stickList = [
    {
      label: 'Home',
      to: routesConstatns.HOME,
      icon: <BiHome size={size} />,
    },
    {
      label: 'Shop',
      to: routesConstatns.SHOP,
      icon: <BiStore size={size} />,
    },
    {
      label: 'Account',
      to: routesConstatns.AUTHENTICATION,
      icon: <BiUser size={size} />,
    },
    {
      label: 'Cart',
      to: routesConstatns.CART,
      icon: <BiShoppingBag size={size} />,
    },
    {
      label: 'Search',
      to: '#',
      icon: <BiSearchAlt size={size} />,
    },
  ];
  const location = useLocation();

  return (
    <div className='sticky-content-wrapper' style={{ display: 'block' }} data-scroll={isScroll}>
      <div className='sticky-footer'>
        {stickList.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`sticky-link ${location.pathname === item.to ? 'active' : ''}`}
          >
            {item.icon}
            <p>{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default StickyFooter;
