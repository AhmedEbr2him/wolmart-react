import { FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineDiscount } from 'react-icons/md';
const StickyWrapperContent = () => {
  return (
    <div className='sticky-content-wrapper'>
      <div className='header-bottom'>
        <div className='container'>
          <div className='inner-wrapper'>
            <div className='left-part'>
              <div className='dropdown category-dropdown has-border'>
                <Link
                  to={'#'}
                  className='category-toggle'
                  role='button'
                  aria-haspopup='true'
                  title='Browse Categories'
                >
                  <FaList size={18} />
                  <span>Browse Categories</span>
                </Link>

                {/* DROPDOWN BOX */}
                <div className='dropdown-box'>
                  <ul className='menu category-menu'>
                    <li className='has-submenu'></li>
                  </ul>
                </div>
              </div>
              {/* NAVBAR*/}
              <div className='main-nav'></div>
            </div>
            <div className='right-part'>
              <Link to='#'>
                <GrLocation size={20} />
                <span>Track Order</span>
              </Link>
              <Link to='#'>
                <MdOutlineDiscount size={20} />
                <span>Daily Deals</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StickyWrapperContent;
