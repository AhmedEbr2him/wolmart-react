import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { TfiHome } from 'react-icons/tfi';
import { BsShop } from 'react-icons/bs';
import { LuUser } from 'react-icons/lu';
import { BiShoppingBag } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { useIsScroll } from '../../../hooks/useIsScroll';
import { routesConstatns } from '../../../constants/routesConstants';

const StickyFooter = () => {
  const { isScroll } = useIsScroll();
  const size = 24;

  const stickList = [
    {
      label: 'Home',
      to: routesConstatns.HOME,
      icon: <TfiHome size={size} />,
    },
    {
      label: 'Shop',
      to: routesConstatns.SHOP,
      icon: <BsShop size={size} />,
    },
    {
      label: 'Account',
      to: '#',
      icon: <LuUser size={size} />,
    },
    {
      label: 'Cart',
      to: routesConstatns.CART,
      icon: <BiShoppingBag size={size} />,
    },
    {
      label: 'Search',
      to: '#',
      icon: <FiSearch size={size} />,
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
