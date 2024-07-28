import './style.css';
import { Link } from 'react-router-dom';
import { TfiHome } from 'react-icons/tfi';
import { BsShop } from 'react-icons/bs';
import { LuUser } from 'react-icons/lu';
import { BiShoppingBag } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { useIsScroll } from '../../../hooks/useIsScroll';

const StickyFooter = () => {
  const { isScroll } = useIsScroll();

  return (
    <div className='sticky-content-wrapper' style={{ display: 'block' }} data-scroll={isScroll}>
      <div className='sticky-footer'>
        <Link to='#' className='sticky-link'>
          <TfiHome size={24} />
          <p>Home</p>
        </Link>
        <Link to='#' className='sticky-link'>
          <BsShop size={24} />
          <p>Shop</p>
        </Link>
        <Link to='#' className='sticky-link'>
          <LuUser size={24} />
          <p>Account</p>
        </Link>
        <Link to='#' className='sticky-link'>
          <BiShoppingBag size={24} />
          <p>Cart</p>
        </Link>
        <Link to='#' className='sticky-link'>
          <FiSearch size={24} />
          <p>Search</p>
        </Link>
      </div>
    </div>
  );
};
export default StickyFooter;
